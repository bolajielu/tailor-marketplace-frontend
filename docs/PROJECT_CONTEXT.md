## 🧠 Project Overview

**Project:** Tailor Marketplace
**Stack:**

* Backend: Xano (Auth, Users, App API groups)
* Frontend: Vanilla JS (modular structure with `api.js`, `pages.js`)
* Auth: Token-based (stored in localStorage)

---

## 🏗️ Architecture Summary

### API Groups

#### 1. Auth API

* `/auth/login`
* `/auth/signup`
* `/auth/me`

Handles authentication and token generation.

---

#### 2. Users API (Customer-facing)

Base:

```
/api:Jp0dBE1E
```

Endpoints:

* `GET /get_bookings`
* `GET /get_booking?booking_id=<id>`
* `GET /get_reviews`
* `PATCH /update_user_profile`

Purpose:

* Customer bookings
* Customer booking detail
* Customer profile

---

#### 3. App API (Marketplace / Tailor-facing)

Base:

```
/api:lWSPi4ll
```

Endpoints:

* `GET /tailor`
* `POST /tailor`
* `PATCH /tailor/{id}`
* `GET /get_tailor_bookings`
* `GET /get_tailor_booking?booking_id=<id>`
* `POST /create_booking`

Purpose:

* Tailor profiles
* Tailor bookings
* Booking creation

---

## 🔐 Authentication Flow

* Login returns:

  ```
  auth_token
  ```
* Stored in:

  ```
  localStorage.tailorMarketplaceToken
  ```
* Used in:

  ```
  Authorization: Bearer <token>
  ```

---

## 📦 Core Data Model

### Users Table

* `id`
* `email`
* `name`
* `phone` (optional)

---

### Tailors Table

* `id`
* `user_id` (FK → Users)
* `business_name`
* `profile_picture`
* `location`
* `bio`

---

### Bookings Table (Current Design)

**Core Fields:**

* `id`
* `user_id`
* `tailor_id`
* `service_requested`
* `measurements`
* `inspiration_image_upload`
* `status`
* `created_at` ✅ (booking submitted date)

**New Fields Added:**

* `customer_note`
* `has_review`
* `appointment_datetime` (optional)
* `due_date`
* `completion_date`
* `price_quote`
* `final_price`
* `cancellation_reason`

---

## 📅 Date Handling (Important)

### Key Decision

❌ Do NOT use `booking_date`
✅ Use `created_at` as **Booking submitted date**

### Meaning of fields

| Field                  | Meaning               |
| ---------------------- | --------------------- |
| `created_at`           | Booking submitted     |
| `appointment_datetime` | Scheduled appointment |
| `due_date`             | Expected completion   |
| `completion_date`      | Actual completion     |

---

### Frontend Date Handling Fix

Added helpers:

* `parsePossibleDate()`
* `formatDisplayDate()`
* `formatDisplayDateTime()`

Handles:

* ISO timestamps
* Epoch ms (e.g. `1753934235976`)
* Empty/null safely

---

## 🧩 Booking Flow

### 1. Customer Flow

#### Create Booking

* Endpoint: `POST /create_booking`
* Requires:

  * `tailor_id`
  * `service_requested`
  * `measurements`
  * `inspiration_image_upload`

✅ Backend handles:

* `user_id`
* `status`
* `has_review`

---

#### View Bookings

* Endpoint: `GET /get_bookings`

---

#### Booking Detail

* Endpoint: `GET /get_booking?booking_id=<id>`

---

### 2. Tailor Flow

#### View Bookings

* Endpoint: `GET /get_tailor_bookings`

#### Booking Detail

* Endpoint: `GET /get_tailor_booking?booking_id=<id>`

---

## 🧠 Key Fixes & Lessons Learned

### 1. Password Issue

* Xano requires correct hashing
* Fix: ensure proper auth flow (not manual DB insert)

---

### 2. Token Issue

* Fixed mismatch:

  ```
  auth_token vs token
  ```

---

### 3. Image Upload Issue

Problem:

```
Missing param: inspiration_image_upload.path
```

✅ Fix:

* Input type: `Storage > File Resource`
* Add:

  ```
  Create Image Metadata
  ```
* Store metadata result, not raw input

---

### 4. Booking Detail Not Found

Problem:

* Matching wrong relationship

❌ Wrong:

```
user.id === tailor.id
```

✅ Correct:

```
tailor.user_id === user.id
```

---

### 5. Role-based Booking APIs

Split endpoints:

| Role     | Endpoint              |
| -------- | --------------------- |
| Customer | `/get_booking`        |
| Tailor   | `/get_tailor_booking` |

---

### 6. Query Param Handling

Centralized with:

```
buildQueryString()
```

---

## 🧱 Frontend Structure

### Key Files

* `api.js`

  * all API calls
  * auth handling
  * query building

* `pages.js`

  * UI rendering
  * page logic
  * state handling

---

## 🧭 Current Features Completed

✅ Auth (login/signup)
✅ Token handling
✅ Tailor listing
✅ Tailor detail page
✅ Booking creation (with image upload)
✅ Customer bookings list
✅ Tailor dashboard bookings
✅ Booking detail page (role-aware)
✅ Date formatting improvements
✅ Role-based API separation

---

## 🚧 Next Recommended Features

### 1. Tailor Actions (HIGH PRIORITY)

* Update booking status
* Set:

  * appointment_datetime
  * due_date
  * completion_date

---

### 2. Review System

* Customer can:

  * review only completed bookings
* Backend rule:

  ```
  has_review = false → allow review
  ```

---

### 3. Booking Status Workflow

Suggested statuses:

* `pending`
* `accepted`
* `in_progress`
* `ready`
* `completed`
* `cancelled`

---

### 4. Notifications (Future)

* email or in-app
* status changes
* booking updates

---

## 🧪 Testing Checklist

### Customer

* Create booking
* View bookings
* View booking detail

### Tailor

* View dashboard bookings
* View booking detail

### Edge Cases

* Missing bookingId
* Unauthorized token
* Empty results

---

## 🧠 Design Principles

* Keep frontend **beginner-friendly**
* Centralize logic in `api.js`
* Avoid duplication (use relationships)
* Use role-specific endpoints
* Let backend handle security (never trust frontend IDs)

---
