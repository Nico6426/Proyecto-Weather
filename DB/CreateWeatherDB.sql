USE [master]
GO

/****** Object:  Database [WeatherDB]    Script Date: 22/9/2021 02:04:11 ******/
CREATE DATABASE [WeatherDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WeatherDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\WeatherDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WeatherDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\WeatherDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WeatherDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [WeatherDB] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [WeatherDB] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [WeatherDB] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [WeatherDB] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [WeatherDB] SET ARITHABORT OFF 
GO

ALTER DATABASE [WeatherDB] SET AUTO_CLOSE ON 
GO

ALTER DATABASE [WeatherDB] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [WeatherDB] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [WeatherDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [WeatherDB] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [WeatherDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [WeatherDB] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [WeatherDB] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [WeatherDB] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [WeatherDB] SET  ENABLE_BROKER 
GO

ALTER DATABASE [WeatherDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [WeatherDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [WeatherDB] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [WeatherDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [WeatherDB] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [WeatherDB] SET READ_COMMITTED_SNAPSHOT ON 
GO

ALTER DATABASE [WeatherDB] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [WeatherDB] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [WeatherDB] SET  MULTI_USER 
GO

ALTER DATABASE [WeatherDB] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [WeatherDB] SET DB_CHAINING OFF 
GO

ALTER DATABASE [WeatherDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [WeatherDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [WeatherDB] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [WeatherDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [WeatherDB] SET QUERY_STORE = OFF
GO

ALTER DATABASE [WeatherDB] SET  READ_WRITE 
GO


USE [WeatherDB]
GO

/****** Object:  Table [dbo].[Weather]    Script Date: 22/9/2021 17:04:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Weather](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Pais] [nvarchar](max) NOT NULL,
	[Ciudad] [nvarchar](max) NOT NULL,
	[Clima] [nvarchar](max) NOT NULL,
	[SensacionTermica] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Weather] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

