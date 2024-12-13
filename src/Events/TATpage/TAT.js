import Navbar from '../../Component/navbar.js';
import '../../App.css';
import React from "react";



export default function TAT(){
    return(
        <>
            <Navbar></Navbar>
            <div className="bg-gray-100 p-6">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-800">Teach A Topic [TAT]</h1>
        <p className="text-gray-600 mt-2 text-sm max-w-4xl mx-auto">
          TAT is an online competition where participants submit a 7-8 minutes educational video explaining any topic.
        </p>
      </div>

      {/* Main Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-gray-800">Teach A Topic - 2023</h2>
        <p className="text-xl font-medium text-gray-600 mt-1">Engage Envision Enlighten</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Placeholder Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
          </div>

          {/* Placeholder Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
          </div>

          {/* Placeholder Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
          </div>

          {/* Placeholder Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
          </div>

          {/* Placeholder Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
          </div>

          {/* Placeholder Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-gray-500 italic">[Content Placeholder]</p>
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
        </>
    );
}