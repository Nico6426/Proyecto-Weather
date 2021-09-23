using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WeatherBE.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WeatherBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly Configuration config;
        private const string K_MEASUREMENT_UNIT = "units=metric";
        private const string K_LANGUAGE_CODE = "lang=sp";



        public WeatherController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<WeatherController>
        [HttpGet]
        [Route("getHistory")]
        public async Task<IActionResult> GetHistory(string city, string country)
        {
            try
            {
                var weather = await _context.Weather.ToListAsync();
                weather = weather.Where(f => f.Ciudad.ToLower().Equals(city.ToLower()) &&
                f.Pais.ToLower().Equals(country.ToLower())).ToList();
                return Ok(weather);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        // GET api/<WeatherController>/getWeather
        [HttpGet]
        [Route("getWeather")]
        public async Task<IActionResult> GetWeather(string cityName, string countryCode)
        {
            try
            {
                var appSettings = ConfigurationManager.AppSettings;
                var uri = string.Format(appSettings["BaseURL"] + "q={0},{1}&appid={2}&{3}&{4}", cityName, countryCode, appSettings["AppID"], K_MEASUREMENT_UNIT, K_LANGUAGE_CODE);


                using (var http = new HttpClient())
                {

                    var response = await http.GetStringAsync(uri);

                    return Ok(response);
                }


            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        // POST api/<WeatherController>
        [HttpPost]
        [Route("postToHistory")]
        public async Task<IActionResult> PostToHistory([FromBody] Weather weather)
        {
            try
            {
                _context.Add(weather);
                await _context.SaveChangesAsync();

                return Ok(weather);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }

}
