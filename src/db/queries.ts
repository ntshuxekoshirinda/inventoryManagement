import pool from "./pool.js";

// Define the shape of a user row from your DB
interface ServiceRow {
  id: number;
  name: string;
  description: string;
}

export async function getAllService(): Promise<ServiceRow[]> {
  const { rows } = await pool.query<ServiceRow>("SELECT * FROM service");
  return rows;
}

export async function insertService(name: string, description: string): Promise<void> {
  await pool.query("INSERT INTO services (name, description) VALUES ($1, $2)",
    [name, description]);
}