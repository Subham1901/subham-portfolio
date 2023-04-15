import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/catamaran";
import react from "../assets/react.webp";
import node from "../assets/nodejs.webp";
import mongo from "../assets/mongo.webp";
import api from "../assets/api.webp";
import git from "../assets/git.webp";
import express from "../assets/express.webp";
import redux from "../assets/redux.webp";
import java from "../assets/java.webp";
import chakra from "../assets/chakra.webp";
import html from "../assets/html.webp";
import js from "../assets/Javascript.webp";
import css from "../assets/css.webp";
import sql from "../assets/mysql.webp";
import firebase from "../assets/firebase.webp";
import movie from "../assets/movieworld.webp";
import blog from "../assets/blog.webp";
import coin from "../assets/Coin.webp";
import news from "../assets/news.webp";
import memories from "../assets/memories.png";
import share from "../assets/share.png";
import food from "../assets/food247.webp";
export const theme = extendTheme({
  fonts: {
    font: `'montserrat'`,
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
    description: `A web-based application that allows users to create, update
                  and delete operations and authentications with google OAuth.`,
    image: memories,
    live: "https://memories-6cpv.onrender.com/",
    tech: [react, node, express, redux, mongo, chakra],
    repo: "https://github.com/Subham1901/memories_app_frontend",
  },
  {
    name: "Movies World",
    description: `Movie application where users can search any movie and see the
                  details of the particular movie that was being searched.`,
    image: movie,
    live: "https://movie-application-z1lw.onrender.com/",
    tech: [react, chakra],
    repo: "https://github.com/Subham1901/Movie-Application",
  },
  {
    name: "Blog Application",
    description: `A web app where users can add famous places, and the user can
                  see places that other users have added. The user has the
                  ability to edit, delete, and upload the place if they have
                  logged into the application.`,
    image: blog,
    live: "https://blogappv1.netlify.app/",
    repo: "https://github.com/Subham1901/Blog-Application",
    tech: [react, node, mongo, express, chakra],
  },
  {
    name: "Crypto Stack",
    description: `Crypto application, where users can see the number of
                  cryptocurrencies (ex: Bitcoin, Ethereum, Dogecoin, etc.).
                  Also, the user can see the market data based on the currency
                  selected by the user.`,
    image: coin,
    live: "https://cryptoapplication.onrender.com/",
    tech: [react, chakra],
    repo: "https://github.com/Subham1901/CryptoApplication",
  },
];

export const emailService = "service_j3qbits";
export const emailKey = "LDBnLdh1iNHzPhEX-";
export const emailTemp = "template_m3axiew";
