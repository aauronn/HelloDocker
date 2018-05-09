using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HelloDockerWin.Models;
using HelloDockerWin.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HelloDockerWin.Controllers
{
    [Route("api/cities")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PointsOfInterestController : Controller
    {
        private ICityInfoRepository _cityInfoRepository;
        private ILogger<PointsOfInterestController> _logger;

        public PointsOfInterestController(ICityInfoRepository cityInfoRepository,
            ILogger<PointsOfInterestController> logger)
        {
            _cityInfoRepository = cityInfoRepository;
            _logger = logger;
        }

        [HttpGet("{cityId}/pointsofinterest")]
        public IActionResult Index(Guid cityId)
        {
            try
            {
                if (!_cityInfoRepository.CityExist(cityId))
                {
                    _logger.LogInformation($"City with id {cityId} was not found when accessing points of interest");
                    return NotFound();
                }

                var entities = _cityInfoRepository.GetPointsOfInterestsForCity(cityId);

                var result = Mapper.Map<IEnumerable<PointOfInterestDto>>(entities);

                return Ok(result);

            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception while getting points of interest for city with id {cityId}. Trace: {ex.StackTrace}");
                return StatusCode(500, "A problem happened while handling your request.");

            }
        }

        [HttpGet("{cityId}/pointsofinterest/{id}", Name = "GetPointOfInterest")]
        public IActionResult GetPointOfInterest(Guid cityId, Guid id)
        {
            try
            {
                if (!_cityInfoRepository.CityExist(cityId))
                {
                    _logger.LogInformation($"City with id {cityId} was not found when accessing points of interest");
                    return NotFound();
                }

                var entity = _cityInfoRepository.GetPointOfInterestForCity(cityId, id);

                var result = Mapper.Map<PointOfInterestDto>(entity);

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception while getting points of interest for city with id {cityId}. Trace: {ex.StackTrace}");
                return StatusCode(500, "A problem happened while handling your request.");
            }
        }

        [HttpPost("{cityId}/pointsofinterest")]
        public IActionResult CreatePointOfInterest(Guid cityId,
            [FromBody]PointOfInterestForCreationDto pointOfInterest)
        {

            if (pointOfInterest == null)
            {
                _logger.LogInformation($"Point of interest is null");
                return BadRequest();
            }

            if (pointOfInterest.Description == pointOfInterest.Name)
            {
                ModelState.AddModelError("Description", "The Provided description should be different from the name");
            }

            if (!_cityInfoRepository.CityExist(cityId))
            {
                _logger.LogInformation($"City with id {cityId} was not found when creating points of interest");
                return NotFound();
            }

            var FinalPointOfInterest = Mapper.Map<Entities.PointOfInterest>(pointOfInterest);

            _cityInfoRepository.AddPointOfInterestForCity(cityId, FinalPointOfInterest);

            if (!_cityInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request");
            }

            var CreatedPointOfInterest = Mapper.Map<PointOfInterestDto>(FinalPointOfInterest);

            return CreatedAtRoute("GetPointOfInterest",
                new { cityId, id = CreatedPointOfInterest.Id },
                CreatedPointOfInterest);


        }

        [HttpPut("{cityId}/pointsofinterest/{id}")]
        public IActionResult UpdatePointOfInterest(Guid cityId, Guid id, 
            [FromBody] PointOfInterestForUpdateDto pointOfInterest)
        {
            if (pointOfInterest == null)
            {
                _logger.LogInformation($"Point of interest is null");
                return BadRequest();
            }

            if (pointOfInterest.Description == pointOfInterest.Name)
            {
                ModelState.AddModelError("Description", "The Provided description should be different from the name");
            }

            if (!_cityInfoRepository.CityExist(cityId))
            {
                _logger.LogInformation($"City with id {cityId} was not found when creating points of interest");
                return NotFound();
            }

            var pointOfInterestEntity = _cityInfoRepository.GetPointOfInterestForCity(cityId, id);
            if(pointOfInterestEntity == null)
            {
                return NotFound();
            }

            // Change the values from point of interest into point of interest Entity.
            Mapper.Map(pointOfInterest, pointOfInterestEntity);

            if (!_cityInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }


            return NoContent();
        }


        [HttpPatch("{cityId}/pointsofinterest/{id}")]
        public IActionResult PartiallyUpdatePointOfInterest(Guid cityId, Guid id,
            [FromBody] JsonPatchDocument<PointOfInterestForUpdateDto> patchDocument)
        {
            // Validate patch document is not null
            if (patchDocument == null)
            {
                return BadRequest();
            }

            // Validate city exist
            if (!_cityInfoRepository.CityExist(cityId))
            {
                _logger.LogInformation($"City with id {cityId} was not found when creating points of interest");
                return NotFound();
            }

            // validate point of interest exist for the city.
            var pointOfInterestEntity = _cityInfoRepository.GetPointOfInterestForCity(cityId, id);
            if (pointOfInterestEntity == null)
            {
                return NotFound();
            }

            // Map Entity to DTO
            var pointOfInterestToPatch = Mapper.Map<PointOfInterestForUpdateDto>(pointOfInterestEntity);

            // Apply patch
            patchDocument.ApplyTo(pointOfInterestToPatch, ModelState);

            // Validate if DTO is valid after applying the patch
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (pointOfInterestToPatch.Description == pointOfInterestToPatch.Name)
            {
                ModelState.AddModelError("Description", "The Provided description should be different from the name");
            }

            // validate if DTO is still valid
            TryValidateModel(pointOfInterestToPatch);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Change the values from point of interest into point of interest Entity.
            Mapper.Map(pointOfInterestToPatch, pointOfInterestEntity);

            if (!_cityInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return NoContent();
        }

        [HttpDelete("{cityId}/pointsofinterest/{id}")]
        public IActionResult DeletePointOfInterest(Guid cityId, Guid id)
        {
            if (!_cityInfoRepository.CityExist(cityId))
            {
                _logger.LogInformation($"City with id {cityId} was not found when creating points of interest");
                return NotFound();
            }

            var pointOfInterestEntity = _cityInfoRepository.GetPointOfInterestForCity(cityId, id);
            if (pointOfInterestEntity == null)
            {
                return NotFound();
            }

            // Remove point of interest
            _cityInfoRepository.DeletePointOfInterest(pointOfInterestEntity);

            if (!_cityInfoRepository.Save())
            {
                return StatusCode(500, "A problem happened while handling your request.");
            }

            return NoContent();
        }
    }
}