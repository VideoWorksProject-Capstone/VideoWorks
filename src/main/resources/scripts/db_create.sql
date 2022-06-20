DROP DATABASE if exists videoworks;

CREATE DATABASE if not exists videoworks;

USE videoworks;

DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;
DROP TABLE if exists categories;

CREATE TABLE IF NOT EXISTS roles
(
    id   INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS users
(
    id       BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(60)  NOT NULL,
    password VARCHAR(60)  NOT NULL,
    email    VARCHAR(200) NOT NULL,
    name     VARCHAR(60)  NOT NULL,
    dob      VARCHAR(8)   NOT NULL,
    bio      TEXT         NULL,
    rating   DOUBLE       NULL,
    photo    BLOB         NOT NULL
);

CREATE TABLE IF NOT EXISTS user_roles
(
    id      BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    role_id INT    NOT NULL,
    foreign key (user_id) references users (id),
    foreign key (role_id) references roles (id)
);

CREATE TABLE IF NOT EXISTS services
(
    id          BIGINT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(60) NOT NULL,
    description text        NOT NULL,
    price       DOUBLE      NOT NULL,
    photo       int         NOT NULL,
    user_id     BIGINT      NOT NULL,
    foreign key (user_id) references users (id)
);

CREATE TABLE IF NOT EXISTS categories
(
    category_name int  not null auto_increment primary key,
    description   int  not null,
    imageUrl      blob not null
)