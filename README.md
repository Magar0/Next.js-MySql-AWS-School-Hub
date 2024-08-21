# `School Website`

sort video of this project:-
https://github.com/Magar0/Next.js-MySql-schools-collection-website/assets/35245789/19a7f69e-d3c8-4d9c-98ba-930c2d381d8c

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Schema](#schema)

## General info

<img src="https://github.com/Magar0/Next.js-MySql-schools-collection-website/assets/35245789/429ce622-69a9-4556-924c-e27f2fa87eeb" height="350" >
 
- Developed a scalable web application using Next.js and a MySQL database hosted on AWS RDS, enabling efficient school data management with a user-friendly React form (React Hook Form) and intuitive API communication (Axios).
- AWS EC2 and Nginx were used for hosting.
- Implemented secure image uploads with AWS S3 storage, optimizing website performance through Tailwind CSS integration.

## Technologies

- Next JS.
- MySql.
- React-hook-form.
- AWS (EC2, RDS, S3, IAM)
- Nginx

## Setup

setting up database
create database "aws-testing" then,
import 'assignments_schools.sql' file in your sql server. (file is in database folder)

setting up ####Environment variables-
create .env.local file in the root directory, then add
```
NEXT_PUBLIC_DATABASE= "Your database name"
NEXT_PUBLIC_DB_PASSWORD= "Your Database Password" 
NEXT_PUBLIC_DB_USER= "USER ID"
# NEXT_PUBLIC_SQL_PORT= PORT Number #(default = 3306)
NEXT_PUBLIC_DB_HOST= "host" 

NEXT_PUBLIC_AWS_S3_BUCKET_NAME=" Your AWS S3 Bucket Name"
NEXT_PUBLIC_AWS_S3_REGION="Your AWS Region"
NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID="Your AWS Key"
NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY="Your AWS Secret Key"
```

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
