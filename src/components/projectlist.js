import React from "react";
import movie from "./assets/movieworld.png";
import blog from "./assets/blogapp.png";
import coin from "./assets/Coin.png";
import news from "./assets/news.png";
import memories from "./assets/memories.png";
import share from "./assets/easyshare.png";
export const ProjectList = [
  {
    name: "Easy Share",
    description: `A online application that can generate a link to download any
                  file uploaded up to 1000MB in size also has the ability to
                  distribute the file via email by providing the recipient and
                  sender email addresses.`,
    image: share,
    live: "https://sharefilev1.netlify.app/",
    tech: [
      "Node.js",
      "React.js",
      "Redux",
      "Redux Thunk",
      "MongoDB",
      "Chakra UI",
    ],
  },
  {
    name: "Memories",
    description: `A web-based application that allows users to create, update
                  and delete operations and authentications with google OAuth.`,
    image: memories,
    live: "https://memories-6cpv.onrender.com/",
    tech: [
      "Node.js",
      "React.js",
      "Redux",
      "Redux Thunk",
      "MongoDB",
      "Rest API",
      "Google OAuth",
      "Chakra UI",
    ],
  },
  {
    name: "Movies World",
    description: `Movie application where users can search any movie and see the
                  details of the particular movie that was being searched.`,
    image: movie,
    live: "https://movie-application-z1lw.onrender.com/",
    tech: ["React.js", "Chakra UI", "IMDb API"],
  },
  {
    name: "Blog Application",
    description: `A web app where users can add famous places, and the user can
                  see places that other users have added. The user has the
                  ability to edit, delete, and upload the place if they have
                  logged into the application.`,
    image: blog,
    live: "https://blogappv1.netlify.app/",
    tech: ["Node.js", "React.js", "MongoDB", "Rest API", "Chakra UI"],
  },
  {
    name: "Crypto Stack",
    description: `Crypto application, where users can see the number of
                  cryptocurrencies (ex: Bitcoin, Ethereum, Dogecoin, etc.).
                  Also, the user can see the market data based on the currency
                  selected by the user.`,
    image: coin,
    live: "https://cryptoapplication.onrender.com/",
    tech: ["React.js", "Chakra UI", "Axios"],
  },

  {
    name: "Daily News",
    description: `Web application provides news from an online API that provides
                  seven or more different categories of news.`,
    image: news,
    live: "https://github.com/Subham1901/News-Website---ReactJs--MaterialUI5",
    tech: ["React.js", "Material UI", "Axios"],
  },
];
