# `Stack overflow clone using MERN stack`

sort video of this project:-
https://github.com/Magar0/Next.js-MySql-schools-collection-website/assets/35245789/19a7f69e-d3c8-4d9c-98ba-930c2d381d8c
 
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Schema](#schema)

## General info
<img src="https://github.com/Magar0/Next.js-MySql-schools-collection-website/assets/35245789/429ce622-69a9-4556-924c-e27f2fa87eeb" height="350" >

* Developed a feature-rich web application using Next JS & MySql.
* Used React-hook-form for form.
* Incorporated Axios for simplified API communication.
* Implemented functionality for adding school details.
* Image uploaded is saved locally.
* Displayed school data in card format.
* Implemented tailwind CSS for styling.

## Technologies
* Next JS.
* MySql.
* React-hook-form.
	
## Setup

setting up database

import 'assignments_schools.sql' file in your sql server. (file is in database folder)

To run this project, install required dependencies using npm then run:
```
 npm install
 npm run dev
```
## Schema
```
create table schools(
id int auto_increment primary key,
name varchar(255) not null,
address varchar(255),
city varchar(255) not null,
state varchar(255) not null,
contact varchar(15) unique,
image varchar(255),
email_id varchar(255) unique not null
);
```
