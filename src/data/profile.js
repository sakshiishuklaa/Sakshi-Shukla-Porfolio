const profile = {
  name: 'Sakshi Shukla',
  firstName: 'Sakshi',
  lastName: 'Shukla',
  title: 'Data Engineer',
  roles: ['Data Engineer', 'Pipeline Builder', 'Analytics Engineer'],
  photo: '/sakshi-photo.jpg',
  location: 'India',
  company: 'Tata Consultancy Services',
  heroDescription:
    'Data engineer building reliable pipelines and analytics-ready tables. At Tata Consultancy Services since June 2024, working across AWS, Azure, PySpark, and SQL.',
  footerBlurb:
    'Data Engineer based in India. At Tata Consultancy Services since June 2024. Building pipelines, data-quality checks, and analytics-ready tables.',
  about: {
    paragraphs: [
      "I'm Sakshi Shukla, a Data Engineer at Tata Consultancy Services. I build and maintain pipelines that collect, transform, and deliver information so teams can work with reliable, analytics-ready tables. I like problems that need careful checks, clean models, and systems that keep producing the same result when they run again.",
      'Since June 2024 I have tested ETL and ELT pipelines, reconciled records across Bronze, Silver, and Gold layers, and checked databases for integrity and idempotent processing. Day to day I work in Python, SQL, PySpark, AWS, and Azure.'
    ],
    education: [
      {
        degree: 'Bachelor of Technology',
        school: 'Pranveer Singh Institute of Technology',
        dates: '2019 – 2023',
        specialization: 'Computer Science',
        detail: '7.9/10'
      }
    ]
  },
  experience: [
    {
      id: 'tcs',
      role: 'Data Engineer',
      company: 'Tata Consultancy Services',
      start: 'June 2024',
      end: 'Present',
      location: 'India',
      category: 'Work',
      summary:
        'Data Engineer at TCS, validating pipelines, checking data quality, and reconciling medallion layers from ingestion through analytics-ready tables.',
      achievements: [
        'Validate ETL and ELT pipelines and run SQL and quality checks before data is treated as ready for analytics',
        'Reconcile records across Bronze, Silver, and Gold layers so downstream tables stay consistent with source data',
        'Test databases with a focus on integrity and idempotent processing',
        'Work across AWS and Azure with Python, SQL, and PySpark'
      ]
    }
  ],
  achievements: [
    {
      icon: 'cloud',
      text: 'AWS Certified Solutions Architect – Associate, issued by Amazon Web Services'
    },
    {
      icon: 'award',
      text: 'Microsoft Certified: DevOps Engineer Expert, issued by Microsoft'
    },
    {
      icon: 'badge',
      text: 'Microsoft Certified: Azure Administrator Associate, issued by Microsoft'
    },
    {
      icon: 'spark',
      text: 'Claude Certified Developer - Foundations, issued by Anthropic'
    },
    {
      icon: 'book',
      text: 'Python Programming – A Practical Approach, issued by Indian Institute of Technology Kanpur'
    }
  ],
  achievementTags: ['AWS Certified', 'Azure', 'DevOps', 'Python'],
  aboutStats: [
    { value: 'AWS', label: 'Solutions Architect – Associate' },
    { value: 'Azure', label: 'Administrator Associate' },
    { value: 'DevOps', label: 'Engineer Expert, Microsoft' },
    { value: '7.9', label: 'CGPA in B.Tech Computer Science' }
  ],
  skills: {
    Languages: ['Python', 'SQL'],
    'Frameworks/Libraries': ['PySpark', 'Pandas', 'NumPy'],
    'ML/Data': ['Apache Spark', 'dbt', 'Google BigQuery', 'Data Modeling', 'Data Quality'],
    'Cloud/DevOps': [
      'Amazon Web Services',
      'Microsoft Azure',
      'Databricks',
      'Snowflake',
      'Apache Airflow',
      'Docker',
      'Git',
      'GitHub'
    ],
    Concepts: [
      'ETL/ELT',
      'Medallion Architecture',
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP'
    ]
  },
  contact: {
    intro: "Have a project in mind or want to collaborate? I'd love to hear from you!",
    formNote: "Fill out the form below and I'll get back to you as soon as possible.",
    connectNote: 'You can also reach out to me directly through these channels',
    availability: 'Open to Data Engineer roles'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sakshiiishuklaa/',
    linkedinLabel: 'linkedin.com/in/sakshiiishuklaa',
    github: 'https://github.com/sakshiishuklaa',
    githubLabel: 'github.com/sakshiishuklaa',
    email: 'sakshishukla.tech@gmail.com'
  },
  resume: {
    file: '/Sakshi-Shukla-DE-Resume.pdf',
    downloadName: 'Sakshi-Shukla-DE-Resume.pdf',
    preview: '/resume-preview.png'
  }
};

export default profile;
