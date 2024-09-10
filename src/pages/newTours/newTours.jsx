// ToursTable.jsx
import React from 'react';
import './newTours.css'; // Import the CSS file for styling

const toursData = [
  {
    title: "The Kirtland Experience",
    location: "Ohio",
    dates: "June 3-7, July 8-12, September 9-13, October 14-18",
    daysOnTour: 5,
    cost: "$1150-$1350",
    activityLevel: "About 1 mile a day walking",
  },
  {
    title: "Doctrine Restored",
    location: "New York, Pennsylvania, Ohio",
    dates: "May 14-20, October 7-13",
    daysOnTour: 7,
    cost: "$1650-$1950",
    activityLevel: "About 1 mile a day walking",
  },
  {
    title: "Birthplace of a Prophet, a Church, and the Restoration of Keys",
    location: "Vermont, New York, Pennsylvania, Ohio",
    dates: "September 16-22",
    daysOnTour: 7,
    cost: "$1700",
    activityLevel: "About 1 mile a day walking",
  },
  {
    title: "Deacons & Dads",
    location: "Pennsylvania, New York, Ohio",
    dates: "August 5-10",
    daysOnTour: 7,
    cost: "$1500",
    activityLevel: "About 2 miles a day walking",
  },
  {
    title: "City of Joseph",
    location: "Missouri, Illinois",
    dates: "July 30- August 3",
    daysOnTour: 5,
    cost: "$1350",
    activityLevel: "About 2 miles a day walking",
  },
  {
    title: "Life of the Prophet Joseph",
    location: "New York, Pennsylvania, Ohio, Missouri, Nauvoo",
    dates: "June 18-29",
    daysOnTour: 12,
    cost: "$3150",
    activityLevel: "About 1-2 miles a day walking",
  },
  {
    title: "On the Shores of Lake Erie",
    location: "Ohio",
    dates: "August 13-20",
    daysOnTour: 8,
    cost: "$1800",
    activityLevel: "About 2 miles a day walking",
  },
];

const ToursTable = () => {
  return (
    <div className="tours-table-container">
      <h1 className="tours-heading">Our tour options</h1>
      <p className="tours-description">
        Discover our exclusive tour options and choose the perfect one for you! Our tours cover all key Church history sites from Vermont to Missouri, blending historical exploration with local attractions and cuisine. Each tour is led by our expert historian, Joe Jackson, ensuring a richly informative and enjoyable experience. Included in every tour are admission and tickets to each location and nearly all meals (as specified in the description). Walking short distances is common during the tours, but you may enjoy longer walks at several of our stops.
      </p>
      <table className="tours-table">
        <thead>
          <tr>
            <th></th>
            <th>Location</th>
            <th>2025 Dates Available</th>
            <th>Days on Tour</th>
            <th>Cost for Double-Occupancy</th>
            <th>Activity Level</th>
          </tr>
        </thead>
        <tbody>
          {toursData.map((tour, index) => (
            <tr key={index} className={`row-${index}`}>
              <td className="title-cell">{tour.title}</td>
              <td>{tour.location}</td>
              <td>{tour.dates}</td>
              <td>{tour.daysOnTour}</td>
              <td>{tour.cost}</td>
              <td>{tour.activityLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToursTable;
