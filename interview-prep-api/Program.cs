using Microsoft.EntityFrameworkCore;
using TodoApi.Models;
using Question.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var myAllowedSpecificOrigin = "_myAllowedSpecificOrigin";
Console.WriteLine(connectionString);
builder.Services.AddControllers();
builder.Services.AddDbContext<TodoContext>(options =>
options.UseNpgsql(connectionString));
builder.Services.AddDbContext<QuestionContext>(options =>
options.UseNpgsql(connectionString));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowedSpecificOrigin,
    builder => builder
        .WithOrigins("http://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyOrigin()
        .AllowAnyMethod()
    );
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(myAllowedSpecificOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();
