import {
  SiAmazonaws,
  SiAmazons3,
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiDbt,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglebigquery,
  SiGooglecloud,
  SiLooker,
  SiMicrosoftazure,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiSnowflake,
  SiStreamlit
} from 'react-icons/si';
import { useSite } from '../context/SiteContext';
import {
  FiBox,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiGitMerge,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiShare2,
  FiZap
} from 'react-icons/fi';

const techIcons = {
  Python: { icon: SiPython, color: '#3776AB' },
  SQL: { icon: SiPostgresql, color: '#336791' },
  PySpark: { icon: SiApachespark, color: '#E25A1C' },
  Pandas: { icon: SiPandas, color: '#E5DEFF', light: '#130654' },
  NumPy: { icon: SiNumpy, color: '#4DABCF' },
  'Apache Spark': { icon: SiApachespark, color: '#E25A1C' },
  dbt: { icon: SiDbt, color: '#FF694B' },
  'Google BigQuery': { icon: SiGooglebigquery, color: '#4386FA' },
  BigQuery: { icon: SiGooglebigquery, color: '#4386FA' },
  'Data Modeling': { icon: FiLayers, color: '#8B7CFF' },
  'Data Quality': { icon: FiCheckCircle, color: '#22C55E' },
  'Amazon Web Services': { icon: SiAmazonaws, color: '#FF9900' },
  'AWS S3': { icon: SiAmazons3, color: '#569A31' },
  'Microsoft Azure': { icon: SiMicrosoftazure, color: '#0078D4' },
  Databricks: { icon: SiDatabricks, color: '#FF3621' },
  Snowflake: { icon: SiSnowflake, color: '#29B5E8' },
  'Apache Airflow': { icon: SiApacheairflow, color: '#017CEE' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Git: { icon: SiGit, color: '#F05032' },
  GitHub: { icon: SiGithub, color: '#F5F5F5', light: '#181717' },
  GCP: { icon: SiGooglecloud, color: '#4285F4' },
  'Compute Engine': { icon: SiGooglecloud, color: '#4285F4' },
  Mage: { icon: FiZap, color: '#F5C542' },
  Streamlit: { icon: SiStreamlit, color: '#FF4B4B' },
  'Looker Studio': { icon: SiLooker, color: '#4285F4' },
  Ollama: { icon: FiCpu, color: '#D1D5DB', light: '#4B5563' },
  ETL: { icon: FiGitMerge, color: '#8B7CFF' },
  'ETL/ELT': { icon: FiGitMerge, color: '#8B7CFF' },
  'Medallion Architecture': { icon: FiLayers, color: '#F5C542' },
  'Data Structures': { icon: FiGrid, color: '#38BDF8' },
  Algorithms: { icon: FiCpu, color: '#A78BFA' },
  DBMS: { icon: FiDatabase, color: '#336791' },
  'Operating Systems': { icon: FiMonitor, color: '#94A3B8' },
  'Computer Networks': { icon: FiShare2, color: '#22D3EE' },
  OOP: { icon: FiBox, color: '#F472B6' }
};

export default function TechBadge({ name }) {
  const { theme } = useSite();
  const tech = techIcons[name];
  const Icon = tech?.icon;
  const isDark = theme === 'dark';
  const color = isDark ? tech?.color : tech?.light || tech?.color;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm font-medium ${
        isDark
          ? 'border-white/10 bg-[#14151c] text-white'
          : 'border-border bg-secondary text-foreground'
      }`}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" color={color} aria-hidden="true" />}
      {name}
    </span>
  );
}
