using BpaWeb.Ui.Controllers.Extensions;
using BpaWeb.Service;
using BpaWeb.Domain.Interface;
using BpaWeb.Domain;
using BpaWeb.Domain.Interfaces;
using BpaWeb.Service.Services;

var builder = WebApplication.CreateBuilder(args);

IServiceCollection services = builder.Services;
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.
services.AddControllersWithViews();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddEndpointsApiExplorer();

// builder.Services.AddSwaggerGen();
services.AddSwaggerDocumentation();

// services.AddSession(options =>
// {
//   options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
//   options.Cookie.Name = "Site.Session";
//   options.Cookie.HttpOnly = true;
//   options.IdleTimeout = TimeSpan.FromSeconds(60 * 1 / 2);
// });

// add distributed cache service backed by Redis cache
services.AddStackExchangeRedisCache(options =>
{
  options.Configuration = configuration.GetValue<string>("Redis:ServerUrl");
});

services.AddAutoMapper(c => c.AddProfile<MappingProfile>(), typeof(Program));

// add dependency injection

services.AddScoped<ICacheService, CacheService>();
services.AddScoped<IChannelService, ChannelService>();
services.AddScoped<IBillerService, BillerService>();
services.AddScoped<IBillerCategoryService, BillerCategoryService>();
services.AddScoped<IBillerProductService, BillerProductService>();
services.AddScoped<IEnquiryService, EnquiryService>();
services.AddScoped<IConfirmService, ConfirmService>();
services.AddScoped<IHealthCheckService, HealthCheckService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
} else {
  app.UseSwaggerGen();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

//Enable sessions
//app.UseSession();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
