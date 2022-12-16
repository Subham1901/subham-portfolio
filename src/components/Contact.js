import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  var templateParams = {
    name: name,
    email: email,
    message: message,
  };

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !message) {
      setLoading(false);
      return toast.error("Invalid Data", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
    }
    if (!validator.isEmail(email)) {
      setLoading(false);
      return toast.error("Invalid Email", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
    }

    emailjs
      .send(
        "service_j3qbits",
        "template_m3axiew",
        templateParams,
        "LDBnLdh1iNHzPhEX-"
      )
      .then(
        (response) => {
          if (response.status == "200") {
            setLoading(false);
            toast.success("Message sent successfully!", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              theme: "colored",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        },
        (error) => {
          setLoading(false);
          toast.warning("Server issue, please try later!", {
            theme: "colored",
          });
        }
      );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Let's have a talk!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free to connect with me for any web development related
            services.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  onChange={(e) => setEMail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={(e) => sendMail(e)}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
