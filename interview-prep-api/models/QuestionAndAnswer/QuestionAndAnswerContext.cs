using Microsoft.EntityFrameworkCore;

namespace QuestionAndAnswer.Models;

public class QuestionAndAnswerContext : DbContext
{
    public QuestionAndAnswerContext(DbContextOptions<QuestionAndAnswerContext> options)
        : base(options)
    {
    }

    public DbSet<QuestionAndAnswerItem> QuestionAndAnswerItems { get; set; } = null!;
}