show databases;
create database assignments;
use assignments;
show tables;

create table schools(
id int auto_increment primary key,
name varchar(255),
address varchar(255),
city varchar(255),
state varchar(255) not null,
contact int unique,
image varchar(255),
email_id varchar(255) unique not null
);

select * from schools;

Alter table schools
modify column city varchar(255) not null;