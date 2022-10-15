import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function header() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn" initiallyVisible={true}>
      <section className=" bg-white dark:bg-grey-900 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full"></img>
        </div> */}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    class="inline-block h-20 w-15 rounded "
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
                  Hey 👋, I'm Subham Prasad Panda.Currently living in
                  Odisha,India. Graduated from GIET University. My majors are
                  Computer Science and Electronics. So far i have learned
                  different technologies like Java, cpp, MySQL, Servlet, JSP,
                  Hibernate Framework, Bootstrap, ReactJs, NodeJs, ExpressJs,
                  MaterialUI. I am skilled in the use of these frameworks to
                  develop web Apps based on Single Page Applications (SPA)
                  architectures. Apart from these frameworks i have also skilled
                  on SAP ABAP, i have worked on different projects related to
                  Report & Dialogue Program, Modularization, Enhancement, BAdI,
                  ALVs, Function Module etc.. .I love the logic and structure of
                  coding and always strive to write elegant and efficient code.
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center"
                  download="Subham Panda Resume"
                  href="Resume-2022-Q3.pdf"
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
  );
}
