using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HelloDockerWin.Entities;
using Microsoft.EntityFrameworkCore;

namespace HelloDockerWin.Services
{
    public class CityInfoRepository : ICityInfoRepository
    {
        private CityInfoContext _context;

        public CityInfoRepository(CityInfoContext context)
        {
            _context = context;
        }

        public void AddCity(City city)
        {
            _context.Add(city);
        }

        public void AddPointOfInterestForCity(Guid cityId, PointOfInterest pointOfInterest)
        {
            var city = GetCity(cityId, false);

            city.PointsOfInterest.Add(pointOfInterest);
        }

        public bool CityExist(Guid cityId)
        {
            return _context.Cities
                           .Any(c => c.Id == cityId);
        }

        public void DeletePointOfInterest(PointOfInterest pointOfInterest)
        {
            _context.PointsOfInterest.Remove(pointOfInterest);
        }

        public IEnumerable<City> GetCities()
        {
            var result = _context.Cities
                                 .OrderBy(x => x.Name)
                                 .ToList();
            return result;
        }

        public IEnumerable<City> GetCitiesByUser(string username)
        {
            var result = _context.Cities
                                 .Where(x => x.Principal.UserName == username)
                                 .OrderBy(x => x.Name)
                                 .ToList();
            return result;
        }

        public City GetCity(Guid cityId, bool includePointsOfInterest)
        {
            if (includePointsOfInterest)
            {
                return _context.Cities
                               .Include(x => x.PointsOfInterest)
                               .FirstOrDefault(x => x.Id == cityId);
            }
            return _context.Cities
                           .FirstOrDefault(x => x.Id == cityId);
        }

        public PointOfInterest GetPointOfInterestForCity(Guid cityId, Guid pointOfInterestId)
        {
            var result = _context.PointsOfInterest
                                 .FirstOrDefault(x => x.Id == pointOfInterestId &&
                                                      x.CityId == cityId);

            return result;
        }

        public IEnumerable<PointOfInterest> GetPointsOfInterestsForCity(Guid cityId)
        {
            var result = _context.PointsOfInterest
                                 .Where(x => x.CityId == cityId);

            return result;
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
