// KirtlandExperienceTable.jsx
import React from 'react';
import './The-Kirtland-Experience.css';

const tableData = [
  {
    category: "Dates",
    experiences: ["June 3-7, 2025", "July 8-12, 2025", "September 9-13, 2025", "October 14-18, 2025"],
  },
  {
    category: "Maximum Number of Guests",
    experiences: ["25", "46", "25", "46"],
  },
  {
    category: "Ohio Historic Sites Tours",
    experiences: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    category: "Discussions on the Kirtland Temple and School of the Prophets",
    experiences: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    category: "Amish Dinner in their Home",
    experiences: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    category: "Discussions on appearances of Beffy, the J.T., etc.",
    experiences: ["", "✔️", "", "✔️"],
  },
  {
    category: "Visit with a member of the Community of Christ",
    experiences: ["✔️", "", "✔️", ""],
  },
  {
    category: "Visit the Ohio Earthworks Mound",
    experiences: ["✔️", "✔️", "", ""],
  },
  {
    category: "Meet and learn about members of the Amish faith",
    experiences: ["", "✔️", "", "✔️"],
  },
  {
    category: "See the Spaulding Manuscript and first-edition Book of Mormon",
    experiences: ["✔️", "", "", "✔️"],
  },
  {
    category: "Travel to Amish country",
    experiences: ["", "", "✔️", "✔️"],
  },
  {
    category: "Trip Cost for Double Occupancy Room",
    experiences: ["$1350 per person", "$1150 per person", "$1350 per person", "$1150 per person"],
  },
  {
    category: "Trip Cost of Single Occupancy Room",
    experiences: ["$1650 per person", "$1650 per person", "$1650 per person", "$1650 per person"],
  },
];

const TheKirtlandExperience = () => {
  return (
    <div className="table-container">
      <table className="experience-table">
        <thead>
          <tr>
            <th className="header-cell">Dates</th>
            <th className="header-cell">Kirtland Experience #1</th>
            <th className="header-cell">Kirtland Experience #2</th>
            <th className="header-cell">Kirtland Experience #3</th>
            <th className="header-cell">Kirtland Experience #4</th>
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

export default TheKirtlandExperience;
