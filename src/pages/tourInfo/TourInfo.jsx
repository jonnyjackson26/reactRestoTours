import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './TourInfo.css';

const TourInfo = ({ agenda }) => {
    return (
        <>
            <NavBar />
            <main className="tour-info">
                <h1>Tour Agenda</h1>
                <section className="agenda">
                    {agenda.map((day, index) => (
                        <div key={index} className="agenda-day" dangerouslySetInnerHTML={{ __html: day.html }} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default TourInfo;
