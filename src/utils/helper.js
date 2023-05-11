import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/catamaran";
import react from "../assets/react.webp";
import node from "../assets/nodejs.webp";
import mongo from "../assets/mongo.webp";
import express from "../assets/express.webp";
import redux from "../assets/redux.webp";
import chakra from "../assets/chakra.webp";
import movie from "../assets/movie.webp";
import blog from "../assets/blog.webp";
import coin from "../assets/Coin.webp";
import memories from "../assets/memories.png";
import share from "../assets/share.png";
import food from "../assets/food247.webp";
export const theme = extendTheme({
  fonts: {
    font: `'montserrat', sans-serif`,
  },
  colors: {
    brand: {
      primary: "#161b40",
      // ...
      secondary: "#43bee5",
      outline: "#ADE8F4",
      red: "#f40058",
      ylw: "#efa500",
      skill: "#f8f9fa",
      card: "#e9f1f7",
    },
  },
});

export const ProjectList = [
  {
    name: "Food247",
    description: `An online food application, where users can browse any restaurant and add items to their cart.`,
    image: food,
    live: "https://247food.netlify.app/",
    tech: [react, node, express, redux, mongo, chakra],
    repo: "https://github.com/Subham1901/namaste_react_code/tree/master/Chapter-4%20coding",
  },

  {
    name: "Easy Share",
    description: `A online application that can generate a link to download any
                  file uploaded up to 1000MB in size also has the ability to
                  distribute the file via email by providing the recipient and
                  sender email addresses.`,
    image: share,
    live: "https://sharefilev1.netlify.app/",
    tech: [react, node, express, redux, mongo, chakra],
    repo: "https://github.com/Subham1901/Easy-File-Sharing",
  },
  {
    name: "Memories",
    description: `A web-based application that allows you to create, update
                  and delete operations and authentications with google OAuth.`,
    image: memories,
    live: "https://memories-6cpv.onrender.com/",
    tech: [react, node, express, redux, mongo, chakra],
    repo: "https://github.com/Subham1901/memories_app_frontend",
  },
  {
    name: "Filmy",
    description: `Filmy is an online movie list application that shows several categories, such as top-rated, trending, and recommended movies. Additionally, it has an inbuilt search engine where you can type any type of movie name to receive additional details.`,
    image: movie,
    live: "https://movie-application-s6ln.onrender.com",
    tech: [react, chakra],
    repo: "https://github.com/Subham1901/Movie-Application",
  },
  {
    name: "Blog Application",
    description: `an online application where you may add popular places and view places that other users have added. The places can be updated, deleted, and uploaded if you are logged into the application.`,
    image: blog,
    live: "https://blogappv1.netlify.app/",
    repo: "https://github.com/Subham1901/Blog-Application",
    tech: [react, node, mongo, express, chakra],
  },
  {
    name: "Crypto Stack",
    description: `a crypto application where you can view various cryptocurrencies (such as Bitcoin, Ethereum, Dogecoin, etc.).
You can also browse market information based on a particular currency.`,
    image: coin,
    live: "https://cryptoapplication.onrender.com/",
    tech: [react, chakra],
    repo: "https://github.com/Subham1901/CryptoApplication",
  },
];

export const emailService = "service_j3qbits";
export const emailKey = "LDBnLdh1iNHzPhEX-";
export const emailTemp = "template_m3axiew";
