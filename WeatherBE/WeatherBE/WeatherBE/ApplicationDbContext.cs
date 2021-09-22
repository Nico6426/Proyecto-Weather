using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherBE.Models;

namespace WeatherBE
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<Weather> Weather { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    

    }
}
