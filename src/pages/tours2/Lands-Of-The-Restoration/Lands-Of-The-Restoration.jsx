// ExperienceTable.jsx
import React from 'react';
import './Lands-Of-The-Restoration.css';

const tableData = [
  {
    category: "Dates",
    experiences: ["September 16-22, 2025", "May 14-20, 2025", "October 7-13, 2025"],
  },
  {
    category: "Maximum Number of Guests",
    experiences: ["48", "28", "48"],
  },
  {
    category: "Visit the Boston area",
    experiences: ["✔️", "", "✔️"],
  },
  {
    category: "Tour the birthplace of Joseph Smith in Sharon, Vermont",
    experiences: ["✔️", "", "✔️"],
  },
  {
    category: "Explore the historic sites in Palmyra, Manchester, and Fayette",
    experiences: ["✔️", "✔️", "✔️"],
  },
  {
    category: "Walk the Sacred Grove and the Priesthood Restoration Site",
    experiences: ["✔️", "✔️", "✔️"],
  },
  {
    category: "Ohio Historic Sites Tours",
    experiences: ["✔️", "✔️", "✔️"],
  },
  {
    category: "Discussions on the Kirtland Temple and School of the Prophets",
    experiences: ["✔️", "✔️", "✔️"],
  },
  {
    category: "Amish Dinner in their Home",
    experiences: ["✔️", "", ""],
  },
  {
    category: "Discussions on appearances of Beffy, the J.T., etc.",
    experiences: ["", "✔️", ""],
  },
  {
    category: "Visit with a member of the Community of Christ",
    experiences: ["✔️", "", ""],
  },
  {
    category: "See Niagara Falls",
    experiences: ["✔️", "✔️", "✔️"],
  },
  {
    category: "Arrival Airport / Departure Airport",
    experiences: ["Boston/Cleveland", "Buffalo/Cleveland", "Buffalo/Cleveland"],
  },
  {
    category: "Trip Cost for Double Occupancy Room",
    experiences: ["$2700 per person", "$1950 per person", "$1850 per person"],
  },
  {
    category: "Trip Cost for Single Occupancy Room",
    experiences: ["$2000 per person", "$2250 per person", "$1850 per person"],
  },
];

const LandsOfTheRestoration = () => {
  return (
    <div className="table-container">
      <table className="experience-table">
        <thead>
          <tr>
            <th className="header-cell">Dates</th>
            <th className="header-cell">Birthplace of a Prophet, a Church, and the Restoration of Kings</th>
            <th className="header-cell">Doctrine Restored #1</th>
            <th className="header-cell">Doctrine Restored #2</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="category-cell">{row.category}</td>
              {row.experiences.map((exp, i) => (
                <td key={i} className="experience-cell">{exp}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandsOfTheRestoration;
