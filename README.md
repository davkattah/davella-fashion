# DAVella's Fashion | World-Class Luxury African Fashion & E-Commerce Platform

![DAVella's Fashion Platform](https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80)

**DAVella's Fashion** is a production-ready, full-stack luxury fashion platform celebrating West African textile artistry, sovereign heritage, and haute couture tailoring.

---

## Technical Stack Architecture

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, Recharts, Canvas Confetti.
- **Backend API**: Node.js, Express.js REST API, TypeScript, JWT Authentication, CORS, Security headers.
- **Database**: Relational Schema (PostgreSQL & SQLite embedded fallback) with pre-seeded products, lookbooks, blog posts, and default admin.
- **CMS & Admin Panel**: Dynamic Content Management System allowing real-time edits to Banners, Lookbooks, Blog, Products, SEO, and Site Configuration without code deployments.
- **DevOps**: Dockerfile, `docker-compose.yml`, Swagger/OpenAPI documentation (`openapi.json`), environment variables (`.env.example`), and Vitest automated tests.

---

## Quick Start (Local Development)

### Prerequisites
- Node.js v18+ & npm 10+

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Start the local frontend dev server
npm run dev

# 3. Build for production
npm run build

# 4. Run automated test suite
npm run test
```

Default local URL: `http://localhost:3000`

---

## Platform Features Overview

1. **Home Showcase**: High-impact Hero Slider, Heritage Manifesto, Curated Product Carousels, Category Tiles, Lookbook Spotlight, Customer Reviews, Newsletter.
2. **Shop & Filter Engine**: Filterable catalogue by Gender, Category, Price Range, Color, Fabric, Size, and Sort options (Price, Rating, Newest).
3. **Product Details Page & 360° Inspector**: High-resolution gallery, 360° interactive product rotator, fabric & care tabs, verified customer reviews, size guide, related items.
4. **Interactive Lookbook Magazine**: Editorial lookbook with hotspot product tags linking directly to shop items.
5. **Customer Portal & Account**: Real-time Order History, DHL tracking numbers, PDF Invoice generator, saved addresses, Wishlist, and 2FA security.
6. **Multi-Currency & Payment Gateways**: Currency conversion (USD $, EUR €, GBP £, GHS ₵, NGN ₦) and simulated gateways for Stripe, PayPal, Paystack, Flutterwave, Mobile Money, Apple Pay.
7. **B2B Wholesale Portal**: Bulk order volume estimator & quote application form.
8. **Affiliate & Ambassador System**: Custom referral link generator & commission tracker.
9. **Events & Fashion Shows**: Runway show listings with live countdown timer and VIP ticket reservation.
10. **Enterprise Admin Panel & CMS**: Real-time KPI analytics, Product CRUD catalog manager, Order fulfillment updates, and Live CMS editor.
11. **AI Stylist & Support Concierge**: Floating AI chatbot assistant for style recommendations and client support (**DAVella's Fashion — KWAME AI Concierge**).

---

## REST API Endpoints (`/api/v1`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/health` | System health check & version |
| `POST` | `/api/v1/auth/login` | Authenticate user & issue JWT token |
| `GET` | `/api/v1/products` | Filterable product catalogue |
| `GET` | `/api/v1/products/:id` | Single product details |
| `POST` | `/api/v1/products` | Create product (Admin only) |
| `POST` | `/api/v1/orders` | Submit customer order |
| `GET` | `/api/v1/analytics/summary` | Admin KPI metrics summary |
| `GET` | `/api/v1/docs` | OpenAPI 3.0 specification |

---

## Docker Deployment

To build and run the full stack with PostgreSQL via Docker Compose:

```bash
docker-compose up --build -d
```

---

## License

© 2026 DAVella's Fashion Ltd. All Rights Reserved.
