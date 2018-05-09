using HelloDockerWin.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloDockerWin.Services
{
    public interface ICityInfoRepository
    {
        IEnumerable<City> GetCities();

        IEnumerable<City> GetCitiesByUser(string username);

        City GetCity(Guid cityId, bool includePointsOfInterest);

        bool CityExist(Guid cityId);

        IEnumerable<PointOfInterest> GetPointsOfInterestsForCity(Guid cityId);

        PointOfInterest GetPointOfInterestForCity(Guid cityId, Guid pointOfInterestId);

        void AddCity(City city);

        void AddPointOfInterestForCity(Guid cityId, PointOfInterest pointOfInterest);

        void DeletePointOfInterest(PointOfInterest pointOfInterest);

        bool Save();
    }
}
