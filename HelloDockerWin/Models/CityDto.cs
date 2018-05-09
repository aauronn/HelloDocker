using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloDockerWin.Models
{
    public class CityDto : CityWithoutPointsOfInterestDto
    {
        public int NumberOfPointsOfInterest
        {
            get
            {
                return PointsOfInterest.Count;
            }
        }

        public ICollection<PointOfInterestDto> PointsOfInterest { get; set; } 
            = new List<PointOfInterestDto>();
    }
}
