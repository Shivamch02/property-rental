import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import BookingCart from "./components/BookingCart";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";

function App() {
  const [bookings, setBookings] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000]);
  const [bedroomsFilter, setBedroomsFilter] = useState(0);
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);

  const properties = [
    {
      id: 1,
      title: "Cozy Apartment",
      description: "A nice place to stay.",
      price: 150,
      bedrooms: 2,
      amenities: ["WiFi", "Parking"],
      location: "New York",
      image:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Luxury Villa",
      description: "Enjoy luxury at its finest.",
      price: 500,
      bedrooms: 4,
      amenities: ["WiFi", "Pool", "Gym"],
      location: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Luxury Villa",
      description: "Enjoy luxury at its finest.",
      price: 500,
      bedrooms: 4,
      amenities: ["WiFi", "Pool", "Gym"],
      location: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more properties...
  ];

  const handleBookProperty = (property) => {
    const existingBooking = bookings.find(
      (booking) => booking.property.id === property.id
    );
    if (existingBooking) {
      // If the property is already booked, increase the count
      setBookings(
        bookings.map((booking) =>
          booking.property.id === property.id
            ? { ...booking, count: booking.count + 1 }
            : booking
        )
      );
    } else {
      // If the property is not in the cart, add it with a count of 1
      setBookings([...bookings, { property, count: 1 }]);
    }
  };

  const handleIncreaseBooking = (propertyId) => {
    setBookings(
      bookings.map((booking) =>
        booking.property.id === propertyId
          ? { ...booking, count: booking.count + 1 }
          : booking
      )
    );
  };

  const handleDecreaseBooking = (propertyId) => {
    setBookings(
      bookings
        .map((booking) =>
          booking.property.id === propertyId
            ? { ...booking, count: booking.count - 1 }
            : booking
        )
        .filter((booking) => booking.count > 0)
    );
  };

  const handleRemoveItem = (propertyId) => {
    setBookings(
      bookings.filter((booking) => booking.property.id !== propertyId)
    );
  };

  return (
    <Router>
      <div className="App">
        <Header bookingCount={bookings.length} />
        <div className="container mx-auto py-4">
          <Routes>
            <Route
              path="/"
              element={
                <PropertyList
                  properties={properties}
                  onBook={handleBookProperty}
                  locationFilter={locationFilter}
                  setLocationFilter={setLocationFilter}
                  priceRangeFilter={priceRangeFilter}
                  setPriceRangeFilter={setPriceRangeFilter}
                  bedroomsFilter={bedroomsFilter}
                  setBedroomsFilter={setBedroomsFilter}
                  amenitiesFilter={amenitiesFilter}
                  setAmenitiesFilter={setAmenitiesFilter}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <BookingCart
                  bookings={bookings}
                  onIncrease={handleIncreaseBooking}
                  onDecrease={handleDecreaseBooking}
                  onRemoveItem={handleRemoveItem}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
