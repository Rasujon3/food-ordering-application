import React from "react";
import MultiplePizzas from "../../assets/masala.jpg";
import "../../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          I am Ruhul Amin Sujon . My home district is Gaibandha. I graduated
          with B.Sc in CSE from Sonargaon University, Dhaka. My CGPA is 3.6 out
          of 4. I achieved some professional courses from bohubrihi &
          programming hero. Coming to my family we are now 4 members: Including
          me. My father was a police officer. my mother is a housewife. I have
          an elder brother, he recently join NRBC bank as an accounts officer.
          and I have also a younger sister & she studying at degree final year.
          My hobby is traveling. My strength is a positive attitude, quick
          learning, confidence. My weakness is my sweetness family. I have done
          some projects like portfolio and e-commerce projects and I still
          learning. Thank you.
        </p>
      </div>
    </div>
  );
}

export default About;
