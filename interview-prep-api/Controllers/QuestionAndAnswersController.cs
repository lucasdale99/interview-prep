using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuestionAndAnswer.Models;

namespace interview_prep_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionAndAnswersController : ControllerBase
    {
        private readonly QuestionAndAnswerContext _context;

        public QuestionAndAnswersController(QuestionAndAnswerContext context)
        {
            _context = context;
        }

        // GET: api/QuestionAndAnswers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionAndAnswerItem>>> GetQuestionAndAnswers()
        {
          if (_context.QuestionAndAnswerItems == null)
          {
              return NotFound();
          }
            return await _context.QuestionAndAnswerItems.ToListAsync();
        }

        // GET: api/QuestionAndAnswers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionAndAnswerItem>> GetQuestionAndAnswer(long id)
        {
          if (_context.QuestionAndAnswerItems == null)
          {
              return NotFound();
          }
            var questionAndAnswerItem = await _context.QuestionAndAnswerItems.FindAsync(id);

            if (questionAndAnswerItem == null)
            {
                return NotFound();
            }

            return questionAndAnswerItem;
        }

        // PUT: api/QuestionAndAnswers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestionAndAnswer(long id, QuestionAndAnswerItem questionAndAnswerItem)
        {
            if (id != questionAndAnswerItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(questionAndAnswerItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionAndAnswerItemExists(id))
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

        // POST: api/QuestionAndAnswers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<QuestionAndAnswerItem>> PostQuestionAndAnswers(QuestionAndAnswerItem questionAndAnswerItem)
        {
          if (_context.QuestionAndAnswerItems == null)
          {
              return Problem("Entity set 'QuestionAndAnswerContext.QuestionAndAnswerItems' is null.");
          }
            _context.QuestionAndAnswerItems.Add(questionAndAnswerItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestionAndAnswer", new { id = questionAndAnswerItem.Id }, questionAndAnswerItem);
        }

        // DELETE: api/QuestionAndAnswerItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestionAndAnswerItem(long id)
        {
            if (_context.QuestionAndAnswerItems == null)
            {
                return NotFound();
            }
            var questionAndAnswerItem = await _context.QuestionAndAnswerItems.FindAsync(id);
            if (questionAndAnswerItem == null)
            {
                return NotFound();
            }

            _context.QuestionAndAnswerItems.Remove(questionAndAnswerItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestionAndAnswerItemExists(long id)
        {
            return (_context.QuestionAndAnswerItems?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }

}