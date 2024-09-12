import React from 'react';
import Button from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';

const Home = () => {

    const call = () => {
        window.location.href = 'tel:8017172980';
    };

    return (
        <>
            <NavBar />
            <main className="hero">
                {/* Video for desktop */}
                <video className="desktop-video" autoPlay loop muted playsInline>
                    <source src="/assets/video-hero-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Image for mobile */}
                <div className="mobile-image"></div>

                <div className="hero-content">
                    <h1>Experience Kirtland</h1>
                    <h3>In a way most never get the opportunity to do with a guided church history tour with Joe Jackson</h3>
                    <br />
                    <p>While in Kirtland you will have In-depth interactive studies of all important revelations received in the Kirtland area (64!)</p>
                    <p>Have comprehensive discussions on the Pentecostal events that occurred in the Kirtland temple.</p>
                    <p>Learn about relationships between Community of Christ and other restoration branches with The Church of Jesus Christ of Latter-day Saints.</p>
                    <p>Hear stories about the transfer of stewardship of the Kirtland Temple and the impact it had on local members and residents.</p>
                    <div className="buttons">
                        <Button text="Call or Text" onClick={call}></Button>
                        <Button text="See Our Tours" to='/tours' />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
