import React from "react";
import movie from "./movieworld.png";
import blog from "./blogapp.png";
import coin from "./Coin.png";
import news from "./news.png";
import memories from "./assets/memories.png";
import { HStack, Tag } from "@chakra-ui/react";

function Content() {
  return (
    <div className="content">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl text-center  font-medium title-font mb-10 text-gray-900">
            My Projects
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4 ">
              <div class="bg-gray-100 p-6 rounded-lg h-[30rem]">
                <a
                  href="https://memories-webv1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={memories}
                    alt="news"
                  />
                </a>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Memories
                </h2>
                <p class="leading-relaxed text-base">
                  A web-based application that allows users to create, update
                  and delete operations and authentications with google OAuth.
                </p>
                <HStack
                  display={"flex"}
                  justifyContent="flex-start"
                  mt={2}
                  flexWrap="wrap"
                >
                  <Tag m={1} color={"white"} bgColor={"linkedin.600"}>
                    Node.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    React.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    MongoDB
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Redux
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Mongoose
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Google OAuth
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    REST API
                  </Tag>
                </HStack>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 ">
              <div class="bg-gray-100 p-6 rounded-lg h-[30rem] ">
                <a
                  href="https://movie-application-z1lw.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={movie}
                    alt="movie"
                  />
                </a>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Movies World
                </h2>
                <p class="leading-relaxed text-base">
                  Movie application where users can search any movie and see the
                  details of the particular movie that was being searched.
                </p>
                <HStack
                  display={"flex"}
                  justifyContent="flex-start"
                  mt={2}
                  flexWrap="wrap"
                >
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    React.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Chakra UI
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    IMDb API
                  </Tag>
                </HStack>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg h-[30rem]">
                <a
                  href="https://blogapp-27364.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={blog}
                    alt="blog"
                  />
                </a>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Blog Application
                </h2>
                <p class="leading-relaxed text-base">
                  A web app where users can add famous places, and the user can
                  see places that other users have added. The user has the
                  ability to edit, delete, and upload the place if they have
                  logged into the application.
                </p>
                <HStack
                  display={"flex"}
                  justifyContent="flex-start"
                  mt={2}
                  flexWrap="wrap"
                >
                  <Tag m={1} color={"white"} bgColor={"linkedin.600"}>
                    Node.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    React.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    MongoDB
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Axios
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Mongoose
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    REST API
                  </Tag>
                </HStack>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg  h-[30rem]">
                <a
                  href="https://cryptoapplication.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={coin}
                    alt="coin"
                  />
                </a>

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Crypto Stack
                </h2>
                <p class="leading-relaxed text-base">
                  Crypto application, where users can see the number of
                  cryptocurrencies (ex: Bitcoin, Ethereum, Dogecoin, etc.).
                  Also, the user can see the market data based on the currency
                  selected by the user.
                </p>
                <HStack
                  display={"flex"}
                  justifyContent="flex-start"
                  mt={2}
                  flexWrap="wrap"
                >
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    React.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Axios
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Chakra UI
                  </Tag>
                </HStack>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 ">
              <div class="bg-gray-100 p-6 rounded-lg h-[30rem]">
                <a
                  href="https://github.com/Subham1901/News-Website---ReactJs--MaterialUI5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={news}
                    alt="news"
                  />
                </a>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  News Application
                </h2>
                <p class="leading-relaxed text-base">
                  Web application provides news from an online API that provides
                  seven or more different categories of news.
                </p>
                <HStack
                  display={"flex"}
                  justifyContent="flex-start"
                  mt={2}
                  flexWrap="wrap"
                >
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    React.js
                  </Tag>{" "}
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Axios
                  </Tag>
                  <Tag color={"white"} bgColor={"linkedin.600"}>
                    Material UI
                  </Tag>
                </HStack>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
