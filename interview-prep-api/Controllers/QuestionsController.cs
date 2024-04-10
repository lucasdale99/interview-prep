using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Question.Models;

namespace interview_prep_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionContext _context;

        public QuestionsController(QuestionContext context)
        {
            _context = context;
        }

        // GET: api/Questions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionItem>>> GetQuestions()
        {
          if (_context.QuestionItems == null)
          {
              return NotFound();
          }
            return await _context.QuestionItems.ToListAsync();
        }

        // GET: api/Questions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionItem>> GetQuestion(long id)
        {
          if (_context.QuestionItems == null)
          {
              return NotFound();
          }
            var questionItem = await _context.QuestionItems.FindAsync(id);

            if (questionItem == null)
            {
                return NotFound();
            }

            return questionItem;
        }

        // PUT: api/Questions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestion(long id, QuestionItem questionItem)
        {
            if (id != questionItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(questionItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Questions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QuestionItem>> PostQuestions(QuestionItem questionItem)
        {
          if (_context.QuestionItems == null)
          {
              return Problem("Entity set 'QuestionContext.QuestionItems' is null.");
          }
            _context.QuestionItems.Add(questionItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestion", new { id = questionItem.Id }, questionItem);
        }

        // DELETE: api/Questions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestionItem(long id)
        {
            if (_context.QuestionItems == null)
            {
                return NotFound();
            }
            var questionItem = await _context.QuestionItems.FindAsync(id);
            if (questionItem == null)
            {
                return NotFound();
            }

            _context.QuestionItems.Remove(questionItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestionItemExists(long id)
        {
            return (_context.QuestionItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}