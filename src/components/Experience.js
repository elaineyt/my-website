import React from 'react';
import ExperienceDetails from './ExperienceDetails';
import './Experience.css';
import usc from '../media/usc.jpeg'
import fb from '../media/fb.jpeg'
import cais from '../media/cais.jpeg'
import msft from '../media/msft.jpeg'
import azure from '../media/azure.jpeg'
import csusc from '../media/csusc.jpeg'
import cb from '../media/cb.jpeg'

function Experience() {
  return (
    <div className='experienceSection'>
      <h1 className="experienceSectionTitle">——— MY TIMELINE ———</h1>
      <ExperienceDetails
        src={usc}
        institution="University of Southern California"
        role="UNDERGRADUATE STUDENT"
        location="Los Angeles, CA"
        dates="Aug 2018 - May 2022"
        details="I am currently an undergrad in the Viterbi School of Engineering majoring in Computer Science! 
        I came to USC on a full-tuition scholarship and have since participated in research as a Viterbi Undergraduate 
        Research Fellow, joined clubs such as Scope and Women in Computing, and worked as a teaching assistant, while
        maintaining a 3.94 GPA and 4.0 major. Next semester, I hope to study abroad in Singapore!"
      />
      <ExperienceDetails
        src={fb}
        institution="Facebook, Inc."
        role="SOFTWARE ENGINEER INTERN"
        location="Menlo Park, CA"
        dates="May 2021 - Aug 2021"
        details="I worked on the Metrics Platform team as a full stack developer on the Metric Catalog tool, 
        an internal platform for product teams across Facebook to manage their external-facing metrics. 
        During this internship, I developed skills in Hack, GraphQL, and ReactJS"
      />
      <ExperienceDetails
        src={cais}
        institution="USC Center for Artificial Intelligence in Society"
        role="RESEARCH ASSISTANT"
        location="Los Angeles, CA"
        dates="Jan 2021 - May 2021"
        details="This was my first experience in research. I worked alongside PhD students on a disaster 
        preparedness planning project to optimize where to upgrade road infrastructure in the US based 
        on total flooded road distances and connectivity lost between different geospatial units. My 
        team also analyzed the relationship between flood mobility impacts and socioeconomic metrics 
        to investigate if road upgrades are distributed equitably."
      />
      <ExperienceDetails
        src={cb}
        institution="Coinbase, Inc."
        role="SOFTWARE ENGINEER INTERN"
        location="San Francisco, CA"
        dates="Jan 2021 - Mar 2021"
        details="I interned on the Coinbase Analytics Blockchain Research team. During the internship, 
        I built an anomaly detecing alerting system for crypto exchange balances and collaborated with 
        blockchain researchers to develop heuristics for understanding on/off chain activities."
      />
      <ExperienceDetails
        src={csusc}
        institution="USC Computer Science Department"
        role="TEACHING ASSISTANT"
        location="Los Angeles, CA"
        dates="Sept 2019 - Nov 2020"
        details="For three semesters I worked as a Teaching Assistant for USC's Discrete Methods in Computer
        Science course (CS170). I led discussion sections and held office hours to assist students with the
        course material, consisting of runtime analysis, propositional logic, discrete probability, and 
        graph algorithms."
      />
      <ExperienceDetails
        src={azure}
        institution="Microsoft Corporation"
        role="SOFTWARE ENGINEER INTERN"
        location="Redmond, WA"
        dates="May 2020 - Aug 2020"
        details="This was my second summer with Microsoft, this time on the Azure IoT team. I collaborated 
        with data egress architects to design and document new tabular transformer feature that allows 
        users to export IoT data to various tabular destinations and customize the schema of their export.
        I also implemented this and integrated the service with PowerBI. This project allowed me to better
        my Golang skills."
      />
      <ExperienceDetails
        src={msft}
        institution="Microsoft Corporation"
        role="EXPLORE INTERN"
        location="Redmond, WA"
        dates="May 2019 - Aug 2019"
        details="The Explore Internship program is a 12-week rotational program for freshmen and sophomores
        looking to explore both SWE and PM roles. During the program, I designed and built a Universal Windows 
        Platform application that updates users’ backgrounds to images provided by public figures they follow, 
        contributing to initiative to engage younger Windows users. I worked through the Microsoft Garage
        incubator to write contracts with public figures and ship the product."
      />
    </div>
  )
}

export default Experience