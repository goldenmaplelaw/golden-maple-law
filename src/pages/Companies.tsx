import * as React from "react"; 

import Splash from "../components/misc/Splash";

import Layout from '../layout/Layout';

const Companies = () => {
    return (
      <Layout>
        <Splash
          title="Under Construction"
          imgName="undraw_under_construction"
          buttons
          primaryBtn="Get Started"
          secondaryBtn="Book Meeting"
        />
      </Layout>
    )
}

export default Companies;