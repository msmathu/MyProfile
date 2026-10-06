export const profile = {
  name: "Madhu Suthanan M",
  role: ".NET Developer",
  tagline: "Building scalable REST APIs & web applications with ASP.NET Core, EF Core, and Angular",
  email: "madhusuthanan578@gmail.com",
  phone: "+91-7539928511",
  location: "Tenkasi, Tamil Nadu",
  github: "https://github.com/msmathu",
  summary: [
    "Over 3.5 years of experience as a .NET Developer, building and optimizing web applications and REST APIs using ASP.NET Core Web API, C#, Angular, and SQL Server.",
    "Currently working at Soulxes Technology, Chennai, on the SmartRace camel racing management platform.",
    "Proficient in ASP.NET Core Web API, Entity Framework Core, Dapper, C#, Angular, jQuery, JavaScript, SQL Server, and DevExpress Reports.",
    "Strong understanding of layered architecture, EF Core query performance optimization, and memory caching strategies.",
    "Experienced in Unit Testing (XUnit, NUnit), Docker, Linux commands, and CI/CD pipelines in Azure DevOps.",
  ],
};

export const skills = {
  "Backend": ["C#", "ASP.NET Core Web API", "ASP.NET Core MVC", "Entity Framework Core", "Dapper", "LINQ"],
  "Frontend": ["Angular", "jQuery", "Ajax", "JavaScript", "HTML5", "CSS3"],
  "Database": ["MS SQL Server", "T-SQL"],
  "DevTools": ["DevExpress Reports", "Docker", "Git", "Azure DevOps CI/CD"],
  "Architecture": ["Layered Architecture", "Repository Pattern", "JWT Authentication", "Swagger / OpenAPI", "Memory Caching"],
  "Testing": ["XUnit", "NUnit", "Unit Testing"],
  "Other": ["Linux Commands", "REST API Design"],
};

export const experience = [
  {
    id: 1,
    company: "Soulxes Technology",
    location: "Chennai",
    role: "Software Developer",
    period: "JAN 2026 – PRESENT",
    current: true,
    projects: [
      {
        name: "SmartRace – Camel Racing Management System",
        description: "A comprehensive race management platform covering registration, results, health testing, and prize management for camel racing events.",
        bullets: [
          "Developing and maintaining REST APIs for the SmartRace platform covering race management, camel registration, pre-test results, and prize management.",
          "Implemented clean layered architecture (Controllers → Services → Repositories → DataAccess → DbContext), ensuring separation of concerns and maintainability across Tablet and Mobile API modules.",
          "Optimized Entity Framework Core queries using AsNoTracking() and AsSplitQuery(), eliminating Cartesian explosion issues and reducing query execution time.",
          "Replaced in-memory collection counting with SQL COUNT(*) queries, eliminating N+1 performance bottlenecks where thousands of rows were loaded just for a count.",
          "Pushed date and filter conditions from C# in-memory evaluation into SQL WHERE clauses, improving performance for large race and registration datasets.",
          "Implemented memory caching (IMemoryCache) for frequently accessed master data, reducing repeated database round-trips.",
          "Developed reporting features using DevExpress Reports for race result summaries and camel test certificates.",
          "Integrated JWT authentication and configured Swagger/OpenAPI documentation for all API endpoints.",
          "Used Dapper for optimized raw SQL queries where Entity Framework Core overhead was not justified.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "HCL Technologies",
    location: "Chennai",
    role: "Software Developer",
    period: "AUG 2024 – JAN 2026",
    current: false,
    projects: [
      {
        name: "Doctor Appointment – Training Project",
        description: "Doctor appointment booking application with ASP.NET Core MVC frontend and Web API backend.",
        bullets: [
          "Developed a Doctor Appointment Booking application using ASP.NET Core MVC (Frontend) and ASP.NET Core Web API (Backend).",
          "Designed features including doctor availability management, appointment booking, history viewing, and cancellation.",
          "Integrated unit testing to ensure code reliability; consumed RESTful APIs with CRUD operations via Entity Framework.",
        ],
      },
      {
        name: "ATM KAL",
        description: "ATM interface management system with Angular UI and .NET Core Web API backend integrated with KAL Design Studio.",
        bullets: [
          "Developed and maintained RESTful APIs using .NET Core Web API to support ATM functionalities.",
          "Built dynamic and responsive UI components using Angular, integrated with backend services.",
          "Configured KAL Design Studio to link Angular-based UI via URL routing for ATM interface customization.",
          "Integrated .NET assembly DLLs within KAL Studio to enable backend logic execution and ATM device control.",
          "Participated in debugging, performance tuning, and versioning of APIs and UI components.",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Brimma Tech Pvt Ltd",
    location: "Chennai",
    role: "Software Developer",
    period: "JUN 2023 – AUG 2024",
    current: false,
    projects: [
      {
        name: "Enterprise Solutions",
        description: "Business application development using C#.NET, ASP.NET, and LINQ to SQL.",
        bullets: [
          "Created business entities and configured XML files for database mapping in the business layer using C#.NET.",
          "Retrieved, categorized, and uploaded documents to Encompass after verifying relevant tenant information.",
          "Developed custom and user controls for reusable web page components using C#.NET with ASP.NET.",
          "Used LINQ to SQL for database connectivity in ASP.NET web applications.",
          "Wrote test cases using XUnit and NUnit.",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Brimma Tech Pvt Ltd – Internship",
    location: "Chennai",
    role: "Intern Developer",
    period: "MAR 2023 – MAY 2023",
    current: false,
    projects: [
      {
        name: "",
        description: "",
        bullets: [
          "Developed responsive front-end interfaces using Angular.",
          "Gained hands-on experience in .NET backend development, including CRUD operations via REST APIs.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "National Engineering College, Kovilpatti",
    year: "2019 – 2023",
    score: "7.48 CGPA",
  },
  {
    degree: "HSC",
    institution: "Government Higher Secondary School, Vellalankulam",
    year: "2018 – 2019",
    score: "66.33%",
  },
];

export const certifications = [
  { name: "AZ-900: Azure Fundamentals", issuer: "Microsoft", icon: "azure" },
  { name: "Azure DevOps Foundations", issuer: "Scholar Hat", icon: "devops" },
  { name: "Soft Skills and Personality", issuer: "NPTEL", icon: "nptel" },
  { name: "Speaking Effectively", issuer: "NPTEL", icon: "nptel" },
];
