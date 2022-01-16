import * as React from "react";

import FullCTA from "../components/CTAs/FullCTA";
import ImgCTA from "../components/CTAs/ImgCTA";
import Hero from "../components/Hero";

import "../index.scss";
import Layout from '../layout/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <>
        <Hero 
          imgName="humber-river"
          title="Connecting People Globally"
          subTitle="We're helping families thrive across the world with our customized, affordable legal services."
        />
        <FullCTA 
          title="Making the immigration process easier. So you can focus on life."
          buttons
          primaryBtn="Why Golden Maple?"
          secondaryBtn="Our Story"
        />
        <ImgCTA
          imgName="office-laptop"
          title="Our Services"
          subTitle="Domain expertise and empathy is what drives our clients’ success. Caravan Law is committed to listening to each unique case and situation to meet the changing needs of business, commuties, and families."
          primaryBtn="Services"
        />
      </>
    </Layout>
  )
}

export default IndexPage
