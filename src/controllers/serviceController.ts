import type { Request, Response } from 'express';


import * as db from "../db/queries.js";

/**
 * GET /
 * Fetches all services from Neon and renders service.ejs
 */
export async function getServices(req: Request, res: Response) {
  try {
    const allServices = await db.getAllService();
    
    // CRITICAL: The key 'services' here MUST match 
    // the variable name used in your EJS forEach loop.
    res.render("service", { services: allServices });
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).send("Internal Server Error");
  }
}

/**
 * GET /new
 * Renders the form to create a new service
 */
export async function createServiceGet(req: Request, res: Response) {
  res.render("new");
}

/**
 * POST /new
 * Receives form data and inserts it into Neon
 */
export async function createServicePost(req: Request, res: Response) {
  const { name, description } = req.body;

  try {
    await db.insertService(name, description);
    res.redirect("/"); // Redirect back to the list
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).send("Failed to save service");
  }
}