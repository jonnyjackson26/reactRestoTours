import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <>
            <NavBar />
            <main className="testimonials">
                <h1>What Others Are Saying</h1>
                <section className="testimonial-container">
                    <div className="testimonial">
                        <p>‘The time we spent with Joe changed our perspective on church history. I had studied church history
                            my entire life and had been to Kirtland a handful of times, but the way that Joe taught, and
                            delivered the stories about the early saints gave me insights I had never considered before. A trip
                            to Kirtland is not complete without learning from Joe.’</p>
                        <p className="author">- Jennifer, Utah</p>
                    </div>

                    <div className="testimonial">
                        <p>‘I have only been a member of the church for 3 years. My husband and I decided to use our vacation
                            time to visit historical sites so I could learn more about the church. I was amazed at the spiritual
                            events that happened in Kirtland. I am 26 years old. In my group there were teenagers and people who
                            were in their 70’s. During our tour I looked around and noticed that EVERYONE was on the edge of
                            their seats hanging to every word that was being shared.’</p>
                        <p className="author">- Ashley, Montana</p>
                    </div>

                    <div className="testimonial">
                        <p>‘As a retired institute teacher, I have visited Palmyra, Kirtland, Independence, and Nauvoo every
                            other year for the last 18 years. During my visits, I brought a notebook each time, yet I never felt
                            impressed to open my notebook and take notes. While listening to Brother Jackson I took pages of
                            notes. I have never experienced anything like Brother Jackson before. Spending time with him is a
                            must.’</p>
                        <p className="author">- Ron, Utah</p>
                    </div>

                    <div className="testimonial">
                        <p>‘I have been on several trips with ‘Mr. Kirtland’ Karl Anderson before. I booked another trip hoping
                            to have Karl as our guide. When I learned Karl was no longer giving tours, I wondered what our
                            experience would be like. When visiting at the Morley farm It was clear to me that the Lord has
                            placed Joe in Kirtland to help teach visitors the significance of the area. There is no place in our
                            history quite like Kirtland, and there is no one who can interpret Kirtland quite like Joe Jackson.’
                        </p>
                        <p className="author">- Ken, Utah</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Testimonials;
