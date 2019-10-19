DROP TABLE IF EXISTS Lynx; 
DROP TABLE IF EXISTS Top_Rated_Restaurant;
DROP TABLE IF EXISTS Tourist_Attraction;

-- Create TABLE  LYNX
CREATE table Lynx (
  Location VARCHAR(100) NOT NULL,
  Latitude VARCHAR (100)NOT NULL,
  Longitude VARCHAR(100) NOT NULL,
  Category VARCHAR(100)NOT NULL
);

-- Create table TOP RATED RESTAURANT
CREATE TABLE Top_Rated_Restaurant (
  Name VARCHAR(100) NOT NULL,
  Latitude VARCHAR(100) NOT NULL,
  Longitude VARCHAR(100) NOT NULL,
  Category VARCHAR (100) NOT NULL
);

-- Create table  TOURIST ATTRACTION
CREATE TABLE Tourist_Attraction (
  Name VARCHAR(100) NOT NULL,
  Latitude VARCHAR(100) NOT NULL,
  Longitude VARCHAR(100) NOT NULL,
  Address VARCHAR(100)
);