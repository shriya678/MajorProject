# 🏕️ Wanderlust

> A full-stack accommodation rental platform where users can list, browse, review, and book unique stays around the world — inspired by Airbnb.

**🔗 Live Demo:** [majorproject-kvks.onrender.com/listings](https://majorproject-kvks.onrender.com/listings)

> ⏱️ The free Render instance sleeps after inactivity, so the first request may take ~30–50 seconds to wake up.

Wanderlust is a server-rendered web application built with **Node.js, Express, and MongoDB**. It supports secure user authentication, image uploads to the cloud, owner-based authorization, and a clean review system with star ratings.

---

## ✨ Features

- **Browse listings** — explore all available stays on a responsive home page.
- **Create, edit & delete listings** — authenticated users can manage their own properties.
- **Cloud image uploads** — listing photos are stored on Cloudinary via Multer.
- **Reviews & ratings** — leave comments and 1–5 star ratings on any listing.
- **User authentication** — sign up, log in, and log out powered by Passport.js.
- **Authorization** — only a listing's owner can edit/delete it; only a review's author can delete it.
- **Session & flash messages** — friendly success/error feedback, with sessions stored in MongoDB.
- **Server-side validation** — request data is validated with Joi before hitting the database.
- **Cascade cleanup** — deleting a listing automatically removes its associated reviews.

---

## 🛠️ Tech Stack

| Layer          | Technology                                                        |
| -------------- | ----------------------------------------------------------------- |
| **Runtime**    | Node.js 20.10.0                                                   |
| **Server**     | Express.js                                                        |
| **Database**   | MongoDB + Mongoose (sessions stored via `connect-mongo`)         |
| **Templating** | EJS + `ejs-mate` layouts                                          |
| **Frontend**   | Bootstrap 5, Font Awesome 6                                       |
| **Auth**       | Passport.js (`passport-local`, `passport-local-mongoose`)        |
| **Uploads**    | Multer + Cloudinary (`multer-storage-cloudinary`)                |
| **Validation** | Joi                                                              |
| **Utilities**  | `method-override`, `connect-flash`, `dotenv`, `cookie-parser`     |

---

## 📁 Project Structure

```
MajorProject/
├── app.js               # App entry point — config, middleware & route mounting
├── cloudConfig.js       # Cloudinary + Multer storage setup
├── middleware.js        # Auth, ownership & validation middleware
├── schema.js            # Joi validation schemas
├── controllers/         # Route logic (listings, reviews, users)
├── models/              # Mongoose models (Listing, Review, User)
├── routes/              # Express routers (listing, review, user)
├── views/               # EJS templates (listings, users, layouts, includes)
├── public/              # Static assets (CSS & client-side JS)
├── init/                # Database seeding script & sample data
└── utils/               # Helpers (wrapAsync, ExpressError)
```

This follows the **MVC pattern** — models define the data, controllers hold the logic, routes wire up endpoints, and views render the UI.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20.10.0
- A [MongoDB](https://www.mongodb.com/) database (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A free [Cloudinary](https://cloudinary.com/) account (for image hosting)

### 1. Clone & install

```bash
git clone <your-repo-url>
cd MajorProject
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
# MongoDB connection string (Atlas or local)
ATLASDB_URL=your_mongodb_connection_string

# Secret used to sign sessions
SECRET=your_session_secret

# Cloudinary credentials
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

> ⚠️ The `.env` file is git-ignored — never commit your secrets.

### 3. (Optional) Seed the database with sample listings

The seed script connects to a **local** MongoDB at `mongodb://127.0.0.1:27017/wanderlust`:

```bash
node init/index.js
```

### 4. Start the app

```bash
node app.js
```

The server runs at **http://localhost:4000**.

---

## 🗺️ Routes Overview

| Method   | Route                              | Description                       | Access            |
| -------- | ---------------------------------- | --------------------------------- | ----------------- |
| `GET`    | `/listings`                        | View all listings                 | Public            |
| `GET`    | `/listings/new`                    | Form to create a listing          | Logged in         |
| `POST`   | `/listings`                        | Create a new listing              | Logged in         |
| `GET`    | `/listings/:id`                    | View a single listing             | Public            |
| `GET`    | `/listings/:id/edit`               | Form to edit a listing            | Owner only        |
| `PUT`    | `/listings/:id`                    | Update a listing                  | Owner only        |
| `DELETE` | `/listings/:id`                    | Delete a listing                  | Owner only        |
| `POST`   | `/listings/:id/reviews`            | Add a review                      | Logged in         |
| `DELETE` | `/listings/:id/reviews/:reviewId`  | Delete a review                   | Review author     |
| `GET`    | `/signup`                          | Sign up form                      | Public            |
| `POST`   | `/signup`                          | Register a new user               | Public            |
| `GET`    | `/login`                           | Login form                        | Public            |
| `POST`   | `/login`                           | Authenticate a user               | Public            |
| `GET`    | `/logout`                          | Log out                           | Logged in         |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the **ISC License**.
