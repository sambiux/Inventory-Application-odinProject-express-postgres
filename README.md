#  Football Inventory Application

A football inventory management application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**.

This project was developed as part of **The Odin Project - NodeJS Course**, focusing on database integration, CRUD operations, and MVC architecture.

---

##  Features

* View all products
* Create new products
* Update existing products
* Delete products
* Search products by name
* PostgreSQL database integration
* Environment variables support
* MVC project structure

---

##  Technologies Used

* Node.js
* Express.js
* PostgreSQL
* EJS
* CSS
* dotenv
* pg

---

##  Project Structure

```text
inventory-application/
│
├── controllers/
├── db/
│   ├── pool.js
│   └── queries.js
│
├── routes/
├── views/
├── public/
├── app.js
├── package.json
└── .env
```

##  Installation

Clone the repository:

```bash
git clone https://github.com/sambiux/Inventory-Application-odinProject-express-postgres.git
```

Navigate to the project folder:

```bash
cd Inventory-Application-odinProject-express-postgres
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

DB_HOST=localhost
DB_USER=postgres
DB_NAME=inventory_shop_cart
DB_PASSWORD=your_password
DB_PORT=5432
```

---

##  Database Setup

Create a PostgreSQL database:

```sql
CREATE DATABASE inventory_shop_cart;
```

Run your database initialization script:

```bash
node db/populatedb.js
```

---

##  Running the Application

Start the development server:

```bash
node app.js
```

The application will be available at:

```text
http://localhost:3000
```

---

##  Functionality

### Home Page

* <img width="1915" height="906" alt="image" src="https://github.com/user-attachments/assets/58b7a6f4-fccf-4ee9-a3d4-90cab8314209" />


### Create Product

* <img width="1361" height="763" alt="image" src="https://github.com/user-attachments/assets/3c4d61d2-7125-44ef-b096-7e5be549c3ed" />


### Update Product

* <img width="1751" height="870" alt="image" src="https://github.com/user-attachments/assets/819b8e71-bda4-45b6-9715-eed9e3e4cd7c" />
* <img width="1583" height="873" alt="image" src="https://github.com/user-attachments/assets/48696778-e2ec-4dde-9ec9-e1df1977eacd" />
* <img width="358" height="250" alt="image" src="https://github.com/user-attachments/assets/7a27b58d-e1e8-4630-a86a-d3527c918b37" />



### Delete Product

* <img width="333" height="255" alt="image" src="https://github.com/user-attachments/assets/91c2287c-2069-446c-a565-fc733b0a2843" />
* <img width="1913" height="908" alt="image" src="https://github.com/user-attachments/assets/06fc33a3-2b50-4158-9241-2e87c2505a97" />



### Search Product

* <img width="1911" height="896" alt="image" src="https://github.com/user-attachments/assets/b80fd032-24ff-4cf4-b2ee-71797f8bb97e" />
* <img width="343" height="167" alt="image" src="https://github.com/user-attachments/assets/4722f290-bdc0-4fcb-9ab1-08258033374c" />
* <img width="1907" height="908" alt="image" src="https://github.com/user-attachments/assets/401206a7-c555-4453-9301-b30a437fae9e" />



---

##  Learning Objectives

This project helped practice:

* Express routing
* MVC architecture
* PostgreSQL integration
* SQL queries
* CRUD operations
* Environment variables
* EJS templating
* Form handling

---

##  Author

Samuel Daza

GitHub:
https://github.com/sambiux

---


