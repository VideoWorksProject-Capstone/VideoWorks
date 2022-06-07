INSERT INTO roles (id, name)
VALUES (1, 'User'),
       (2, 'Seller');

INSERT INTO users (username, password, email, name)
VALUES ('bjohn23', '123456789', 'john.bobby@gmail.com', 'Bobby John'),
       ('saljo86', 'reallystrongpassword', 'sally.joe@yahoo.com', 'Sally Joe Hopkins'),
       ('tcr00zy', 'ilovecharlie', 'maverick22@gmail.com', 'Thomas Cruise'),
       ('wonder26', 'notfirstthenlast', 'bob.rick@aol.com', 'Ricky Bobby');

INSERT INTO user_roles (user_id, role_id)
VALUES (1, 1),
       (1, 2),
       (2, 1),
       (3, 1),
       (3, 2),
       (4, 1);