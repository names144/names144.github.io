export interface EmploymentHistory {
  startYear: string;
  endYear: string;
  title: string;
  company: string;
  city: string;
  state: string;
  description: string;
  accomplishments: string[];
}

export const EMPLOYMENT: EmploymentHistory[] = [
  {
    startYear: "2023",
    endYear: "Present",
    title: "Staff Software Engineer",
    company: "Q Bio",
    city: "Remote",
    state: "United States",
    description: "",
    accomplishments: [],
  },
  {
    startYear: "2021",
    endYear: "2023",
    title: "Principal Software Engineer / Team Lead",
    company: "Sequel",
    city: "Remote",
    state: "United States",
    description:
      "Developing and enhancing web applications for virtual and hybrid events.",
    accomplishments: [
      "Led a team of 2+ engineers to redesign the Sequel administration dashboard, decreasing app load times and improving overall usability through the use of React and NextJS.",
      "Built a real-time web conferencing component in React, allowing for live streaming to thousands of users, sharing videos, screen sharing, and the ability to manage participants within the conference.",
      "Performed hiring interviews and collaborated with other engineers to establish a structured interview process.",
      "Led initiatives to bring test coverage up to 90%, establish CI building and testing, implement coding standards, and institute standard pull-request review processes.",
    ],
  },
  {
    startYear: "2018",
    endYear: "2021",
    title: "Software Development Engineer",
    company: "JetClosing",
    city: "Seattle",
    state: "WA",
    description:
      "Developing and enhancing mobile and web applications for internal and external usage.",
    accomplishments: [
      "Re-architected the existing JetClosing mobile/web application using React Native and GraphQL increasing performance and improving overall user experience.",
      "Performed hiring interviews and led the software development internship program in a fully remote environment.",
      "Worked alongside architects and product management to design and develop an in-house ticketing web application.",
      "Designed and developed a React/React Native component library utilizing Typescript.",
      "Developed an automated integration testing pipeline for React Native applications utilizing AWS Device Farm and Appium.",
    ],
  },
  {
    startYear: "2016",
    endYear: "2018",
    title: "Senior Software Development Engineer",
    company: "WatchGuard",
    city: "Seattle",
    state: "WA",
    description:
      "Developing a cloud platform that will allow for multi-tier/multi-tenant management of tenants and licensed products.",
    accomplishments: [
      "Building unified applications in Angular for allowing users to view, manage, and interact with various WatchGuard applications.",
      "Built a complete calendar component using Angular that allows users to choose both dates and times, utilizing MomentJS.",
      "Created charts and visualizations used throughout the application with D3.",
      "Built multiple API endpoints and backend consumer processes for data management, utilizing Docker and AWS CloudFormation.",
    ],
  },
  {
    startYear: "2015",
    endYear: "2016",
    title: "Software Development Engineer",
    company: "PitchBook Data",
    city: "Seattle",
    state: "WA",
    description:
      "Software engineer working on various internal tools and applications. Specific examples include quality assurance tools, data management systems and automated researching solutions.",
    accomplishments: [
      "Increased speed and efficiency of web crawling/scraping process substantially through utilizing multi-processing techniques in Python.",
      "Designed and constructed an internal web application that allowed research managers to quickly monitor data entry for errors.",
      "Constructed public-facing web pages for specific company profiles in the PitchBook platform. Utilizing DynamoDB, NodeJS/ExpressJS, and HandlebarsJS.",
      "Managing and maintaining multiple cloud-based processes through Amazon Web Services, including EC2-instances, SQS queues, RDS Databases, etc.",
    ],
  },
  {
    startYear: "2014",
    endYear: "2015",
    title: "Software Development Engineer, Internship",
    company: "Pierce County IT",
    city: "Tacoma",
    state: "WA",
    description:
      "Developed a mobile application under the guidance of a senior software engineer. Utilized web technologies such as AngularJS and cross-platform build tools such as Cordova to design and create a mobile application for IOS and Android.",
    accomplishments: [],
  },
];
