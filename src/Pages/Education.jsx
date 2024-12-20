import React from 'react';
import './Education.css';


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const transitionElements = document.querySelectorAll('.transition');
transitionElements.forEach((el) => observer.observe(el));


function Education() {
    return (
        <div className="education-container">
            <h1 className="heading">

            </h1>
            <div className="card-grid">
                <div className='card1'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">Natural ways to protect your crops</p>


                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Explore various sustainable farming techniques suitable for urban environments.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className='card2'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">Natural ways to protect your crops</p>

                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Join our expert-led webinar on effective crop rotation strategies.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Register Now</button>
                        </div>
                    </div>
                </div>
                <div className='card3'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">Natural ways to protect your crops</p>
                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Learn about organic pest control methods for your urban farm.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Download Guide</button>
                        </div>
                    </div>
                </div>
                <div className='card4'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">card4</p>
                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Learn about organic pest control methods for your urban farm.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Download Guide</button>
                        </div>
                    </div>
                </div>
                <div className='card5'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">card5</p>
                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Learn about organic pest control methods for your urban farm.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Download Guide</button>
                        </div>
                    </div>
                </div>
                <div className='card6'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pest Management Guide</h3>
                            <p className="card-description">card6</p>
                        </div>
                        <div className="card-content">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <p>Learn about organic pest control methods for your urban farm.</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn">Download Guide</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
