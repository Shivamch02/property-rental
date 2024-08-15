import React from "react";

const CheckoutForm = ({ total, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block text-lg">Contact Information</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="w-full p-2 border rounded-lg mt-2"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg">Payment Details</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Card Number"
          required
        />
      </div>
      <div className="text-lg font-bold mb-4">Total: ${total}</div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Complete Booking
      </button>
    </form>
  );
};

export default CheckoutForm;
