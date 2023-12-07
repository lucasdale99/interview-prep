using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace interviewprepapi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserQuestionRelationship : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // Creating the Users table
        migrationBuilder.CreateTable(
            name: "Users",
            columns: table => new
            {
                Id = table.Column<long>(type: "bigint", nullable: false)
                    .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                Name = table.Column<string>(type: "text", nullable: false),
                Email = table.Column<string>(type: "text", nullable: false),
                EmailVerified = table.Column<bool>(type: "boolean", nullable: false),
                Image = table.Column<string>(type: "text", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Users", x => x.Id);
            });

        // Create index for the new UserId column
        migrationBuilder.CreateIndex(
            name: "IX_QuestionItems_UserId",
            table: "QuestionItems",
            column: "UserId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        // Revert changes made in the Up method
        migrationBuilder.DropTable(
            name: "Users");

        migrationBuilder.DropColumn(
            name: "UserId",
            table: "QuestionItems");
    }
}
}
