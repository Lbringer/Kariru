### Schema

1. Users Table
   This table stores information about users, including both regular users and administrators.

id (Primary Key, Auto-increment) - Unique identifier for each user.
name (String, Not Null) - Full name of the user.
email (String, Unique, Not Null) - Used as the login identifier.
password (String, Not Null) - Hashed password for authentication.
role (Enum: USER, ADMIN, Not Null) - Defines whether the user is an admin or a regular user.
address (Text, Optional) - User’s address for delivery purposes.
Relationships:

One-to-Many with Reservations (A user can make multiple reservations).
One-to-Many with Waitlist (A user can wait for multiple books).
One-to-Many with Notifications (A user can receive multiple notifications).

2. Books Table
   Stores details of all books available in the system.

id (Primary Key, Auto-increment) - Unique identifier for each book.
title (String, Not Null) - Title of the book.
author (String, Not Null) - Author's name.
genre (String, Not Null) - Book category (e.g., Fiction, History).
ISBN (String, Unique) - International Standard Book Number for book identification.
stock (Integer, Default 0) - Number of available copies.
rental_price (Decimal, Not Null) - Price for renting the book.
Relationships:

One-to-Many with Reservations (A book can be reserved multiple times).
One-to-Many with Waitlist (A book can have multiple waitlisted users).

3. Reservations Table
   Stores information about active and past book reservations made by users.

id (Primary Key, Auto-increment) - Unique identifier for each reservation.
user_id (Foreign Key → Users) - The user who made the reservation.
book_id (Foreign Key → Books) - The book that was reserved.
reservation_date (Timestamp, Default Current Time) - Date when the reservation was made.
status (Enum: PENDING, APPROVED, REJECTED, COMPLETED) - Current reservation status.
Relationships:

Many-to-One with Users (Each reservation belongs to one user).
Many-to-One with Books (Each reservation is for one book).

4. Waitlist Table
   Tracks users who want to rent a book that is currently unavailable.

id (Primary Key, Auto-increment) - Unique identifier for each waitlist entry.
user_id (Foreign Key → Users) - The user waiting for the book.
book_id (Foreign Key → Books) - The book the user is waiting for.
position (Integer, Not Null) - The user’s position in the waitlist.
Relationships:

Many-to-One with Users (A user can wait for multiple books).
Many-to-One with Books (A book can have multiple waitlisted users).

5. Notifications Table
   Stores system-generated notifications for users (e.g., reservation status updates, overdue alerts).

id (Primary Key, Auto-increment) - Unique identifier for each notification.
user_id (Foreign Key → Users, Nullable for admin-wide notifications) - The user receiving the notification.
type (Enum: RESERVATION, OVERDUE, WAITLIST, GENERAL) - The type of notification.
message (Text, Not Null) - Content of the notification.
created_at (Timestamp, Default Current Time) - Date and time of notification.
is_read (Boolean, Default False) - Whether the user has read the notification.
Relationships:

Many-to-One with Users (Each user can have multiple notifications).

### API routes
