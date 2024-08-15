import React from "react";
import { Link } from "react-router-dom";

const BookingCart = ({ bookings, onIncrease, onDecrease, onRemoveItem }) => {
  const totalCost = bookings.reduce(
    (total, booking) => total + booking.count * booking.property.price,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Cart</h2>
      {bookings.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {bookings.map(({ property, count }) => (
              <li key={property.id} className="border p-4 rounded-lg mb-4">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-32 h-32 object-cover mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p>{property.description}</p>
                  <p>${property.price}/night</p>
                  <p>
                    {count} x ${property.price} = ${count * property.price}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => onDecrease(property.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                      -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button
                      onClick={() => onIncrease(property.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(property.id)}
                      className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Total: ${totalCost}</h3>
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingCart;
