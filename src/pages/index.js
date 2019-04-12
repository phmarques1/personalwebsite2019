import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import Work from "../components/Work";
import Article from "../components/Article";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Work"
      keywords={[`product designer`, `design`, `entrepreneur`]}
    />
    <Header menuLinkFirst="menuLink" menuLinkSecond="menuLink--Unselected" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          I am a product designer taking complex technology and making it
          simple. For humans.
        </h1>
      </div>
    </div>
    <div className="work">
      <div className="workItem">
        <Work
          wrapperStyle="darkerBlue"
          tagStyle="tagDarkerBlue"
          workTitleStyle="workTitle--CoderHub"
          workDescriptionStyle="workDescription--CoderHub"
          workTag="Side Project"
          workTitle="CoderHub"
          workDescription="All-in-one personal website builder for developers."
          workLinkDetails="Visit Website"
          workLinkStyle="link--CoderHub"
          workLinkURL="https://coderhub.io/"
          workImage={require("../images/coderhub.png")}
          workImageComponent="img--Personio"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="lightPink"
          tagStyle="tagLightPink"
          workTitleStyle="workTitle--Search"
          workDescriptionStyle="workDescription--Search"
          workTag="Personio"
          workTitle="Personio's Global Search Redesign"
          workDescription="A winning company-wide Hackathon project."
          workLinkDetails="See on Dribbble"
          workLinkStyle="link--Search"
          workLinkURL="https://dribbble.com/shots/6037298-Personio-s-new-search"
          workImage={require("../images/personio-search.png")}
          workImageComponent="img--Personio"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="blue"
          tagStyle="tagBlue"
          workTitleStyle="workTitle--Personio"
          workDescriptionStyle="workDescription--Personio"
          workTag="Personio"
          workTitle="Personio Payroll"
          workDescription="Efficient payroll accounting"
          workLinkDetails="See on Dribbble"
          workLinkStyle="link--Personio"
          workLinkURL="https://dribbble.com/shots/5734215-Personio-s-Payroll-Redesign"
          workImage={require("../images/payroll.png")}
          workImageComponent="img--Personio"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="pink"
          tagStyle="tagPink"
          workTitleStyle="workTitle--Fastgrep"
          workDescriptionStyle="workDescription--Fastgrep"
          workTag="Side Project"
          workTitle="Fastgrep"
          workDescription="Find and organize your Slack team's links and files."
          workLinkDetails="Visit Website"
          workLinkStyle="link--Fastgrep"
          workLinkURL="https://www.fastgrepbot.com/"
          workImage={require("../images/fastgrep.png")}
          workImageComponent="img--Fastgrep"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="green"
          tagStyle="tagGreen"
          workTitleStyle="workTitle--TheGuardian"
          workDescriptionStyle="workDescription--TheGuardian"
          workTag="Master's Project"
          workTitle="The Guardian For You"
          workDescription="The news when you need it."
          workLinkDetails="Read Case Study"
          workLinkStyle="link--TheGuardian"
          workLinkURL="https://uxdesign.cc/designing-a-new-mobile-experience-for-the-guardian-bea90f38e59e"
          workImage={require("../images/theguardian.png")}
          workImageComponent="img--TheGuardian"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="purple"
          tagStyle="tagPurple"
          workTitleStyle="workTitle--Duomov"
          workDescriptionStyle="workDescription--Duomov"
          workTag="Bitdreams"
          workTitle="Duomov"
          workDescription="Make split-screen, synchronized videos with nearby friends. No internet required."
          workLinkDetails="Read on The Next Web"
          workLinkStyle="link--Duomov"
          workLinkURL="https://thenextweb.com/apps/2017/06/12/duomov-split-screen-video-app-summer-bromance/"
          workImage={require("../images/duomov.png")}
          workImageComponent="img--Duomov"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="orange"
          tagStyle="tagOrange"
          workTitleStyle="workTitle--StoryMix"
          workDescriptionStyle="workDescription--StoryMix"
          workTag="Bitdreams"
          workTitle="StoryMix"
          workDescription="Storytelling for the Instagram generation (Concept)."
          workLinkDetails="See on Dribbble"
          workLinkStyle="link--StoryMix"
          workLinkURL="https://dribbble.com/shots/5708074-Storymix-App"
          workImage={require("../images/storymix.png")}
          workImageComponent="img--Storymix"
        />
      </div>
      <div className="workItem">
        <Work
          wrapperStyle="darkBlue"
          tagStyle="tagDarkBlue"
          workTitleStyle="workTitle--Bitdreams"
          workDescriptionStyle="workDescription--Bitdreams"
          workTag="Bitdreams"
          workTitle="Bitdreams"
          workDescription="Bitdreams is a design and development studio I co-founded in 2017."
          workLinkDetails="Visit Website"
          workLinkStyle="link--Bitdreams"
          workLinkURL="https://bitdreams.co/"
          workImage={require("../images/bitdreams.png")}
          workImageComponent="img--Bitdreams"
        />
      </div>
    </div>
    <div className="myDribbble">
      <a
        href="https://www.dribbble.com/marques_ph"
        className="otherLink"
        target="_blank"
      >
        See more on my Dribbble profile
      </a>
    </div>
    <div className="Articles">
      <h2>Recent articles</h2>
      <div className="Articles--Wrapper">
        <div className="article--Container">
          <a
            href="https://www.medium.com/designing-a-design-team"
            target="_blank"
          >
            <Article
              articleImg={require("../images/designing-a-design-team.png")}
              articleTitle="Designing a design team"
              articleDescription="A study on building and scaling design teams in fast-growing companies."
            />
          </a>
        </div>
        <div className="article--Container">
          <a
            href="https://uxdesign.cc/design-thinking-creating-value-through-problem-solving-2e8306d929e2"
            target="_blank"
          >
            <Article
              articleImg={require("../images/designthinking.png")}
              articleTitle="Design Thinking: creating value through problem-solving."
              articleDescription="A study on building and scaling design teams in fast-growing companies."
            />
          </a>
        </div>
        <div className="article--Container">
          <a
            href="https://uxdesign.cc/how-to-properly-frame-your-design-challenge-eccb4d89cb83"
            target="_blank"
          >
            <Article
              articleImg={require("../images/designchallenge.png")}
              articleTitle="How to properly frame your design challenge"
              articleDescription="A study on building and scaling design teams in fast-growing companies."
            />
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
