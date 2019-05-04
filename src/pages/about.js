import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import "../components/about.css";
import Footer from "../components/footer";

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Header menuLinkFirst="menuLink--Unselected" menuLinkSecond="menuLink" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Driven by curiosity.
          <br />
          Striving for excellence.
        </h1>
      </div>
    </div>
    <div className="aboutMeWrapper">
      <div classname="photoWrapper">
        <img
          src={require("../images/pedroMunich.png")}
          className="personalPhoto"
        />
      </div>
      <div className="copy">
        <h2 className="copyTitle">
          I’m Pedro Marques, a Brazilian product designer currently living in
          Munich and working at Sixt. Previously at Personio.
        </h2>
        <p className="copyDescription">
          People. Short word, big meaning. While technology has changed a lot,
          people haven’t. We — the people — remain curious, hungry for knowledge
          and, well, unpredictable. Put together, curiosity, hunger and
          unpredictability make the perfect storm for innovation.
          <br />
          <br /> In a world where technology is there to serve people, and not
          the other way around, I’m one of those optimists who think there’s no
          better time to be alive. Every day, new technology is created. Every
          day, a designer is tasked with taking such technology and making it
          usable by and understandable for humans.
          <br />
          <br />
          Furthermore, I consider designers to have an increasingly important
          role in shaping the future not only by making complex technologies
          simple, but also by holding one another accountable for our design
          decisions both from a moral and human perspective. As Mike Monteiro
          puts it, “asking ourselves why we are making something is an
          infinitely better question than asking ourselves whether we can make
          it.”
          <br />
          <br />
          Good design, therefore, cannot be only about beautiful pixels and
          smooth interactions. It’s about connecting with people and serving
          them with purposeful experiences. It’s about helping people do more
          with less. It’s about problem-solving. It’s about empathy, about
          understanding the people you’re designing for and going as far as
          feeling their pains, fears and frustrations as if they were your own.
          <br />
          <br />
          And, yeah, good design is also good business.
          <br />
          <br />
          As a designer, I strongly believe that human-centered design, more
          than a concept, is a creative process that puts people first. From my
          experience, designers who do so tend to have a fresh and more
          empathetic perspective on others’ needs and on the opportunities that
          arise from research and observation.
          <br />
          <br />
          On a more personal note, I like to think of myself as a self-initiated
          guy and lifelong learner. As an example, I’m a self-taught designer
          whose career started in 2012 when I built an app that would allow
          people to share geo-tagged (city-based) photos in real-time, so I
          could see the world through the eyes of others. In 2015, I’ve learned
          HTML and CSS. In 2018, I’ve completed my MA in Digital Experience
          Design at Hyper Island, which helped me better understand and
          structure my design process as well as develop soft-skills such as
          leadership and team building.
          <br />
          <br />
          I’m currently learning React and already looking forward to the next
          10 years.
          <br />
          <br />
          In my spare time I watch Netflix, hang out with friends for a beer (or
          two) and help my beautiful wife cook tasty meals.
        </p>
      </div>
      <div className="skillsWrapper">
        <h2>My skillset in a nutshell</h2>
        <div className="skillsContainer">
          <div className="skills">
            <div className="skill">
              <h3>Research</h3>
              <ul className="skill--Items">
                <li>Desk Research</li>
                <li>User Interviews</li>
                <li>Synthesis</li>
              </ul>
            </div>
            <div className="skill--Illustration">
              <img src={require("../images/research.svg")} />
            </div>
          </div>
          <div className="skills">
            <div className="skill">
              <h3>Concept</h3>
              <ul className="skill--Items">
                <li>Ideation</li>
                <li>New Products & Services</li>
                <li>Product (Design) Vision</li>
              </ul>
            </div>
            <div className="skill--Illustration">
              <img src={require("../images/concept.svg")} />
            </div>
          </div>
          <div className="skills">
            <div className="skill">
              <h3>Design</h3>
              <ul className="skill--Items">
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Interaction Design</li>
              </ul>
            </div>
            <div className="skill--Illustration">
              <img src={require("../images/design.svg")} />
            </div>
          </div>
          <div className="skills">
            <div className="skill">
              <h3>Code</h3>
              <ul className="skill--Items">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS/React (Basic)</li>
              </ul>
            </div>
            <div className="skill--Illustration">
              <img src={require("../images/code.svg")} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default SecondPage;
