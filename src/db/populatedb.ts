import pg from "pg";
const { Client } = pg;

const SQL =`
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) NOT NULL,
  description TEXT
);

INSERT INTO services (name, description) 
VALUES
  ('Technical Support', 'Helpdesk and troubleshooting services.'),
  ('Application Support', 'Maintenance and updates for internal apps.'),
  ('Network Setup', 'Configuration of office networking hardware.')
ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("seeding...");
  
  const client = new Client({
    // Using your specific local credentials
    connectionString: "postgresql://postgres:Admin@localhost:5432/service",
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Success: Table created and data inserted.");
  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();