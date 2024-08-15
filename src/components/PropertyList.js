import React, { useState } from "react";
import Sort from "./Sort";

const PropertyList = ({
  properties,
  onBook,
  locationFilter,
  setLocationFilter,
  priceRangeFilter,
  setPriceRangeFilter,
  bedroomsFilter,
  setBedroomsFilter,
  amenitiesFilter,
  setAmenitiesFilter,
}) => {
  const [sortedProperties, setSortedProperties] = useState(properties);

  const handleSort = (criteria, order) => {
    let sortedList = [...properties];

    if (criteria === "price") {
      sortedList.sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (criteria === "bedrooms") {
      sortedList.sort((a, b) =>
        order === "asc" ? a.bedrooms - b.bedrooms : b.bedrooms - a.bedrooms
      );
    } else if (criteria === "location") {
      sortedList.sort((a, b) =>
        order === "asc"
          ? a.location.localeCompare(b.location)
          : b.location.localeCompare(a.location)
      );
    }

    setSortedProperties(sortedList);
  };

  const filteredProperties = sortedProperties.filter((property) => {
    return (
      (locationFilter === "" || property.location.includes(locationFilter)) &&
      property.price >= priceRangeFilter[0] &&
      property.price <= priceRangeFilter[1] &&
      (bedroomsFilter === 0 || property.bedrooms >= bedroomsFilter) &&
      amenitiesFilter.every((amenity) => property.amenities.includes(amenity))
    );
  });

  return (
    <div>
      <Sort
        onSort={handleSort}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        priceRangeFilter={priceRangeFilter}
        setPriceRangeFilter={setPriceRangeFilter}
        bedroomsFilter={bedroomsFilter}
        setBedroomsFilter={setBedroomsFilter}
        amenitiesFilter={amenitiesFilter}
        setAmenitiesFilter={setAmenitiesFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{property.title}</h3>
            <p>{property.description}</p>
            <p>${property.price}/night</p>
            <p>{property.bedrooms} Bedrooms</p>
            <button
              onClick={() => onBook(property)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
