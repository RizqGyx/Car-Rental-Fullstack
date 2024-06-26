﻿<h1 align="center">
  <br>
  <img src="./frontend/public/Icon.png" alt="Binar Logo" width="200"/>
  <br>
  <br>
  Finaltask KSM Android Frontend Web Developer
  <br>
</h1>

<h4 align="center">A Fullstack Dashboard for car rental designed to manage car data and a car rental website utilizing <a href="https://expressjs.com/" target="_blank">Express.js</a> as the backend and <span style="color:red;">Postgress</span> as the Database Management System (DBMS). Creating The UI with React.js and using Auth.</h4>

<p align="center">
  <a href="#express">express</a> •
  <a href="#postman">postman</a> •
  <a href="#sequelize">sequelize</a> •
  <a href="#javascript">javascript</a> •
  <a href="#nodejs">nodejs</a> •
  <a href="#postgress">postgress</a> •
  <a href="#react">react</a>
</p>

## Database Structure

![screenshot](./db-diagram.png)

## Project

Membuat Dashboard Admin Car Rental

### Setup [Back-End]

Masuk Terlebih dahulu kedalam folder backend dengan menulis cd backend pada terminal

#### 1. Node.js

Install seluruh package yang ada pada package.json dengan perintah seperti berikut:

```
npm install
```

#### 2. Download Requirement

Install Postgress dan juga PGAdmin(Optional Yang penting DBMS), Serta sudah daftar pada website imageKit[Image Hosting Optional]
[pgAdmin](https://www.pgadmin.org/download/) | [PostgreSQL Server](https://www.postgresql.org/download/) | [ImageKit](https://imagekit.io/)

#### 3. Setup Database

Agar dapat berjalan perlu menambahkan data pada .env untuk bisa connect ke database, contoh isi dari .env bisa dilihat pada .env-example

```
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_PORT=
DB_HOST=
PORT=
JWT_SECRET=
JWT_EXPIRED=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL=
```

#### 4. Setup Database

Lakukan langkah berikut secara berurutan

```
npm run db-create
npm run db-migrate
npm run db-seed
```

#### 5. Menjalankan server

Untuk menjalankan server, dapat digunakan perintah berikut:

```
npm run dev
```

### Setup [Front-End]

#### 1. Node.js

Install seluruh package yang ada pada package.json dengan perintah seperti berikut:

```
npm install
```

#### 2. Menjalankan server

Untuk menjalankan server, dapat digunakan perintah berikut:

```
npm run dev
```

Untuk melihat antarmuka, dapat menggunakan link berikut:

```
http://localhost:5173
```

## Endpoint

### API

-Auth

| Method | Endpoint         | Deskripsi                                                   | Example                                           | Need Token |
| ------ | ---------------- | ----------------------------------------------------------- | ------------------------------------------------- | ---------- |
| Get    | /                | Mendapatkan Semua Data Auth                                 | http://localhost:3000/api/v1/auth                 | ❌         |
| Get    | /checktoken      | Mendapatkan Data Login Berdasarkan Token                    | http://localhost:3000/api/v1/auth/checktoken      | ✔️         |
| Post   | /login           | Melakukan Login                                             | http://localhost:3000/api/v1/auth/login           | ❌         |
| Post   | /register/admin  | Melakukan Register Atau Membuat Data Auth Baru Untuk Admin  | http://localhost:3000/api/v1/auth/register/admin  | ✔️         |
| Post   | /register/member | Melakukan Register Atau Membuat Data Auth Baru Untuk Member | http://localhost:3000/api/v1/auth/register/member | ❌         |

-User

| Method | Endpoint | Deskripsi                                 | Example                               | Need Token |
| ------ | -------- | ----------------------------------------- | ------------------------------------- | ---------- |
| Get    | /        | Mendapatkan Semua Data User               | http://localhost:3000/api/v1/user     | ✔️         |
| Get    | /:id     | Mendapatkan Data User Berdasarkan ID      | http://localhost:3000/api/v1/user/:id | ✔️         |
| Patch  | /:id     | Melakukan Edit Data User Berdasarkan ID   | http://localhost:3000/api/v1/user/:id | ✔️         |
| Delete | /:id     | Melakukan Delete Data User Berdasarkan ID | http://localhost:3000/api/v1/user/:id | ✔️         |

-Car [Masih Tahap Development Karena Akan Ditambahkan Autentikasi Token Pada beberapa Method]

| Method | Endpoint | Deskripsi                                | Example                              | Need Token |
| ------ | -------- | ---------------------------------------- | ------------------------------------ | ---------- |
| Get    | /        | Mendapatkan Semua Data Car               | http://localhost:3000/api/v1/car     | ❌         |
| Get    | /:id     | Mendapatkan Data Car Berdasarkan ID      | http://localhost:3000/api/v1/car/:id | ❌         |
| Post   | /        | Menambahkan data Car Baru                | http://localhost:3000/api/v1/car     | ❌         |
| Patch  | /:id     | Melakukan Edit Data Car Berdasarkan ID   | http://localhost:3000/api/v1/car/:id | ❌         |
| Delete | /:id     | Melakukan Delete Data Car Berdasarkan ID | http://localhost:3000/api/v1/car/:id | ❌         |

### WEB

| Endpoint | Deskripsi | Example               |
| -------- | --------- | --------------------- |
| /        | Homepage  | http://localhost:5173 |

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
