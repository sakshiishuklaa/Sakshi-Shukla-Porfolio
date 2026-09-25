export const projects = [
  {
    slug: 'swiggy-ai-data-engineering-pipeline',
    title: 'Swiggy AI Data Engineering Pipeline',
    description:
      'An end-to-end modern data stack for a food-delivery dataset: raw CSVs in Amazon S3, ELT into Snowflake with dbt across Bronze, Silver, and Gold, orchestrated with Apache Airflow and Docker, plus text-to-SQL and dashboards.',
    overview:
      'Built a modern data platform around a food-delivery dataset. Raw files land in Amazon S3, dbt models them in Snowflake through Bronze, Silver, and Gold layers, and Apache Airflow on Docker runs the schedule. Ollama supports text-to-SQL and retrieval over the warehouse, with Streamlit and Looker Studio for the metrics people actually open.',
    highlights: [
      'Landed raw delivery CSVs in Amazon S3 and modeled them in Snowflake with dbt across Bronze, Silver, and Gold',
      'Orchestrated the ELT schedule with Apache Airflow and Docker so loads can be rerun without handoffs',
      'Added an Ollama text-to-SQL and retrieval path so questions can be asked against the modeled tables',
      'Published operational metrics in Streamlit and Looker Studio dashboards'
    ],
    techStack: [
      'AWS S3',
      'Snowflake',
      'dbt',
      'Apache Airflow',
      'Docker',
      'Ollama',
      'Streamlit',
      'Looker Studio'
    ],
    githubLink: 'https://github.com/sakshiishuklaa/Swiggy-AI-DataEngineering-Pipeline',
    featured: true,
    image: '/projects/swiggy-dashboard.png?v=2'
  },
  {
    slug: 'airlines-data-engineering',
    title: 'Airlines Data Engineering Project',
    description:
      'An end-to-end pipeline for airline data that ingests, transforms, and validates records into analytics-ready tables, with Python, PySpark, and explicit data-quality checks.',
    overview:
      'Designed a pipeline that takes airline operational data from raw extracts through transformation and validation. The focus is reliable ETL: records are checked before they are treated as analytics-ready, and the PySpark jobs are structured so a rerun does not silently double-count.',
    highlights: [
      'Ingested airline operational extracts and transformed them into analytics-ready tables',
      'Built the pipeline in Python and PySpark with validation between stages',
      'Added data-quality checks so broken or duplicate records are caught before reporting',
      'Kept the load path idempotent so scheduled reruns stay consistent'
    ],
    techStack: ['Python', 'PySpark', 'SQL', 'ETL', 'Data Quality'],
    githubLink: 'https://github.com/sakshiishuklaa/Airlines_DataEngineering_Project',
    featured: true,
    image: '/projects/airlines-dashboard-v2.svg'
  },
  {
    slug: 'uber-data-engineering-gcp',
    title: 'Uber Data Engineering ETL Pipeline',
    description:
      'A scalable ETL pipeline on GCP using Mage and Python. Raw denormalized trips are transformed into a star schema in Google BigQuery, with Looker Studio views for revenue and location hotspots.',
    overview:
      'Built an Uber trip pipeline on Google Cloud. Mage orchestrates Python transforms that take denormalized source files, reshape them into a star schema, and load the result into BigQuery. Looker Studio reads that model for revenue and location hotspot views.',
    highlights: [
      'Extracted raw denormalized trip data and transformed it with Python and Pandas',
      'Loaded an optimized star schema into Google BigQuery for analytics queries',
      'Orchestrated the pipeline on GCP with Mage running on Compute Engine',
      'Visualized revenue and location hotspots in Looker Studio'
    ],
    techStack: [
      'GCP',
      'Compute Engine',
      'Python',
      'SQL',
      'Mage',
      'Pandas',
      'BigQuery',
      'Looker Studio'
    ],
    githubLink: 'https://github.com/sakshiishuklaa/Uber-Data-Engineering-GCP',
    featured: true,
    image: '/projects/uber-dashboard.png?v=2'
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
