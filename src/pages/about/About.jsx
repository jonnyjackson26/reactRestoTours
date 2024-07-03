import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './About.css'
import Button from '../../components/Button/Button';

const About = () => {
    return (
        <>
            <NavBar />
            <main className="aboutUsSection">
                <section id="about" className="aboutus-container">
                    <h2>About Joe and Restoration Tour Group</h2>
                    <p>As a nearly lifelong resident of Kirtland, Joe has been involved in and seen many of the changes that
                        have
                        occurred in the Kirtland area over the last 40 years. As a child, he lived in the heart of the church
                        properties. As a young man, Joe discovered in his backyard the foundation of the original Ashery that,
                        after
                        excavation, would later be rebuilt by the church along with the Sawmill that was owned by Joel Hills
                        Johnson
                        (also in his backyard!). This discovery, and other events, led to the rebuilding of the Historic Kirtland village in 2003.
                    </p>
                    <p>During his time in Kirtland, he has been deeply committed to uniting the church with city leaders, other
                        faith leaders, and community members. In recent years, Joe has been involved in the restoration of the
                        Joseph & Emma Smith Home. Joe has worked closely with The Church of Jesus Christ of Latter-day Saints
                        and
                        Community of Christ during the transfer of stewardship of the Kirtland Temple. He has a deep love for
                        Community of Christ, the other faith groups in the city, and all things Kirtland.</p>
                    <div className="about-images">
                        <img src="assets/about-us/morley.jpg" alt="Tour at Morley Farm" />
                        <img src="assets/about-us/temple.jpg" alt="Tour Group in front of Kirtland Temple" />
                        <img src="assets/about-us/5k.jpg" alt="Joe with Nashville Tribute Band and Hank Smith" />
                    </div>
                    <div className="button-div">
                        <Button text="Our Tours" to="/tours" />
                        <Button text="Register" to="/register" />
                    </div>
                </section>

            </main>
        </>
    );
};

export default About;
