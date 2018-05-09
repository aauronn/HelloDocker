using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HelloDockerWin.Entities;
using HelloDockerWin.Models;
using HelloDockerWin.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HelloDockerWin.Controllers
{
    [Route("api/cities")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CitiesController : Controller
    {
        private ICityInfoRepository _cityInfoRepository;
        private readonly ILogger<PointsOfInterestController> _logger;
        private readonly UserManager<Principal> _userManager;

        public CitiesController(ICityInfoRepository cityInfoRepository, ILogger<PointsOfInterestController> logger, UserManager<Principal> userManager)
        {
            _cityInfoRepository = cityInfoRepository;
            this._logger = logger;
            this._userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetCities()
        {
            var username = User.Identity.Name;

            var entities = _cityInfoRepository.GetCitiesByUser(username);

            var results = Mapper.Map<IEnumerable<CityWithoutPointsOfInterestDto>>(entities);

            return Ok(results);
        }

        [HttpGet("{id}", Name ="GetCity")]
        public IActionResult GetCity(Guid id, bool includePointsOfInterest = false)
        {
            var entity = _cityInfoRepository.GetCity(id, includePointsOfInterest);

            if (entity == null)
            {
                return NotFound();
            }

            var result = Mapper.Map<CityDto>(entity);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddCity([FromBody]CityForCreationDto city)
        {
            if (city == null)
            {
                _logger.LogInformation($"City is null");
                return BadRequest();
            }

            if (city.Description == city.Name)
            {
                ModelState.AddModelError("Description", "The Provided description should be different from the name");
            }

            var Entity = Mapper.Map<Entities.City>(city);

            var username = User.Identity.Name;

            var user = await _userManager.FindByNameAsync(username);
            Entity.Principal = user;

            _cityInfoRepository.AddCity(Entity);

            if (!_cityInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request");
            }

            var createdCity = Mapper.Map<CityWithoutPointsOfInterestDto>(Entity);

            return CreatedAtRoute("GetCity", new { id = createdCity.Id }, createdCity);
        }
    }
}