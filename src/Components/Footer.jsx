import React from 'react';

const Footer = () => {
  return (
    <div className=" text-white py-8 mt-28">
      <div className=" mx-auto mb-8 text-center">
        <h3 className=" max-w-4xl mx-auto text-4xl font-semibold mb-4">
          Interested in delving deeper into the project?
        </h3>
        <p className="text-lg mb-4 mt-8 max-w-2xl mx-auto">
          If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <a href="mailto:hello@abc.com" >hello@abc.com</a> or give us a call at <a href="tel:+9148020802730" >+91 480 20802730</a>.
        </p>
        <div className="flex justify-center  max-w-4xl mx-auto mt-10">
          <button className="border border-white text-white px-10 py-2 mr-4 hover:bg-white hover:text-gray-800">
            Ring us on Skype
          </button>
          <button className="bg-white text-black px-16 py-2 hover:text-gray-800">
            Contact Us
          </button>
        </div>
      </div>

      <div className="text-center mt-40 ">
        <p className="text-sm text-gray-400 ">
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
