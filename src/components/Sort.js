import React, { useState } from "react";

const Sort = ({
  onSort,
  locationFilter,
  setLocationFilter,
  priceRangeFilter,
  setPriceRangeFilter,
  bedroomsFilter,
  setBedroomsFilter,
  amenitiesFilter,
  setAmenitiesFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const amenitiesList = ["WiFi", "Parking", "Pool", "Gym"];

  const handleSort = () => {
    onSort(sortCriteria, sortOrder);
    setIsOpen(false); // Close the sort section after applying
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isOpen ? "Close Sort & Filter Options" : "Sort & Filter Properties"}
      </button>

      {isOpen && (
        <div className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium">Sort By</label>
            <select
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="">Select</option>
              <option value="price">Price</option>
              <option value="bedrooms">Number of Bedrooms</option>
              <option value="location">Location</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Order</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter location"
            />
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Price Range</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRangeFilter[1]}
              onChange={(e) => setPriceRangeFilter([0, Number(e.target.value)])}
              className="mt-1 p-2 border rounded-md w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${priceRangeFilter[1]}</span>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Number of Bedrooms
            </label>
            <input
              type="number"
              value={bedroomsFilter}
              onChange={(e) => setBedroomsFilter(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter number of bedrooms"
            />
          </div>

          {/* Amenities Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Amenities</label>
            <div className="mt-1">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="block">
                  <input
                    type="checkbox"
                    checked={amenitiesFilter.includes(amenity)}
                    onChange={(e) => {
                      const newAmenities = e.target.checked
                        ? [...amenitiesFilter, amenity]
                        : amenitiesFilter.filter((a) => a !== amenity);
                      setAmenitiesFilter(newAmenities);
                    }}
                  />
                  <span className="ml-2">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleSort}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Apply Sort & Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Sort;
