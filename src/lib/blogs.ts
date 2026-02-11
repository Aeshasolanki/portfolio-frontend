import pool from "./db";
import { Blog } from "./types";

export async function getBlogs(): Promise<Blog[]> {
  const res = await pool.query(`
    SELECT id, title, content, author, image_url, created_at
    FROM blogs
    ORDER BY created_at DESC
  `);

  return res.rows;
}
