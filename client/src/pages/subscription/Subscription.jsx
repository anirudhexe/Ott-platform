import React from 'react';
import './subscription.scss'; // Import SCSS file for styling

function Subscription() {
  return (
    <div className="subscription-plan-page">
      <h1>Choose a Subscription Plan</h1>
      <div className="plans-container">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>Rs.199/month</p>
          <ul>
            <li>Access to basic content</li>
            <li>Standard Definition (SD) streaming</li>
            <li>1 device at a time</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="plan">
          <h2>Premium Plan</h2>
          <p>Rs.499/month</p>
          <ul>
            <li>Access to premium content</li>
            <li>High Definition (HD) streaming</li>
            <li>2 devices at a time</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="plan">
          <h2>Ultra Plan</h2>
          <p>Rs.799/month</p>
          <ul>
            <li>Access to ultra content</li>
            <li>4K Ultra High Definition (UHD) streaming</li>
            <li>4 devices at a time</li>
          </ul>
          <button>Select Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
