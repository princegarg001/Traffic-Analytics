# Website Traffic Tracker API

A robust Node.js backend API for tracking and analyzing website traffic. Built with Express, MongoDB, and WebSockets for real-time analytics.

---

## 🚀 Features

### ✅ Core Functionality

* **Record Page Hits**: Log each visit to a URL with timestamp.
* **Referrer Capture**: Track the HTTP referrer of the request.
* **Unique Visitor Tracking**: Identify visitors via IP or custom token.
* **Page View Statistics**: Get total hits per page per day.
* **Top Referrers**: List the most common referrers over a date range.
* **Date Range Filter**: All stats endpoints support custom date ranges.
* **API Key Authentication**: Secure all endpoints using a key.
* **Validation & Error Handling**: Robust request checking and clear error messages.

### 🔁 Bonus Features

* **Geo-location Lookup**: Track city/country of visitor using IP.
* **WebSocket Integration**: Real-time hit updates using Socket.IO.
* **Dockerized Deployment**: Simple containerized setup with `docker-compose`.
* **Multi-Tenant Support**: Track hits for multiple websites with `x-website-id`.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (via Mongoose)
* geoip-lite
* Socket.IO
* Docker

---

## 📁 Project Structure

```
.
├── config
│   └── db.js
├── controllers
│   └── hitController.js
├── middleware
│   └── auth.js
├── models
│   └── PageHit.js
├── routes
│   └── hitRoutes.js
├── utils
│   └── statsUtils.js
├── public
│   └── test.html (for WebSocket testing)
├── .env
├── app.js
├── server.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🧪 Sample API Usage

### 🔐 Headers (Required for All Requests)

```
x-api-key: your_api_key
x-website-id: your_website_id
```

### 📌 POST /api/hit

Logs a page visit.

```json
POST http://localhost:5000/api/hit
{
  "url": "/home",
  "visitorId": "user123"
}
```

### 📊 GET /api/stats/pageviews

```http
GET /api/stats/pageviews?start=2025-06-01&end=2025-06-19
```

### 🔗 GET /api/stats/referrers

```http
GET /api/stats/referrers?start=2025-06-01&end=2025-06-19
```

---

## 🧱 Setup Instructions

### 💻 Local Development

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/website-traffic-tracker.git
   cd website-traffic-tracker
   ```
2. Create `.env`:

   ```ini
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/analytics
   API_KEY=your_api_key
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run the app:

   ```bash
   npm start
   ```

### 🐳 Docker Setup

```bash
docker-compose up --build
```

Then access:

* API: `http://localhost:5000`
* Mongo Express (optional): `http://localhost:8081`

---

## 📺 WebSocket Demo

Open `public/test.html` in browser to receive real-time updates when a new hit is logged.

---

## 📂 Postman Collection

A full set of API calls is available in the `postman_collection.json` file (if included).

---

## 📃 Design Decisions

* Used Express and Mongoose for a simple but extensible architecture.
* API key auth for simplicity and flexibility.
* Real-time updates implemented with WebSocket for better UX.
* GeoIP to enrich logs with visitor location data.

---
## 📄 License

[MIT](LICENSE)

---

---

> Built with ❤️ to help developers track and analyze user activity effortlessly.
