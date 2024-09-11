// LakeErieExperienceTable.jsx
import React from 'react';
import './On-The-Shores.css';

const tableData = [
  {
    category: "Maximum Number of Guests",
    experience: "48",
  },
  {
    category: "Ohio Historic Sites Tours",
    experience: "✔️",
  },
  {
    category: "Discussions on the Kirtland Temple and School of the Prophets",
    experience: "✔️",
  },
  {
    category: "Amish Dinner in their Home",
    experience: "✔️",
  },
  {
    category: "Discussions on appearances of Deity, the JST, Section 76, the life of Prophet Joseph Smith and his family",
    experience: "✔️",
  },
  {
    category: "Visit with a member of the Community of Christ",
    experience: "✔️",
  },
  {
    category: "Fairport Harbor Lighthouse and downtown Painesville",
    experience: "✔️",
  },
  {
    category: "Shaker, Lakeview Cemetery and University Circle",
    experience: "✔️",
  },
  {
    category: "West Side Market and Rock ‘n Roll Hall of Fame",
    experience: "✔️",
  },
  {
    category: "South Bass Island and Cedar Point",
    experience: "✔️",
  },
  {
    category: "Trip Cost for Double Occupancy Room",
    experience: "$1800 per person",
  },
  {
    category: "Trip Cost for Single Occupancy Room",
    experience: "$2150 per person",
  },
];

const OnTheShores = () => {
  return (
    <div className="table-container">
      <table className="experience-table">
        <thead>
          <tr>
            <th className="category-header">Dates</th>
            <th className="experience-header">On the Shores of Lake Erie</th>
          </tr>
          <tr>
            <th className="category-header"></th>
            <th className="experience-date">August 13-20, 2025</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="category-cell">{row.category}</td>
              <td className="experience-cell">{row.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnTheShores;
