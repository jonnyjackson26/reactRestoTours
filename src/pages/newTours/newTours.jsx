import React from 'react';
import { Link } from 'react-router-dom';
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

const colorPalettes = {
    "The Kirtland Experience": [
      "#003f5c", // Dark Blue
      "#2f4b7c", // Medium Blue
      "#665191", // Slate Blue
      "#a05195", // Light Purple Blue
      "#d45087"  // Pinkish Blue
    ],
    "Doctrine Restored": [
      "#004d00", // Dark Green
      "#007a33", // Medium Green
      "#4caf50", // Light Green
      "#81c784", // Pale Green
      "#a5d6a7"  // Very Light Green
    ],
    "Birthplace of a Prophet, a Church, and the Restoration of Keys": [
      "#8e6f41", // Dark Beige
      "#a28d6b", // Medium Beige
      "#c4a59b", // Light Beige
      "#d8cfc4", // Very Light Beige
      "#f5f3f0"  // Off-White
    ],
    "Deacons & Dads": [
      "#5c4033", // Dark Brown
      "#7d5a43", // Medium Brown
      "#a07b6d", // Light Brown
      "#c3a398", // Pale Brown
      "#e0d4c0"  // Very Light Brown
    ],
    "City of Joseph": [
      "#7d3f3f", // Dark Maroon
      "#a64d4d", // Medium Maroon
      "#c77c7c", // Light Maroon
      "#e4a5a5", // Pale Maroon
      "#f5d6d6"  // Very Light Maroon
    ],
    "Life of the Prophet Joseph": [
      "#4a148c", // Dark Purple
      "#6a1b9a", // Medium Purple
      "#9c27b0", // Light Purple
      "#ce93d8", // Pale Purple
      "#f3e5f5"  // Very Light Purple
    ],
    "On the Shores of Lake Erie": [
      "#01579b", // Dark Blue
      "#0288d1", // Medium Blue
      "#03a9f4", // Light Blue
      "#67daff", // Pale Blue
      "#b3e5fc"  // Very Light Blue
    ]
  };

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
          {toursData.map((tour, index) => {
            const path = `/${tour.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <tr key={index} className={`row-${index}`} style={{ cursor: 'pointer' }}>
                <td><Link to={path}>{tour.title}</Link></td>
                <td><Link to={path}>{tour.location}</Link></td>
                <td><Link to={path}>{tour.dates}</Link></td>
                <td><Link to={path}>{tour.daysOnTour}</Link></td>
                <td><Link to={path}>{tour.cost}</Link></td>
                <td><Link to={path}>{tour.activityLevel}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToursTable;
