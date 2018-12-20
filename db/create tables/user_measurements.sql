create table user_measurements(
id SERIAL PRIMARY KEY,
feet int,
inches int,
pounds int,
age int,
user_id int,
FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
)