import { IApiStructure } from './ApiStructure.interface';

export const About: IApiStructure = {
  title: 'Get Profile',
  method: 'GET',
  url: '/user/profile',
  data: {
    firstName: 'Bhargab',
    lastName: 'Hazarika',
    email: 'me@maxyspark.me',
    phone: '+91-7002480018',
  },
};

export const apis: IApiStructure[] = [
  {
    title: 'Get Profile',
    method: 'GET',
    url: '/user/profile',
    data: {
      firstName: 'Bhargab',
      lastName: 'Hazarika',
      email: 'me@maxyspark.me',
      phone: '+91-7002480018',
      github: 'https://github.com/maxyspark',
    },
  },
  {
    title: 'Get About',
    method: 'GET',
    url: '/user/profile/about',
    data: {
      firstName: 'Bhargab',
      lastName: 'Hazarika',
      summary: `Experienced Software Development with over 3 years of experience in the IT Industry. Excellent reputation for resolving problems and improving customer satisfaction. Comfortable working in teams or in a self-directed environment. Work through a challenging environment where I can put up all my skills and efforts to explore new learning possibilities and adapt myself in different fields and realize my potential where I get the opportunity for continuous learning.`,
    },
  },
  {
    title: 'Get Skills',
    method: 'GET',
    url: '/user/skills',
    data: [
      'Algorithm implementation',
      'Node JS',
      'Scala',
      'JavaScript',
      'SQL',
      'GCP',
      'AWS',
      'Agile',
      'Web development',
      'Angular',
      'Nest JS',
      'Express',
      'MongoDB',
      'Typescript',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Get Work Experience',
    method: 'GET',
    url: '/user/work-profile',
    data: [
      {
        company: 'RapidFork Technology Private Limited',
        title: 'Sr. Software Developer',
        location: 'Remote',
        from: 'Aug 2020',
        to: 'Mar 2021',
        responsibilities: [
          'Worked on 3 different projects focused on Ed-Tech, Manufacturing and Consumer Services sectors. Lead efforts for development of a customized technology content manager with e-commerce built in, contributed as solutions architect for consumer service project involving, Android, iOS and web-dashboard, wrote backend for Bill of Material and Inventory module of ERP',
          'Developed a code compilation pipeline for a tool to be used for online coding and learning',
          'Lead the development team for a development of personal development platform involving 5 modules divided in multiple applications',
          'Worked as Full Stack Developer',
          'Environment - Node JS, Scala, GCP, Angular, Mongodb, MySQL'
        ]
      },
      {
        company: 'Promote Digitally (partner of RapidFork Technology Pvt. Ltd.)',
        title: 'Software Developer',
        location: 'Remote',
        from: 'Dec 2019',
        to: 'Jul 2020',
        responsibilities: []
      },
      {
        company: 'VVinners',
        title: 'Junior Software Developer',
        location: 'Remote',
        from: 'Sep 2019',
        to: 'Dec 2019',
        responsibilities: [
          'Implemented MVC pattern using Nestjs framework',
          'Build and Deployed ERC20 Contract using truffle and solidity',
          'Involved in creating Restful web services using NestJS and ExpressJS',
          'Deployed and tested the application using Digital Ocean Droplet',
          'Developed various UI (User Interface) components using React, typescript, JQuery, CSS and HTML',
          'Worked on MongoDB with TypeORM'
        ]
      },
      {
        company: 'Confined Materials',
        title: 'Software Developer',
        location: 'The Netherlands (Remote)',
        from: 'Sep 2018',
        to: 'Oct 2019',
        responsibilities: [
         'Worked as a full-stack developer',
         'Created RestFul api using ExpressJS with TypeScript',
         'Integrated with Stripe payment gateway',
         'Created a media convert service with Amazon Media Convert (Incomplete)',
         'Deployed the web apps to ec2 and cloudfront',
         'Created Angular components like controllers, services, directives and forms to collect different user data and implemented form validation in Angular',
         'Used JIRA for tracking the work assigned, organizing issues and following team activity'
        ]
      },
      {
        company: 'Skaplink Private Limited',
        title: 'Software Developer Trainee',
        location: 'Guwahati',
        from: 'Aug 2018',
        to: 'Oct 2018',
        responsibilities: [
          'Maintaining and Adding Features to A React Native App',
          'Maintaining and Adding Featured Backend Server using Django framework',
          'Environment: NodeJS, Visual Studio Code, TypeScript, React Native, Django, Python'
        ]
      },
    ]
  },
  {
    title: 'Get Contact Info',
    method: 'GET',
    url: '/user/contact',
    data: {
      firstName: 'Bhargab',
      lastName: 'Hazarika',
      email: 'me@maxyspark.me',
      phone: '+91-7002480018',
      github: 'https://github.com/maxyspark',
      linkedin: 'https://www.linkedin.com/in/maxyspark/',
    },
  },
];
