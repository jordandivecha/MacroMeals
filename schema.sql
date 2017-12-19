

CREATE table meals (

id INT AUTO_INCREMENT NOT NULL,
image VARCHAR(255),
link VARCHAR(255),
title VARCHAR(255),
calories DECIMAL(5,2),
protein DECIMAL(5,2),
fat DECIMAL(5,2),
carbs DECIMAL (5,2),
createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)

)

CREATE table users (

id INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255),
lastname VARCHAR(255),
username VARCHAR(255),
password VARCHAR(255),
gender VARCHAR(255),
age INT NOT NULL,
ft INT NOT NULL,
inches INT NOT NULL,
lbs INT NOT NULL,
mifflinStJeor BOOLEAN,
exerciseLevel INT NOT NULL,
goal DECIMAL(2,1),
protein DECIMAL(5,2),
fat DECIMAL(5,2),
carbs DECIMAL(5,2),
calories DECIMAL(5,2),
caloriesmeal DECIMAL(5,2),
carbsmeal DECIMAL (5,2),
proteinmeal DECIMAL (5,2),
fatmeal DECIMAL (5,2)
createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)

)

CREATE table ingredients (

id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(255),
image VARCHAR(255),
link VARCHAR(255),
createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)

)
