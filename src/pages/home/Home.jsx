import React from 'react';
import Button from '../../components/Button/Button';

const Home = () => {

    const call = () => {
        window.location.href = 'tel:4407961642';
    };
    const learnMore = () => {
        window.location.href = '/another-page';
    };

    return (
        <main className="hero">
            <div className="hero-content">
                <h1>Join Kirtland history expert Joe Jackson</h1>
                <p>on an in-depth tour of church history sites around the Kirtland area. Learn about the organizational
                    period, the teaching period, and the Pentecostal period of the church as well as the events that led to
                    the transfer of stewardship of the Kirtland temple.</p>
                <p>No other tour will help you gain a greater understanding of the significance of the 7 years the saints
                    spent in Kirtland. No other tour will be able to teach you about the prophecies that the Lord had for
                    Kirtland’s future that we are seeing fulfilled today.</p>
                <div className="buttons">
                    <Button text="call" onClick={call}></Button>
                    <Button text="Learn More About Tours" onClick={learnMore} />
                </div>

            </div>
        </main>
    );
};

export default Home;
