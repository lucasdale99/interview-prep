using Question.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserModels;

public class User
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public bool EmailVerified { get; set; }
    public string Image { get; set; }

    // Collection of QuestionItems
    public ICollection<QuestionItem> QuestionItems { get; set; }
}