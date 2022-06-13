DROP DATABASE if exists videoworks;

CREATE DATABASE if not exists videoworks;

USE videoworks;

DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE IF NOT EXISTS roles (
    id              INT             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS users
(
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username        VARCHAR(60)     NOT NULL,
    password        VARCHAR(60)     NOT NULL,
    email           VARCHAR(200)    NOT NULL,
    name            VARCHAR(60)     NOT NULL

);

CREATE TABLE IF NOT EXISTS services (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title           VARCHAR(60)     NOT NULL,
    description     text            NOT NULL,
    rate            DOUBLE          NOT NULL,
    status          BOOLEAN         NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS user_roles (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    user_id         BIGINT          NOT NULL,
    role_id         INT             NOT NULL,
    foreign key (user_id) references users(id),
    foreign key (role_id) references roles(id)
);

CREATE TABLE IF NOT EXISTS user_services (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id         BIGINT          NOT NULL,
    services_id     BIGINT          NOT NULL,
    foreign key (user_id) references users(id),
    foreign key (services_id) references services(id)
);

CREATE TABLE IF NOT EXISTS services_categories (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    services_id     BIGINT          NOT NULL,
    categories_id   BIGINT          NOT NULL,
    foreign key (services_id) references services(id),
    foreign key (categories_id) references categories(id)
);

