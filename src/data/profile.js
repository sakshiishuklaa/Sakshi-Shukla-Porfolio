const profile = {
  name: 'Sakshi Shukla',
  title: 'Data Engineer',
  photo: '/sakshi.jpg',
  company: 'Tata Consultancy Services',
  startDate: 'June 2024',
  heroDescription:
    'I build and maintain data pipelines that collect, transform, and deliver information so teams can work with reliable, analytics-ready tables.',
  ctaText: 'See selected work',
  highlights: [
    { value: '2+', label: 'Years experience' },
    { value: 'TCS', label: 'Since June 2024' },
    { value: 'AWS', label: 'Solutions Architect' },
    { value: 'Azure', label: 'PySpark · SQL' }
  ],
  about: {
    summary:
      'Data Engineer at TCS since June 2024. I test pipelines, check data quality, and reconcile medallion layers from ingestion to analytics-ready tables.',
    careerFocus: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP'
    ],
    experiences: [
      {
        company: 'Tata Consultancy Services',
        role: 'Data Engineer',
        duration: 'June 2024 – Present',
        points: [
          'Validate ETL/ELT pipelines and run SQL and quality checks',
          'Reconcile records across Bronze, Silver, and Gold layers',
          'Test databases with a focus on integrity and idempotent processing'
        ]
      }
    ],
    education: [
      {
        institution: 'Pranveer Singh Institute of Technology',
        degree: 'Bachelor of Technology',
        duration: '2019 – 2023',
        specialization: 'Computer Science',
        cgpa: '7.9/10'
      }
    ]
  },
  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services'
    },
    {
      name: 'Claude Certified Developer - Foundations',
      issuer: 'Anthropic'
    },
    {
      name: 'Microsoft Certified: DevOps Engineer Expert',
      issuer: 'Microsoft'
    },
    {
      name: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft'
    },
    {
      name: 'Python Programming – A Practical Approach',
      issuer: 'Indian Institute of Technology Kanpur'
    }
  ],
  contact: {
    location: 'India',
    availability: 'Open to Data Engineer roles',
    intro: 'Hiring or collaborating on data pipelines? Send a note and I will get back to you.',
    vcfFile: '/contact.vcf',
    vcfDownloadName: 'Sakshi_Shukla.vcf'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sakshi99805632/',
    github: 'https://github.com/sakshiishuklaa',
    email: 'sssakshi034@gmail.com'
  },
  skills: {
    languages: ['Python', 'SQL'],
    frameworks: ['PySpark', 'Pandas', 'NumPy'],
    databases: ['MySQL', 'Google BigQuery'],
    cloud: ['Amazon Web Services (AWS)', 'Microsoft Azure'],
    bigData: ['Apache Spark'],
    tools: ['Databricks', 'Snowflake', 'Apache Airflow', 'dbt', 'Git', 'GitHub']
  },
  projects: {
    githubText: 'More on GitHub',
    callToAction: 'More pipeline and PySpark work is on GitHub.'
  }
};

export default profile;
