using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace QuestionAndAnswer.Models;

public class QuestionAndAnswerItemTypeConfig : IEntityTypeConfiguration<QuestionAndAnswerItem>
{
    public void Configure(EntityTypeBuilder<QuestionAndAnswerItem> builder)
    {
        builder.HasKey(x => x.Id);
    }
}