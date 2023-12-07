using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Question.Models;

public class QuestionItemTypeConfig : IEntityTypeConfiguration<QuestionItem>
{
    public void Configure(EntityTypeBuilder<QuestionItem> builder)
    {
        builder.HasKey(x => x.Id);

        // Configure the foreign key for User
        builder.HasOne(qi => qi.User)
               .WithMany(u => u.QuestionItems)
               .HasForeignKey(qi => qi.UserId);
    }
}