# Property Rental Platform

## Overview

This project is a property rental platform built using React.js and Tailwind CSS. The platform allows users to explore a variety of rental properties, filter and sort them based on different criteria, book properties, manage bookings in a cart, and proceed to checkout. The application is designed to be responsive, providing a seamless user experience across both desktop and mobile devices.

## Features

### 1. Property Listings
- Display a variety of properties with images, titles, descriptions, and prices.
- Include a "Book Now" button for each property to allow users to add properties to their cart.
- Each property has detailed information including price per night, location, number of bedrooms, and amenities.

### 2. Filtering and Sorting
- Implement filters to allow users to sort properties by:
  - **Location**
  - **Price Range**
  - **Number of Bedrooms**
  - **Amenities**
- Users can apply these filters from a sort section that is collapsible, providing a clean and intuitive user interface.

### 3. Booking Management
- Implement a booking management system to allow users to add properties to a cart.
- Users can view their cart, which displays:
  - The properties they have booked.
  - The ability to increase or decrease the number of nights for each booking.
  - A remove button to delete a property from the cart.
- Real-time updates of the total cost and item count are displayed in the cart.

### 4. Checkout Process
- Implement a checkout process that calculates the total cost of the booked properties.
- Users can enter booking details, including contact and payment information.

### 5. Responsive Design
- The website is fully responsive and optimized for both desktop and mobile devices.
- Tailwind CSS is used to ensure consistency and flexibility in the design across different screen sizes.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces. It allows for efficient component-based development, making the app modular and maintainable.
- **React Router**: Used for managing routing in the application, enabling navigation between different pages (e.g., property listings, cart, checkout).
- **Tailwind CSS**: A utility-first CSS framework that provides low-level styling options. It helps in creating a responsive and modern UI with minimal effort.

### State Management
- **React useState Hook**: Used for managing local state in functional components, such as the list of booked properties and filters.
- **React useEffect Hook**: Utilized for handling side effects in the application, like updating the cart total when properties are added or removed.

## Approach

1. **Component-Based Architecture**:
   - The application is built using a component-based architecture, where each feature or UI section is encapsulated in its own React component. This makes the codebase modular, easy to understand, and maintain.

2. **State Management**:
   - Local state is managed using React's `useState` hook. The state includes properties like the list of booked items, filters applied, and the total count of items in the cart.
   - The `useEffect` hook is used to manage side effects such as calculating the total cost when the cart is updated.

3. **Responsive Design**:
   - Tailwind CSS was chosen for its flexibility and ease of use in creating responsive designs. Media queries are utilized to adjust layouts based on screen size, ensuring the platform is accessible on various devices.

4. **Real-Time Cart Management**:
   - The cart is updated in real-time as users add or remove items. The `Header` component displays the total number of items in the cart, which updates dynamically.

5. **Filtering and Sorting**:
   - Filters are applied using simple conditional logic in the `PropertyList` component. The filtering options are provided in a collapsible section, keeping the interface clean.

## Additional Notes

- **Scalability**: The app is designed with scalability in mind. As more features or pages are added, the component-based structure will support easy expansion.
- **Error Handling**: Basic error handling is in place to manage potential issues like adding duplicate properties to the cart or attempting to checkout with an empty cart.
- **Future Improvements**: Potential enhancements include integrating a backend for managing property data and implementing user authentication for a more personalized experience.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shivamch02/property-rental-platform.git
