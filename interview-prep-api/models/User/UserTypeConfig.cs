using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace UserModels;

public class UserTypeConfig : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(x => x.Id);

        // Define the one-to-many relationship
        builder.HasMany(u => u.QuestionItems)
               .WithOne(qi => qi.User)
               .HasForeignKey(qi => qi.UserId);
    }
}