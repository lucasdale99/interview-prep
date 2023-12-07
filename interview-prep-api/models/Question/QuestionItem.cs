using UserModels;
using System.ComponentModel.DataAnnotations.Schema;

namespace Question.Models;

[Table("QuestionItems")]
public class QuestionItem
{
    public long Id { get; set; }
    public string? Question { get; set; }
    public string? Answer { get; set; }

    // Foreign key for User
    public long UserId { get; set; }

    // Navigation property for User
    public UserModels.User User { get; set; }
}
