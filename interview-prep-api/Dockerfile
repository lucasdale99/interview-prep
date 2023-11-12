FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["interview-prep-api/interview-prep-api.csproj", "interview-prep-api/"]
RUN dotnet restore "interview-prep-api.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "interview-prep-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "interview-prep-api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "interview-prep-api.dll"]
