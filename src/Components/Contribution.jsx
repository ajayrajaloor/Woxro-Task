import React from 'react';

const Contribution = () => {
  return (
    <div className="max-w-4xl mx-auto mt-36">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">Our Contribution</h2>
        <p className="text-lg mt-4">
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-5xl font-semibold">5M</h3>
          <p className="text-lg mt-2">
            Daily User Engagements
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-semibold">$500K</h3>
          <p className="text-lg  mt-2">
            Revenue Surge for an Platform
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-semibold">10X</h3>
          <p className="text-lg mt-2">
            ROAS on all our marketing campaigns
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
