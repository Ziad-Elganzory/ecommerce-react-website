# ShopHub - E-Commerce Website

A modern, full-featured e-commerce platform built with React and Vite. This practice project demonstrates core e-commerce functionality including product browsing, shopping cart management, user authentication, and checkout processes.

## 🎯 Features

- **Product Catalog**: Browse and view detailed product information
- **Shopping Cart**: Add/remove items and manage quantities with persistent storage
- **User Authentication**: Sign up and login functionality with local storage persistence
- **Checkout Process**: Complete order summary and order placement
- **Responsive Design**: Mobile-friendly UI components
- **Context API**: Centralized state management for cart and authentication
- **Form Validation**: React Hook Form integration for robust form handling

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Styling**: Custom CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   └── ProductCard.jsx # Product display card
├── context/             # Context providers
│   ├── AuthContext.jsx  # Authentication state
│   └── CartContext.jsx  # Shopping cart state
├── pages/               # Page components
│   ├── Home.jsx        # Product listing page
│   ├── Auth.jsx        # Authentication (signup/login)
│   └── Checkout.jsx    # Checkout and order summary
├── data/                # Static data
│   └── products.js     # Product data
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📖 Usage

### Pages Overview

**Home (`/`)**
- displays product catalog
- Filter and browse products
- Add products to shopping cart

**Authentication (`/auth`)**
- User signup with email and password validation
- Login functionality
- Form validation with error messages

**Checkout (`/checkout`)**
- View cart items with quantities
- Adjust item quantities or remove items
- View order total
- Place order confirmation

### Key Features

#### Shopping Cart
- Add items with one click
- Update quantities on the fly
- Remove individual items
- Automatic total calculation
- Cart persists across sessions using localStorage

#### User Authentication
- Email and password validation
- Secure password requirements (6-12 characters)
- User data stored in localStorage
- Session persistence

## 💾 Local Storage

The application uses browser localStorage to persist:
- **users**: Array of registered user accounts
- **cart**: Shopping cart items and quantities

## 🧪 Development

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📝 Future Enhancements

- [ ] Backend API integration for user authentication
- [ ] Database integration for product and order management
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Order history and tracking
- [ ] Product search and filtering
- [ ] User profile management
- [ ] Admin dashboard
- [ ] Reviews and ratings system
- [ ] Wishlist functionality

## 📄 License

This project is free to use for personal and educational purposes.
