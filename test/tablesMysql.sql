create schema testNode;
use testNode;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL,
role TINYINT DEFAULT 0,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME
);

CREATE TABLE apps (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
description TEXT,
image VARCHAR(250) NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE cart (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
quenatity SMALLINT NOT NULL,
price DECIMAL NOT NULL,
state TINYINT NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE orders (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
total DECIMAL NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE categories(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
description TEXT,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME on update CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE imgProducts(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
route VARCHAR (250) NOT NULL);

create table userCart(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
idUSer int unsigned not null,
idCart int unsigned not null);

create table productCart(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
idProduct int unsigned not null,
idCart int unsigned not null);

ALTER TABLE cart
ADD idApps INT UNSIGNED NOT NULL;
ALTER TABLE apps
ADD idCategory INT UNSIGNED NOT NULL;
ALTER TABLE imgapps
ADD idApps INT UNSIGNED NOT NULL;

alter table apps
add foreign key(idCategory) references categories(id);
alter table imgapps
add foreign key(idapps) references apps(id);
alter table userCart
add foreign key (idCart) references cart(id);
alter table userCart
add foreign key (idUser) references users(id);
alter table appCart
add foreign key (idCart) references cart(id);
alter table appCart
add foreign key (idApps) references apps(id);
alter table categories
add icon varchar(150) not null;


alter table apps modify image text not null;
alter table apps
add price integer not null;
SET SQL_SAFE_UPDATES = 0;

alter table cart
add totalPrice integer not null;
alter table cart
add appName varchar(250) not null;


ALTER TABLE `testnode`.`cart`
CHANGE COLUMN `quenatity` `quantity` SMALLINT(6) NOT NULL ;

ALTER TABLE `testnode`.`cart`
ADD COLUMN `idUser` INT(10) UNSIGNED NOT NULL AFTER `appName`;
