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
                        <p><strong>Tour Price</strong></p>
                        <p>Pricing includes lodging, all transport, all tour expenses, (with the exception of 3 meals). Pricing does not include airfare.</p>
                        <ul>
                            <li>$1050 per person based on double occupancy – Cash/Check/Zelle/Venmo Price</li>
                            <li>$1100 per person if paying by debit/credit card (double occupancy)</li>
                            <li>$1,250 for single occupancy Cash/Check/Zelle/Venmo Price</li>
                            <li>$1,300 single occupancy rate (credit card price)</li>
                        </ul>
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
