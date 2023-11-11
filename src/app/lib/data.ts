import { sql } from '@vercel/postgres';
import { Quest, User } from './definitions';

export async function getUserByRef(id: string) {
  try {
    const data = await sql<User>`
      SELECT id
      FROM users
      WHERE ref_id = ${id}
    `;
    return data.rows[0];
  }
  catch(error) {}
}

const ITEMS_PER_PAGE = 18;
export async function getQuestsByUser(
  user_id: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Quest>`
      SELECT *
      FROM quests
      WHERE user_id = ${user_id}
      ORDER BY created_on DESC
      OFFSET ${offset}
      LIMIT ${ITEMS_PER_PAGE}
    `;
    return data.rows;
  }
  catch(error) {}
}