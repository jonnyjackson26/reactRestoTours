import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TourButton from '../../components/TourButton/TourButton';
import './Tours.css';

const Tours = () => {
    return (
        <>
            <NavBar />
            <main className="faq"> {/*need to change*/}
                <h1>Ours Tours</h1>

                <section className="faq-section"> {/*need to change*/}
                    <TourButton name="Tour 1" date="aug 1" imageUrl='src/assets/temple.jpg' linkTo='/'></TourButton>
                </section>

            </main>
        </>
    );
};

export default Tours;
