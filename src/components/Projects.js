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
                NoteTaker
              </h1>
              <p className="leading-relaxed mb-3">
                A web application, where the user get the data from databse and
                perfrom different operations like add, delete, update using
                different HTTP methods such are POST, DELETE, & PUT.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center"
                href="https://github.com/Subham1901/Note-Taker-WebApp"
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
                CRUD Project
              </h1>
              <p className="leading-relaxed mb-3">
                A web application where user can manage the data inside
                database. Framework used: Hibernate
              </p>
              <a
                className="text-indigo-500 inline-flex items-center"
                href="https://github.com/Subham1901/CRUD-Project"
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
                Web UI
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                News Application
              </h1>
              <p className="leading-relaxed mb-3">
                A web application, provides 7+ different category news from real
                time update API. Frameworks used: Reactjs and MaterialUI5
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
