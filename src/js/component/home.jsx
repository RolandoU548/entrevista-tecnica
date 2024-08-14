import React from "react";
import { Card } from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="title w-1-3">Choose your career path</h1>
        <div className="cards">
          <Card
            title="Full Stack Development"
            paragraph="Become a Full Stack Developer with our self-paced bootcamp! Start
        learning from scratch and get ready to enter the tech industry!"
            salary="$55K"
            jobs="350.000"
            career="45% in the last year"
          />
          <Card
            title="Data Science"
            paragraph="Join our Data Science and Machine Learning bootcamp and learn at your own pace and schedule! Go by yourself through a structured syllabus, and get instant help from expert mentors and AI when needed! Start learning from scratch and get prepared for your first job as a Data Scientist!"
            salary="$75K"
            jobs="500.000"
            career="75% in the last year"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
