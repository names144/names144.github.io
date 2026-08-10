export interface EmploymentHistory {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  city: string;
  state: string;
  accomplishments: string[];
}

export const EMPLOYMENT: EmploymentHistory[] = [
  {
    startDate: "Apr 2023",
    endDate: "Present",
    title: "Staff Software Engineer",
    company: "Q Bio",
    city: "Remote",
    state: "United States",
    accomplishments: [
      "Built the clinician-facing exam summary feature end to end: integrated an internal AI summarization service, designed the draft-and-save backend flow, and shipped the editing interface clinicians use to review and revise generated summaries before they reach patients.",
      "Designed and built an audit interface that captures every clinician edit to an AI-generated summary and exports the diffs, giving the model team a labeled human-feedback loop for improving output quality.",
      "Partnered with product and design to ship a full redesign of the patient dashboard without a big-bang release. Used theming and feature flags to run old and new experiences side by side, enabling incremental rollout, instant rollback, and continuous shipping throughout the migration.",
      "Delivered wearable device integration end to end, from provider API setup and data ingestion through the patient connection flow and dashboard charts, surfacing continuous health data between clinical visits.",
    ],
  },
  {
    startDate: "Jun 2021",
    endDate: "Apr 2023",
    title: "Principal Software Engineer",
    company: "Sequel",
    city: "Remote",
    state: "United States",
    accomplishments: [
      "Rebuilt the web conferencing experience from scratch, replacing a legacy open-source implementation with an interface supporting live streaming to thousands of concurrent participants.",
      "Solved real-time rendering bottlenecks by implementing batched UI updates and lightweight non-React components, preventing main-thread blocking during high-throughput participant and chat events.",
      "Redesigned the administration dashboard in React and Next.js, cutting initial load from ~5 seconds to under one through optimized data fetching and progressive loading.",
    ],
  },
  {
    startDate: "Sep 2018",
    endDate: "Jun 2021",
    title: "Software Engineer",
    company: "JetClosing",
    city: "Seattle",
    state: "WA",
    accomplishments: [
      "Re-architected the mobile and web application in React Native and GraphQL, taking initial load from 10+ seconds to under one and unifying a previously divergent iOS, Android, and web experience.",
      "Designed and built a shared TypeScript component library used across all three platforms.",
      "Led the software development internship program and ran hiring interviews in a fully remote environment.",
    ],
  },
  {
    startDate: "Jul 2016",
    endDate: "Sep 2018",
    title: "Senior Software Development Engineer",
    company: "WatchGuard",
    city: "Seattle",
    state: "WA",
    accomplishments: [
      "Built account and user management for the WatchGuard Cloud platform end to end, from the customer-facing UI through the backing APIs, and developed the integrations connecting internal applications to the platform.",
    ],
  },
  {
    startDate: "Apr 2015",
    endDate: "Jul 2016",
    title: "Software Development Engineer",
    company: "PitchBook Data",
    city: "Seattle",
    state: "WA",
    accomplishments: [
      "Software engineer working on various internal tools and applications. Specific examples include quality assurance tools, data management systems and automated researching solutions.",
    ],
  },
  {
    startDate: "Sep 2014",
    endDate: "Mar 2015",
    title: "Software Engineer Intern",
    company: "Pierce County",
    city: "Tacoma",
    state: "WA",
    accomplishments: [
      "Built a cross-platform mobile application for Pierce Trips Calendar that tracked user trips by GPS and synced the data to the web platform. Implemented the mobile interface in AngularJS and Ionic and the RESTful services connecting it to the Pierce Trips Calendar API in Java, Jersey, and Spring, with unit and end-to-end coverage through Jasmine, Karma, Protractor, and JUnit.",
    ],
  },
];
