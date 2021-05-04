import Container from "../components/container";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { responsiveTitle1 } from "../components/typography.module.css";

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <Container>
      <h1 className={responsiveTitle1}>Hi, I'm Jenny Ryden</h1>
      <p>I help service professionals get the website they need to build the business of their dreams.</p>
    </Container>
  </Layout>
);

export default AboutPage;
