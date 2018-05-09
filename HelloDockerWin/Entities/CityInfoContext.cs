using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloDockerWin.Entities
{
    public class CityInfoContext : IdentityDbContext<Principal>
    {
        public CityInfoContext(DbContextOptions<CityInfoContext> options) 
            : base(options)
        {
            //Database.EnsureCreated();
            Database.Migrate();

        }

        public DbSet<City> Cities { get; set; }
        public DbSet<PointOfInterest> PointsOfInterest { get; set; }

        public DbSet<Principal> Principals { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("connectionString");
        //    base.OnConfiguring(optionsBuilder);
        //}
    }
}
