import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Faq.css';

const FAQ = () => {
    return (
        <>
            <NavBar />
            <main className="faq">
                <h1>Frequently Asked Questions</h1>

                <section className="faq-section">
                    <h2>What is included on the trip:</h2>
                    <ul>
                        <li>4 nights hotel accommodations</li>
                        <li>All meals specified in itinerary</li>
                        <li>Deluxe air-conditioning motor coach transportation</li>
                        <li>Transportation to and from airport</li>
                        <li>All taxes on included services</li>
                        <li>Gratuities on included meals</li>
                    </ul>
                </section>

                <section className="faq-section">
                    <h2>What is not included:</h2>
                    <ul>
                        <li>Airfare from home airport to Cleveland & Return airfare</li>
                        <li>Meals not specified in itinerary</li>
                        <li>Personal items</li>
                        <li>Trip cancellation and baggage insurance</li>
                        <li>Checked baggage fees</li>
                        <li>Bus Driver gratuities</li>
                    </ul>
                </section>

                <section className="faq-section">
                    <h2>Pricing</h2>
                    <p><strong>Price</strong></p>
                    <ul>
                        <li>$1050 per person based on double occupancy – Cash/Check/Zelle/Venmo Price</li>
                        <li>$1100 per person if paying by debit/credit card (double occupancy)</li>
                        <li>$1,250 for single occupancy Cash/Check/Zelle/Venmo Price</li>
                        <li>$1,300 single occupancy rate (credit card price)</li>
                    </ul>
                    <p><strong>Tips</strong></p>
                    <p>Several have asked about the tipping for the bus driver. If you wish to tip this could be done at the end
                        of each day. We recommend the amount of $10 per couple on the full tour days.</p>
                </section>

                <section className="faq-section">
                    <h2>Payment Schedule</h2>
                    <ul>
                        <li>$250 per person due at time of booking</li>
                        <li>Final Payment: Final payment is due three months before the tour departure date</li>
                    </ul>
                </section>

                <section className="faq-section">
                    <h2>Cancellation Policy</h2>
                    <p>If you cancel: Deposit is non-refundable; however, it is transferable to another guest on a new booking,
                        traveling on the same tour date. After final payment, the full amount is non-refundable. If you cancel
                        and you can find someone to take your spot, we will refund the deposit. If we have a waiting list, we
                        will refund your deposit by placing someone in your spot.</p>
                    <p>The only way to avoid trip cancellation penalties is to buy trip cancellation insurance. If you are
                        interested in the insurance, we can help you purchase it.</p>
                </section>

                <section className="faq-section">
                    <h2>Check Your Invoice Names</h2>
                    <p>Please check to see that your names are spelled correctly. Your first and last names must appear as they
                        appear on your passport for International travel and Driver’s License for domestic tours.</p>
                    <p><strong>IMPORTANT NOTE:</strong> Due to the nature of this tour, you must be able to climb stairs and
                        walk unassisted at a moderate pace up to 1 mile a day.</p>
                    <p>Please note that minor changes to the itinerary may occur due to local conditions and to better
                        accommodate our group.</p>
                </section>
            </main>
        </>
    );
};

export default FAQ;
