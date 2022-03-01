import * as React from "react"; 
import { Container } from "react-bootstrap";

import { TextBlock } from "../../components";

import Layout from '../../layout/Layout';

const ArtificialIntelIRCC = () => {
  return (
    <Layout>
      <>
        <Container className="article-wrapper">
          <h1>Artificial Intelligence in IRCC</h1>
          <TextBlock textString="It is admitted by IRCC that Artificial Intelligence is implemented for Temporary Resident Visas (‘TRVs’), specifically in China and India. By way of June 2020 disclosure, we confirm that IRCC has been utilizing these systems for online applications since April 2018 for China, August 2018 for India, and for Visa Application Centre (“VAC”) based applications since January 2020."/>
          <TextBlock textString="It has come to light that there are three Tier processing system in play. This filters the simplest applications (Tier 1), medium complexity applications (Tier 2), and higher complexity applications (Tier 3). While human officers are involved in all three Tiers, Tier 1 allows a model to recommend approval based on analytics, where as Tier 2 and Tier 3 are flagged for manual processing." />
          <TextBlock textString="IRCC claims that the process is only partially automated. The interesting factor, and given we have been as a law firm focusing a lot on India, is how the designated of a Tier 2 file drives the approval rates from the high nineties (%) to 63% for online India apps to 37%  for India VAC applications. Moving to Tier 3, it is only 13% for online India and 5% for India VAC." />
          <TextBlock textString="The deeming of a file Tier 3 appears to make refusal a near surety. What is fascinating is how this information blends usage of “Officer Rules,” the first stage filter which  actually precedes the computerized Three Tier triages and is targeted at cases with higher likelihood of ineligibility or inadmissibility.  The Officer Rules system would be the system utilized at other global visa offices that do not use the computerized AI decision-making of India and China." />
          <TextBlock textString="Looking specifically at the case of India, the Officer Rules system actually approves cases at a much higher rate (53% for online India, and 38% for India VAC).  These rates are in-fact comparable to Tier 2 moderately complex cases – ones that presumably do not contain the serious ineligibility and inadmissibility concerns of Officer Rules or Tier 3 . It suggests that the addition of technology can sway even a moderately complex case into the same outcomes as a hand-pulled out complex case.  Ultimately, this suggests that complete human discretion or time spent assessing factors can be much more favourable than when machines contribute to overall decision-making." />
        </Container>
      </>
    </Layout>
  )
}

export default ArtificialIntelIRCC;