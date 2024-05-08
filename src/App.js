import React, { useState, useEffect } from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Services from "./pages/our_service/Services";
import Video from "./pages/video_section/Video";
import Mobile from "./pages/mobile_section/Contact";
import Footer from "./components/Footer/Footer";
// import Form from "./components/Form/Form";
// import VideoModal from "./components/video_modal/video_modal";
// import Why from "./pages/why/Why";
// import Case from "./pages/your_case/Case";
// import Testimonials from "./pages/testimonials/Testimonials";
// // import Header from "./components/header/header";
// import Faqs from "./pages/Faqs/Faqs";
//
// import Footer from "./components/Footer/Footer";
// import BackToTop from "./components/back_to_top/backToTop";

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Video />
      <Mobile />
      <Footer />
      {/* <Form /> */}
      {/* <VideoModal /> */}
      {/*<Trust />
     
      <Why />
      <Case />
      <Testimonials />
      <Faqs />
    
  
      <BackToTop /> */}
    </>
  );
};

export default App;

// #1076BC
// #6E6F72

// #2676BB
