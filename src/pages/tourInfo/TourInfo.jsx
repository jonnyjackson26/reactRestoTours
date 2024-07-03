import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './TourInfo.css';
import Button from '../../components/Button/Button';

const TourInfo = ({ agenda }) => {
    console.log(agenda);
    return (
        <>
            <NavBar />
            <main className="tour-info">
                <h1>Tour Agenda</h1>

                <div className="tourInfoContainer">
                    <div className="content">
                        <p><strong>Tour Price: $1,350</strong></p>
                        <p>All lodging, meals (except 3), and transit are included in the price. Airfare not included.</p>
                    </div>
                    <div className="button-div">
                        <Button text="Register" to="/register" />
                    </div>
                </div>


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
