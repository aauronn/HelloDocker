using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelloDockerWin.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Configuration;
using HelloDockerWin.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace HelloDockerWin
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            Env = env;
        }

        public IConfiguration Configuration { get; }
        private IHostingEnvironment Env { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add identity Service
            services.AddIdentity<Principal, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;

            }).AddEntityFrameworkStores<CityInfoContext>();


            services.AddAuthentication()
                    .AddCookie()
                    .AddJwtBearer(cfg => {
                        cfg.TokenValidationParameters = new TokenValidationParameters()
                        {
                            ValidIssuer = Configuration["Tokens:Issuer"],
                            ValidAudience = Configuration["Tokens:Audiance"],
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                        };
                    });

            // Add MVC Service
            services.AddMvc(opt =>
            {
                if (Env.IsProduction())
                {
                    opt.Filters.Add(new RequireHttpsAttribute());
                }
            }).AddMvcOptions(o =>
                                     o.OutputFormatters.Add(new XmlDataContractSerializerOutputFormatter())
                               );

            // Old way to access connection string
            //var connectionString = Configuration["ConnectionStrings:CityInfoDB"];

            //New way to access ConnectionString
            var connectionString = Configuration.GetConnectionString("CityInfoDB");

            // Add DB Context
            services.AddDbContext<CityInfoContext>(o => o.UseSqlServer(connectionString));

            // Add City Info Repository
            services.AddScoped<ICityInfoRepository, CityInfoRepository>();

            // Add CityInfo Seeder
            services.AddTransient<CityInfoSeeder>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, CityInfoContext cityInfoContext)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //cityInfoContext.EnsureSeedDataForContext();

            // Enable static files to serve Html, CSS, JS, etc
            app.UseStaticFiles();

            // Enable Authentication, this service was defined in ConfigureServices Method
            app.UseAuthentication();

            // Initialize Automapper
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<City, Models.CityWithoutPointsOfInterestDto>();
                cfg.CreateMap<City, Models.CityDto>();
                cfg.CreateMap<Models.CityForCreationDto, City>();

                cfg.CreateMap<PointOfInterest, Models.PointOfInterestDto>();
                cfg.CreateMap<Models.PointOfInterestForCreationDto, PointOfInterest>();
                cfg.CreateMap<Models.PointOfInterestForUpdateDto, PointOfInterest>();
            });

            // Seed if development
            if (env.IsDevelopment())
            {
                using (var scope = app.ApplicationServices.CreateScope())
                {
                    var seeder = scope.ServiceProvider.GetService<CityInfoSeeder>();

                    seeder.Seed().Wait();
                }
            }

            // MVC Routes
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
