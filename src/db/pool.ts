import pg from 'pg';

const { Pool } = pg;

// Environment variables are preferred for security in production
export default new Pool({
  connectionString: "postgresql://postgres:Admin@localhost:5432/service"
});