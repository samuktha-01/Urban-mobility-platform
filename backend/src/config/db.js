import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://postgres:samsuresh22@localhost:5432/urban_mobility",
});

export default pool;