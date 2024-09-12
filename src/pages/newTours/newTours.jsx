import React from 'react';
import { Link } from 'react-router-dom';
import './newTours.css'; // Import the CSS file for styling
import NavBar from '../../components/NavBar/NavBar';

const toursData = [
  {
    title: "The Kirtland Experience",
    location: "Ohio",
    dates: "June 3-7, July 8-12, September 9-13, October 14-18",
    daysOnTour: 5,
    cost: "$1150-$1350",
    activityLevel: "About 1 mile a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "Doctrine Restored",
    location: "New York, Pennsylvania, Ohio",
    dates: "May 14-20, October 7-13",
    daysOnTour: 7,
    cost: "$1650-$1950",
    activityLevel: "About 1 mile a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "Lands Of The Restoration",
    location: "Vermont, New York, Pennsylvania, Ohio",
    dates: "September 16-22",
    daysOnTour: 7,
    cost: "$1700",
    activityLevel: "About 1 mile a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "Deacons & Dads",
    location: "Pennsylvania, New York, Ohio",
    dates: "August 5-10",
    daysOnTour: 7,
    cost: "$1500",
    activityLevel: "About 2 miles a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "City of Joseph",
    location: "Missouri, Illinois",
    dates: "July 30- August 3",
    daysOnTour: 5,
    cost: "$1350",
    activityLevel: "About 2 miles a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "Life of the Prophet Joseph",
    location: "New York, Pennsylvania, Ohio, Missouri, Nauvoo",
    dates: "June 18-29",
    daysOnTour: 12,
    cost: "$3150",
    activityLevel: "About 1-2 miles a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
  {
    title: "On the Shores of Lake Erie",
    location: "Ohio",
    dates: "August 13-20",
    daysOnTour: 8,
    cost: "$1800",
    activityLevel: "About 2 miles a day walking",
    imageUrl: "/assets/temple-painting.jpg",
  },
];

const namesAndPaths = {
  "On the Shores of Lake Erie": "/on-the-shores",
  "Life of the Prophet Joseph": "/life-of-the-prophet-joseph",
  "City of Joseph": "/city-of-joseph",
  "Deacons & Dads": "/deacons-and-dads",
  "Lands of the Restoration": "/lands-of-the-restoration",
  "Doctrine Restored": "/doctrine-restored",
  "The Kirtland Experience": "/the-kirtland-experience",
};

const ToursTable = () => {
  return (
    <>
      <NavBar />
      <div className="tours-table-container">
        <h1 className="tours-heading">Our tour options</h1>
        <p className="tours-description">
          Discover our exclusive tour options and choose the perfect one for you! Our tours cover all key Church history sites from Vermont to Missouri, blending historical exploration with local attractions and cuisine.
        </p>
        <table className="tours-table">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Location</th>
              <th>2025 Dates</th>
              <th>Days</th>
              <th>Cost</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {toursData.map((tour, index) => (
              <tr key={index} className={`tour-row row-${index}`}>
                <td className="tour-title">
                  <Link to={namesAndPaths[tour.title]}>{tour.title}</Link>
                </td>
                <td className="tour-image">
                  <img src={tour.imageUrl} alt={tour.title} />
                </td>
                <td data-label="Locations">{tour.location}</td>
                <td data-label="2025 Dates">{tour.dates}</td>
                <td data-label="Days">{tour.daysOnTour}</td>
                <td data-label="Cost">{tour.cost}</td>
                <td data-label="Activity">{tour.activityLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ToursTable;
