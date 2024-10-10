CREATE DATABASE IF NOT EXISTS futebol;
USE futebol;

CREATE TABLE IF NOT EXISTS players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(50),
  nationality VARCHAR(50),
  team VARCHAR(100),
  age INT,
  goals INT,
  assists INT,
  rating DECIMAL(3, 1)
);

INSERT INTO players (id, name, position, nationality, team, age, goals, assists, rating) VALUES
(1, 'messi', 'forward', 'Argentina', 'PSG', 36, 800, 350, 9.8),
(2, 'ronaldo', 'forward', 'Portugal', 'Al-Nassr', 39, 840, 230, 9.5),
(3, 'neymar', 'forward', 'Brazil', 'Al-Hilal', 32, 450, 280, 9.0),
(4, 'mbappe', 'forward', 'France', 'PSG', 25, 250, 120, 9.3),
(5, 'lewandowski', 'forward', 'Poland', 'Barcelona', 35, 500, 100, 9.4),
(6, 'salah', 'forward', 'Egypt', 'Liverpool', 31, 200, 130, 8.9),
(7, 'kane', 'forward', 'England', 'Bayern Munich', 30, 270, 100, 9.1),
(8, 'haaland', 'forward', 'Norway', 'Manchester City', 23, 150, 60, 9.6),
(9, 'de bruyne', 'midfielder', 'Belgium', 'Manchester City', 32, 100, 200, 9.7),
(10, 'kante', 'midfielder', 'France', 'Al-Ittihad', 33, 30, 50, 8.7),
(11, 'modric', 'midfielder', 'Croatia', 'Real Madrid', 38, 90, 140, 9.2),
(12, 'benzema', 'forward', 'France', 'Al-Ittihad', 36, 430, 150, 9.4),
(13, 'casemiro', 'midfielder', 'Brazil', 'Manchester United', 32, 50, 30, 8.8),
(14, 'vinicius', 'forward', 'Brazil', 'Real Madrid', 23, 100, 70, 9.3),
(15, 'gavi', 'midfielder', 'Spain', 'Barcelona', 19, 20, 25, 8.5),
(16, 'pedri', 'midfielder', 'Spain', 'Barcelona', 21, 25, 30, 8.7),
(17, 'rashford', 'forward', 'England', 'Manchester United', 26, 150, 70, 8.9),
(18, 'foden', 'midfielder', 'England', 'Manchester City', 24, 70, 40, 9.0),
(19, 'griezmann', 'forward', 'France', 'Atletico Madrid', 33, 250, 130, 8.8),
(20, 'alisson', 'goalkeeper', 'Brazil', 'Liverpool', 31, 0, 5, 9.2);

CREATE TABLE IF NOT EXISTS clubs (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  stadium VARCHAR(255),
  country VARCHAR(100),
  city VARCHAR(100),
  founded INT,
  colors VARCHAR(100),
  website VARCHAR(255),
  logo VARCHAR(255)
);

INSERT INTO clubs (id, name, stadium, country, city, founded, colors, website, logo) VALUES
(1, 'Real Madrid', 'Santiago Bernabeu', 'Spain', 'Madrid', 1902, 'White', 'https://www.realmadrid.com/', 'https://upload.wikimedia.org/wikipedia/en/3/3f/Real_Madrid_2021.svg'),
(2, 'Barcelona', 'Camp Nou', 'Spain', 'Barcelona', 1899, 'Blue and Red', 'https://www.fcbarcelona.com/', 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg'),
(3, 'Bayern Munich', 'Allianz Arena', 'Germany', 'Munich', 1900, 'Red', 'https://fcbayern.com/', 'https://upload.wikimedia.org/wikipedia/en/8/81/FC_Bayern_Munich_logo.svg'),
(4, 'Manchester City', 'Etihad Stadium', 'England', 'Manchester', 1880, 'Blue', 'https://www.mancity.com/', 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'),
(5, 'Liverpool', 'Anfield', 'England', 'Liverpool', 1892, 'Red', 'https://www.liverpoolfc.com/', 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg'),
(6, 'Paris Saint-Germain', 'Parc des Princes', 'France', 'Paris', 1970, 'Blue and Red', 'https://en.psg.fr/', 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg'),
(7, 'Chelsea', 'Stamford Bridge', 'England', 'London', 1905, 'Blue', 'https://www.chelseafc.com/', 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg'),
(8, 'Juventus', 'Allianz Stadium', 'Italy', 'Turin', 1897, 'Black and White', 'https://www.juventus.com/en/', 'https://upload.wikimedia.org/wikipedia/en/3/3e/Juventus_FC_2017_logo.svg'),
(9, 'AC Milan', 'San Siro', 'Italy', 'Milan', 1899, 'Red and Black', 'https://www.acmilan.com/', 'https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan_logo.svg'),
(10, 'Inter Milan', 'San Siro', 'Italy', 'Milan', 1908, 'Blue and Black', 'https://www.inter.it/en', 'https://upload.wikimedia.org/wikipedia/en/0/05/Inter_Milan.svg'),
(11, 'Atletico Madrid', 'Wanda Metropolitano', 'Spain', 'Madrid', 1903, 'Red and White', 'https://en.atleticodemadrid.com/', 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg'),
(12, 'Borussia Dortmund', 'Signal Iduna Park', 'Germany', 'Dortmund', 1909, 'Yellow and Black', 'https://www.bvb.de', 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg');
