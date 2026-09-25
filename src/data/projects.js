export const projects = [
  {
    id: 1,
    title: 'Swiggy AI Data Engineering Pipeline',
    description:
      'End-to-end modern data stack for a food-delivery dataset: raw CSVs in Amazon S3, ELT into Snowflake with dbt (Bronze/Silver/Gold), orchestrated with Apache Airflow and Docker, plus Ollama for text-to-SQL/RAG and Streamlit and Looker Studio dashboards.',
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
    category: 'Data Engineering'
  },
  {
    id: 2,
    title: 'Airlines Data Engineering Project',
    description:
      'End-to-end pipeline for airline data: ingest, transform, and validate records into analytics-ready tables. Built in Python with an emphasis on reliable ETL and data quality checks.',
    techStack: ['Python', 'ETL', 'PySpark', 'Data Quality'],
    githubLink: 'https://github.com/sakshiishuklaa/Airlines_DataEngineering_Project',
    category: 'Data Engineering'
  },
  {
    id: 3,
    title: 'Uber-Data Engineering ETL Pipeline',
    description:
      'A highly scalable ETL pipeline built on GCP utilizing Mage-AI and Python. Extracted raw denormalized data, performed complex transformations using Pandas, and loaded the optimized Star Schema into Google BigQuery. Visualized key metrics like revenue and location hotspots via Looker Studio.',
    techStack: [
      'GCP',
      'Compute Engine',
      'Python',
      'SQL',
      'Mage-AI',
      'Pandas',
      'BigQuery',
      'Looker Studio'
    ],
    githubLink: 'https://github.com/sakshiishuklaa/Uber-Data-Engineering-GCP',
    category: 'Data Engineering'
  }
];
