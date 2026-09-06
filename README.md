# 🧭 Waymark

**Waymark** is a full-stack accommodation and vacation rental platform where travelers can discover, search, filter, and review unique stays around the world, and hosts can list and manage properties through an authenticated dashboard. Engineered using an enterprise **MVC architecture** (Node.js, Express, MongoDB Atlas, and EJS-Mate), the application delivers persistent sessions, forward geocoding with interactive maps, secure cloud asset management, and a mobile-first responsive interface.

🔗 **Live Demo:** [waymark-stays.onrender.com](https://waymark-stays.onrender.com)

[![Node.js](https://img.shields.io/badge/Node.js-22.23.2-339933?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-4.18.2-000000?logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_&_Mongoose-47A248?logo=mongodb&logoColor=white)](#)
[![EJS](https://img.shields.io/badge/Views-EJS_%26_EJS--Mate-B4CA65?logo=javascript&logoColor=white)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](#)
[![Leaflet](https://img.shields.io/badge/Maps-Leaflet.js-199900?logo=leaflet&logoColor=white)](#)
[![Cloudinary](https://img.shields.io/badge/Cloud-Cloudinary-3448C5?logo=cloudinary&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-ISC-blue)](#)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Folder Structure](#folder-structure)
- [Roadmap](#roadmap)
- [Author & Contact](#author-contact)

---

## <a id="overview"></a>🌍 Overview

Waymark delivers an end-to-end travel accommodation platform built on a structured **MVC (Model-View-Controller)** pattern. Hosts can publish listings with optimized cloud-hosted photography, dynamic pricing, and precise location details, while travelers can explore destinations via multi-criteria search, browse curated categories, calculate total pricing with taxes, and submit verified ratings and reviews.

The platform emphasizes robust engineering fundamentals: server-side session persistence in MongoDB, strict authorization barriers, declarative schema validation with Joi, forward geocoding, and complete mobile-first responsiveness across phones, tablets, and desktop displays.

---

## <a id="features"></a>✨ Features

- 🔐 **Authentication & Authorization** — Session-based auth via Passport.js with password hashing; defensive middleware strictly restricts edit and delete operations to verified resource owners.
- 🏠 **Listing Management (CRUD)** — Complete lifecycle support to create, view, update, and remove travel stays with detailed descriptions, pricing, location fields, and image uploads.
- 🔍 **Multi-Field Destination Search** — Real-time querying that scans listing titles, descriptions, locations, and countries simultaneously.
- 🏷️ **Category Filtering** — Instant category classification across Beach, Mountains, Cabins, Iconic Cities, Castles, Camping, Arctic, and more.
- 🔎 **Combined Search & Filters** — Search queries and category tags work synchronously to narrow down results with dedicated empty-state feedback.
- 💰 **Transparent Dynamic Pricing** — Interactive tax toggle to compute and display 18% GST rates dynamically alongside baseline night rates.
- 🗺️ **Interactive Geolocation & Maps** — Forward geocoding via Node-Geocoder converts raw addresses into coordinates, visually rendered using Leaflet.js and OpenStreetMap pins.
- ☁️ **Cloud Asset Management** — Media pipeline utilizing Multer and Cloudinary (`multer-storage-cloudinary`) for optimized image hosting.
- ⭐ **Community Reviews & Ratings** — Authenticated guests can post written feedback with 1–5 star ratings; owners can manage and delete their own reviews.
- 📱 **Fully Responsive UI** — Engineered with custom Bootstrap 5 breakpoints, horizontal touch scrolling for category badges, accessible auth forms, and responsive navigation.
- 🛡️ **Schema Validation & Error Handling** — Server-side payload validation using Joi schemas and centralized async error middleware (`wrapAsync`, `ExpressError`).
- 🍞 **Flash Messaging** — Real-time contextual UI alerts for successful operations, authentication states, and errors.

---

## <a id="tech-stack"></a>🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | EJS, EJS-Mate layouts, Bootstrap 5, Custom CSS3, Vanilla JavaScript |
| **Backend** | Node.js (v22.23.2), Express.js (v4.18.2) |
| **Database** | MongoDB Atlas with Mongoose ODM (v8.1.1) |
| **Authentication** | Passport.js, Passport-Local, Passport-Local-Mongoose, Express-Session |
| **Session Store** | Connect-Mongo (v6.0.0) |
| **Media Pipeline** | Cloudinary API, Multer, Multer-Storage-Cloudinary |
| **Maps & Geocoding** | Leaflet.js, OpenStreetMap (OSM), Node-Geocoder |
| **Validation** | Joi (v18.2.3) |
| **Deployment** | Render (Web Service), MongoDB Atlas Cloud |

---

## <a id="project-architecture"></a>🏗️ Project Architecture

Waymark follows a structured **Model-View-Controller (MVC)** design pattern to cleanly separate routing, business logic, persistence, and views:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                            CLIENT BROWSER                              │
│         (Bootstrap 5 UI • Leaflet.js • Async Dynamic Pricing)          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP Requests (GET/POST/PUT/DELETE)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          EXPRESS SERVER (app.js)                       │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    Global Middleware Pipeline                    │  │
│  │     Method-Override • Cookie-Parser • Express-Session • Flash    │  │
│  └────────────────────────────────┬─────────────────────────────────┘  │
│                                   │                                    │
│  ┌────────────────────────────────▼─────────────────────────────────┐  │
│  │                      Router Layer (/routes)                      │  │
│  │             listings.js  •  reviews.js  •  users.js              │  │
│  └────────────────────────────────┬─────────────────────────────────┘  │
│                                   │                                    │
│  ┌────────────────────────────────▼─────────────────────────────────┐  │
│  │                Security & Validation Middleware                  │  │
│  │  isLoggedIn  •  isOwner  •  isReviewAuthor  •  validateListing   │  │
│  └────────────────────────────────┬─────────────────────────────────┘  │
│                                   │ Passed Validations                 │
│  ┌────────────────────────────────▼─────────────────────────────────┐  │
│  │                    Controller Layer (/controllers)               │  │
│  │                Business Logic & Data Manipulation                │  │
│  └───┬────────────────────────────┬────────────────────────────┬────┘  │
└──────┼────────────────────────────┼────────────────────────────┼───────┘
       │                            │                            │
       ▼                            ▼                            ▼
┌──────────────┐             ┌──────────────┐             ┌──────────────┐
│  Cloudinary  │             │   MongoDB    │             │   EJS-Mate   │
│ Media Engine │             │Atlas/Mongoose│             │ View Engine  │
│ (Asset Host) │             │ (Persistence)│             │ (SSR Output) │
└──────────────┘             └──────────────┘             └──────────────┘
```

- 🧭 **Routing & Middleware Pipeline** — Intercepts requests for authentication (`passport`), checks listing/review ownership before updates, and sanitizes payloads via `Joi`.
- ⚙️ **Controller Layer** — Encapsulates core business logic, query filtering, and coordinates database mutations away from route definitions.
- 🗄️ **Data Persistence (Mongoose & Atlas)** — Manages relationship modeling between `Users`, `Listings`, and `Reviews`, including cascade middleware deletion.
- ☁️ **Third-Party Infrastructure** — Offloads image delivery to Cloudinary, address-to-coordinate translation to Node-Geocoder, and session store synchronization to MongoDB Atlas.
- 🖥️ **Presentation Tier** — Dynamic SSR templates powered by EJS-Mate layouts with responsive Bootstrap grids and interactive Leaflet maps.

| Layer | Responsibility |
| :--- | :--- |
| **Routing & Middleware** | Enforces authentication, resource ownership, and Joi schema validation |
| **Controllers** | Encapsulates core business logic and mediates data between models and views |
| **Models & Persistence** | Defines Mongoose schemas with cascade deletes, hosted on MongoDB Atlas |
| **External Services** | Offloads image hosting to Cloudinary, coordinates to Geocoder, and sessions to Mongo |
| **View Tier** | Renders dynamic HTML via EJS-Mate layouts styled with responsive Bootstrap 5 |

---

## <a id="getting-started"></a>🚀 Getting Started

Follow these steps to run Waymark on your local machine.

### <a id="prerequisites"></a>Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas URI)
- [Cloudinary](https://cloudinary.com/) account for image uploads

### <a id="installation"></a>Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anshikadwivedi11/Waymark.git
   cd Waymark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. <a id="environment-variables"></a>**Configure environment variables**  
   Create a `.env` file in the root directory and add the following:
   ```env
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

   > 🔒 **Security Notice:** Never commit your `.env` file to version control. Ensure it remains listed in your `.gitignore`.

4. **Seed the database (optional)**
   ```bash
   node init/index.js
   ```

5. <a id="running-locally"></a>**Start the server**
   ```bash
   node app.js
   ```

6. **Open your browser and visit:**
   ```text
   http://localhost:8080/listings
   ```

---

## <a id="folder-structure"></a>📁 Folder Structure

```text
Waymark/
├── controllers/       # Business logic for listings, reviews, and users
├── init/              # Database initialization scripts and sample data
├── models/            # Mongoose schemas (Listing, Review, User)
├── public/            # Static client assets (CSS styling, Leaflet JS, client scripts)
├── routes/            # Express route handlers (/listings, /reviews, auth)
├── utils/             # Error handling utilities (wrapAsync, ExpressError)
├── views/             # Server-rendered EJS templates, partials, and layouts
├── app.js             # Application entry point and Express middleware setup
├── cloudConfig.js     # Cloudinary and Multer storage configuration
├── geocoder.js        # Node-Geocoder location services configuration
├── middleware.js      # Custom authentication, ownership, and validation middleware
├── schema.js          # Declarative Joi validation schemas
└── package.json       # Project dependencies and npm scripts
```

---

## <a id="roadmap"></a>🗺️ Roadmap

- [ ] Online payment gateway integration (Razorpay / Stripe)
- [ ] Wishlist & saved listings
- [ ] Booking calendar with real-time availability tracking
- [ ] Host dashboard with reservation analytics
- [ ] OAuth 2.0 social login (Google & GitHub)
- [ ] Email notifications for bookings and reviews

---

## <a id="author-contact"></a>👩‍💻 Author & Contact

**Anshika Dwivedi** — feel free to reach out via GitHub or LinkedIn for questions, suggestions, or collaboration.

- 📂 **Project Repository:** [github.com/Anshikadwivedi11/Waymark](https://github.com/Anshikadwivedi11/Waymark)
- 🌐 **Live Demo:** [waymark-stays.onrender.com](https://waymark-stays.onrender.com)
