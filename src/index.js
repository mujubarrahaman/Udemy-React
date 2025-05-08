import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Recommended from "./components/Recommended"
import Topic from "./components/Topic"
import MostPopular from "./components/Most-Popular"
import Footer from "./components/Footer"


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <Recommended></Recommended>
    <Topic></Topic>
    <MostPopular></MostPopular>
    <Footer></Footer>
  </div>
)