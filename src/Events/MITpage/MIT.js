import Navbar from '../../Component/navbar.js';
import '../../App.css';


import React from "react";

const MIT = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-800">MitSna Interactive Talks</h1>
        <p className="text-gray-600 mt-2 text-sm max-w-4xl mx-auto">
          MitSna’s Interactive Talks is a regular talk series held in a smaller size at regular intervals to impart the knowledge of various career opportunities and application procedures for the different programs including but not limited to undergraduate and graduate schools, summer and winter schools, and internships to the student community of Manipur. The talk proceeds in more of an interactive session taking advantage of the small size and promoting the habit of addressing questions.
        </p>
      </div>

      {/* Speakers Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-gray-800">MIT-2024</h2>
        <p className="text-xl font-medium text-gray-600 mt-1">Our Speakers</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Speaker Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Belli Smith</h3>
            <p className="text-sm text-gray-600">Designer</p>
            <p className="text-sm text-gray-500 mt-2 italic">
              “Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.”
            </p>
          </div>

          {/* Speaker Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Sara Taylor</h3>
            <p className="text-sm text-gray-600">Donator</p>
            <p className="text-sm text-gray-500 mt-2 italic">
              “Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.”
            </p>
          </div>

          {/* Speaker Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Belli Smith</h3>
            <p className="text-sm text-gray-600">Designer</p>
            <p className="text-sm text-gray-500 mt-2 italic">
              “Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.”
            </p>
          </div>

          {/* Speaker Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800">Sara Taylor</h3>
            <p className="text-sm text-gray-600">Donator</p>
            <p className="text-sm text-gray-500 mt-2 italic">
              “Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted the readable content.”
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800">100+ Competitors</h3>
            <p className="text-sm text-gray-600 mt-2">
              More than 100 events were conducted to increase the participation of people.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">20+ Winners</h3>
            <p className="text-sm text-gray-600 mt-2">
              Almost more than 230 people have donated for this initiative and helped our organization.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">30+ Sponsors</h3>
            <p className="text-sm text-gray-600 mt-2">
              More than 300 people enthusiastically participated in this awareness program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIT;
