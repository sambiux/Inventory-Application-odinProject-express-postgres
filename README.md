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

* Edit product information.

### Delete Product

* Remove products from the inventory.

### Search Product

* Search products by name using PostgreSQL queries.

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


