import React from 'react';
import './Community.css';

const chatbox = () => {


}

function Community() {
    return (
        <div className="community-container">
            <h2 className="community-title">Community</h2>
            <div className="community-grid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Urban Farmers Forum</h3>
                        <p className="card-description">Connect with fellow urban farmers</p>
                    </div>
                    <div className="card-content">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <p>Join discussions, share experiences, and get advice from the community.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn" onClick={chatbox}>Join Forum</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Local Meetups</h3>
                        <p className="card-description">Find urban farming events near you</p>
                    </div>
                    <div className="card-content">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <p>Discover and participate in local urban farming meetups and workshops.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn">Find Events</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Collaborative Projects</h3>
                        <p className="card-description">Work together on community gardens</p>
                    </div>
                    <div className="card-content">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-size">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <p>Join or start collaborative urban farming projects in your area.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn">Explore Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Community;
