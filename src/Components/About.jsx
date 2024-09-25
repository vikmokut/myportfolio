/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/banner.jpg";

const imageAltText = "cybersecurity themed image splattered with tools and security frameworks";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Cyber Security student and aspiring analyst studying at MIVA Open University.\
   I enjoy keeping a keen eye and looking out for abnormalities through logic, creative and analytical thinking. I also love to learn.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "SIEM",
  "Wireshark/Tshark",
  "Burp Suite",
  "OWASP TOP 10",
  "Unified/Cyber Kill Chain",
  "MITRE",
  "OSINT",
  "OPENCI",
  "Network Security",
  "Logs and Ticketing Systems",
  "Linux CLI",
  "Python Programming",
  "Bash Scripting",
  "C/C++",
  "Git/Versioning",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my trainings, skills and experience in security and information systems,\
   I continually look for new and better ways to secure enterprise assets and protect organizations reputation, preventing financial losses.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
