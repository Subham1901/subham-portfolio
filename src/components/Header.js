import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../index.css";
export default function header() {
  return (
    <div className="header">
      <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible={true}>
        <section className="dark:bg-grey-900 text-black-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      class="inline-block h-20 w-15 rounded"
                      src="subham.png"
                      alt="subhampic"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Subham Panda
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">Associate Software Engineer</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-md mb-4">
                    Hey 👋, I'm Subham Prasad Panda. I am currently residing in
                    Hyderabad, India. graduated from GIET University. My majors
                    are electronics and computer science. So far, I have worked
                    with Node.js, Express.js, React.js, MongoDB, MySQL, Java,
                    and other technologies I am skilled in the use of these
                    technologies and have worked with different NPM modules to
                    build web applications based on single-page application
                    (SPA) architectures. Apart from these technologies, I have
                    also worked on various projects involving SAP ABAP, Report &
                    Dialogue Program, Modularization, Enhancement, BAdI, ALVs,
                    function modules, and so on. I love the logic and structure
                    of coding and strive to write elegant, efficient code.
                  </p>
                  <a
                    className="text-indigo-500 font-bold inline-flex items-center"
                    download="Subham Panda Resume"
                    href="Subham_Resume.pdf"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
    </div>
  );
}
