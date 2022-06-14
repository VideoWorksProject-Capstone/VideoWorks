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

INSERT INTO profiles (id, rating, bio, name)
VALUES (1, 4.3, 'Insert bio here', 'Bobby John'),
       (2, 3.5, 'Insert bio here', 'Sally Joe Hopkins'),
       (3, 4.8, 'Insert bio here', 'Thomas Cruise'),
       (4, 2.7, 'Insert bio here', 'Ricky Bobby');

INSERT INTO categories (id, name)
VALUES (1, 'Cooking'),
       (2, 'Tutoring'),
       (3, 'Reading'),
       (4, 'Music'),
       (5, 'DJ'),
       (6, 'Technology'),
       (7, 'Design'),
       (8, 'Marketing'),
       (9, 'Business');

INSERT INTO services (id, title, description, rate)
VALUES (1, 'DJ Services', 'I will DJ for any event. Custom to fit any theme.', 20.00),
       (2, 'Cooking Lessons', 'One on one, Live training in the kitchen. Whatever you want to cook, I can teach you!', 15.00),
       (3, 'Math Tutoring', 'Live math tutoring for all ages. Anything up to calculus.', 50.00),
       (4, 'Logo Design', 'I will design a logo for you or your business.', 10.00);

INSERT INTO status (id, status)
VALUES (1, 'active'),
       (2, 'inactive');

INSERT INTO appointments (id, date, time)
VALUES (1, '07122022', '12:00 PM')