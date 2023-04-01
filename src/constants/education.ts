export interface EducationHistory {
  startYear: string;
  endYear: string;
  school: string;
  major: string;
}

export const EDUCATION: EducationHistory[] = [
  {
    school: "University of Washington",
    major: "BSc, Computer Science",
    startYear: "2013",
    endYear: "2015",
  },
  {
    school: "Seattle University",
    major: "BSc, Sports and Exercise Science",
    startYear: "2009",
    endYear: "2013",
  },
];
