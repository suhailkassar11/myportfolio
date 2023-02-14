import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="bg-gradient-to-b from-black to bg-gray-800 text-white h-full w-full ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Contact
          </p>
          <p className="py-6">submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center item-center">
          <form action="https://getform.io/f/b9740b77-9db6-48cd-9504-67d019c2e25b" method="Post" className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              type="text"
              name="message"
              rows="10"
              placeholder="leave your message here"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-300 my-11 mx-auto item-center py-1 rounded-2xl text-2xl px-3 hover:scale-105 duration-300">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
