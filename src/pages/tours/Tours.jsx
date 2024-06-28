import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TourButton from '../../components/TourButton/TourButton';
import './Tours.css';

const Tours = () => {
    return (
        <>
            <NavBar />
            <main className="ToursMain">
                <h1>Ours Tours</h1>

                <section className="tours">
                    <TourButton name="Tour of Kirtland, Ohio" date="September 24-28, 2024" imageUrl='assets/temple-painting.jpg' linkTo='tour1'></TourButton>
                    <TourButton name="Tour of Kirtland, Ohio" date="October 8-12, 2024" imageUrl='assets/temple-painting.jpg' linkTo='tour2'></TourButton>
                    <TourButton name="Tour of Kirtland, Ohio" date="October 15-19, 2024" imageUrl='assets/temple-painting.jpg' linkTo='tour3'></TourButton>
                </section>

            </main>
        </>
    );
};

export default Tours;
