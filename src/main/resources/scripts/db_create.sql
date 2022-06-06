DROP DATABASE if exists videoworks;

CREATE DATABASE if not exists videoworks;

USE videoworks;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE IF NOT EXISTS roles (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS users
(
    id       BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(60)  NOT NULL,
    password VARCHAR(60)  NOT NULL,
    email    VARCHAR(200) NOT NULL,
    name     VARCHAR(60)  NOT NULL,
    role_id int unsigned not null,
    foreign key (role_id) references roles(id)
);