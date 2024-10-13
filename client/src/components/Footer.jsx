import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-48 bg-[#262626] border-t-4 border-[#9381ff] text-center gap-3">
        <div className="w-full flex justify-evenly text-2xl pt-4">
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </a>
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-discord" />
          </a>
          <a className="text-gray-400 hover:text-white transition duration-500">
            <FontAwesomeIcon icon="fa-brands fa-twitch" />
          </a>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          <Link className="text-gray-400 hover:text-white transition duration-500">About Us</Link>
          <Link className="text-gray-400 transition hover:text-white transition duration-500">Privacy Policy</Link>
          <Link className="text-gray-400 hover:text-white transition duration-500">Terms and Conditions</Link>
          <Link className="text-gray-400 hover:text-white transition duration-500">Contact Us</Link>
          <Link className="text-gray-400 hover:text-white transition duration-500">Suggestions and Feedback</Link>
        </div>
        <div className="w-full">
          <div className="text-gray-300">
          Subcribe to get an upcoming updates!
          </div>
          <form>
            <input className="h-[45px] pl-3 pr-3 box-border" placeholder="Enter Email..." />
            <button className="bg-orange-500 rounded-l-none">
              <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
        <div className="w-full pb-4">
          © 2024 FrenzyFantasia - All Rights Reserved.
        </div>
      </div>
    </React.Fragment>
  )
}