import React from "react";

const Filters = ({
  locationFilter,
  setLocationFilter,
  priceRangeFilter,
  setPriceRangeFilter,
  bedroomsFilter,
  setBedroomsFilter,
  amenitiesFilter,
  setAmenitiesFilter,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRangeFilter[1]}
          onChange={(e) => setPriceRangeFilter([0, e.target.value])}
          className="mt-1"
        />
        <span className="block mt-1">Up to ${priceRangeFilter[1]}</span>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Bedrooms</label>
        <input
          type="number"
          value={bedroomsFilter}
          onChange={(e) => setBedroomsFilter(parseInt(e.target.value))}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Amenities</label>
        <div className="flex flex-wrap">
          {["WiFi", "Parking", "Pool", "Gym"].map((amenity) => (
            <label key={amenity} className="mr-4">
              <input
                type="checkbox"
                checked={amenitiesFilter.includes(amenity)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAmenitiesFilter([...amenitiesFilter, amenity]);
                  } else {
                    setAmenitiesFilter(
                      amenitiesFilter.filter((item) => item !== amenity)
                    );
                  }
                }}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
