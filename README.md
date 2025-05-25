# Inventory Management App

This is a simple inventory management application built with Node.js, Express, PostgreSQL, and EJS. It allows you to manage categories and items, where each item belongs to a category.

## Features

- Two main entities: Category and Item
- Create, read, update, and delete (CRUD) functionality for both
- Items are linked to a category
- Prevent deletion of a category if it contains items
- Basic HTML UI rendered with EJS

## Requirements

- Node.js
- PostgreSQL

## Database Schema

### category

| Field       | Type      | Description            |
|-------------|-----------|------------------------|
| id          | SERIAL PK | Unique ID              |
| name        | TEXT      | Category name          |

### item

| Field       | Type        | Description                    |
|-------------|-------------|--------------------------------|
| id          | SERIAL PK   | Unique ID                      |
| name        | TEXT        | Item name                      |
| quantity    | INTEGER     | Available quantity             |
| price       | NUMERIC     | Price of item                  |
| category_id | INTEGER FK  | References `category(id)`      |