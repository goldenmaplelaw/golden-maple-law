import * as React from "react"; 

import Splash from "../components/misc/Splash";

import Layout from '../layout/Layout';

const Careers = () => {
    return (
      <Layout>
        <Splash
          title="No Current Openings"
          imgName="undraw_under_construction"
          buttons
          primaryBtn="Get Started"
          secondaryBtn="Book Meeting"
        />
      </Layout>
    )
}

export default Careers;