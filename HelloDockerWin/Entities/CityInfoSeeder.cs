using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloDockerWin.Entities
{
    public class CityInfoSeeder
    {
        private readonly CityInfoContext _context;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<Principal> _userManager;

        public CityInfoSeeder(CityInfoContext context, IHostingEnvironment hosting, UserManager<Principal> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();

            var Principal = await _userManager.FindByEmailAsync("luis@mail.com");

            if (Principal == null)
            {
                Principal = new Principal
                {
                    FirstName = "Luis",
                    LastName = "Gutierrez",
                    UserName = "luis@mail.com",
                    Email = "luis@mail.com"
                };

                var result = await _userManager.CreateAsync(Principal, "P@ssw0rd!");

                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default user");
                }

            }

            if (_context.Cities.Any())
            {
                return;
            }

            // init seed data
            var cities = new List<City>()
            {
                new City()
                {
                    Name= "New York City",
                    Description="The one with that big park.",
                    Principal = Principal,
                    PointsOfInterest = new List<PointOfInterest>()
                    {
                        new PointOfInterest()
                        {
                            Name = "Central Park",
                            Description = "The most visited urban park in the United States."
                        },
                        new PointOfInterest()
                        {
                            Name = "Empire State Building",
                            Description = "A 102-story skyscraper located in Midtown Manhattan."
                        }
                    }
                },
                new City()
                {
                    Name= "Paris",
                    Description="The one with the big tower.",
                    Principal = Principal,
                    PointsOfInterest = new List<PointOfInterest>()
                    {
                        new PointOfInterest()
                        {
                            Name = "Eiffel Tower",
                            Description = "A wrought iron lattice tower on the Cham de Mars, named after engineer Gustav Eiffel."
                        },
                        new PointOfInterest()
                        {
                            Name = "The Louvre",
                            Description = "The world's lasgest museum."
                        }
                    }
                }
            };

            _context.Cities.AddRange(cities);
            _context.SaveChanges();

        }
    }
}
