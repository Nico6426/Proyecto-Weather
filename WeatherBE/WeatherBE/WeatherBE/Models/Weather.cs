using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherBE.Models
{
    public class Weather
    {
        public int Id { get; set; }

        [Required]
        public string Pais { get; set; }

        [Required]
        public string Ciudad { get; set; }

        [Required]
        public string Clima { get; set; }

        [Required]
        public string SensacionTermica { get; set; }
    }
}
