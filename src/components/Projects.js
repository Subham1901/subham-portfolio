import React from "react";
export default function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Web Developement
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Blog APplication
              </h1>
              <p className="leading-relaxed mb-3">
                A web app where users can add famous places, and the user can
                see places that other users have added. The user has the ability
                to edit, delete, and upload the place if they have logged into
                the application. Back-end APIs are hosted on the Heroku
                platform, whereas the interface is hosted on Firebase.
                <p>
                  Tech Stack : ReactJs, NodeJs, ExpressJs, MongoDB, Git,
                  JSONWebTokens, HTTP, Chakra UI
                </p>
              </p>
              <a
                className="text-indigo-500 inline-flex items-center"
                href="https://blogapp-27364.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Web Developement
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                User Management Application
              </h1>
              <p className="leading-relaxed mb-3">
                A web application with an administration dashboard that allows
                the administrator to perform CRUD operations and display the
                graph that shows active users according to the date.
                <p>
                  Tech Stack : ReactJs, NodeJs, ExpressJs, MySQL, Git, Bootstrap
                </p>
              </p>
              <a
                className="text-indigo-500 inline-flex items-center"
                href="https://github.com/Subham1901/user_management_nodejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Web Developement
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                News Application
              </h1>
              <p className="leading-relaxed mb-3">
                Web application provides news from an online API that provides
                seven or more different categories of news.
                <p>Tech Stack : ReactJs, MaterialUI, Git</p>
              </p>
              <a
                className="text-indigo-500 inline-flex items-center"
                href="https://github.com/Subham1901/News-Website---ReactJs--MaterialUI5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
