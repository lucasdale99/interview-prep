using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Question.Models;

public class QuestionItemTypeConfig : IEntityTypeConfiguration<QuestionItem>
{
    public void Configure(EntityTypeBuilder<QuestionItem> builder)
    {
        builder.HasKey(x => x.Id);
    }
}