const { db } = require('@vercel/postgres');
const questions = require('./questions.js');
const users = require('./users.js');

async function seedUser(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        ref_id TEXT UNIQUE NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(
        (user) => client.sql`
        INSERT INTO users (id, ref_id)
        VALUES (${user.id}, ${user.ref_id})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  }
  catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedQuestion(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS quests (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        text TEXT NOT NULL,
        user_id TEXT NOT NULL,
        created_on TIMESTAMP,
        read_on TIMESTAMP,
        tags TEXT[],
        refs TEXT[],
        FOREIGN KEY (user_id) REFERENCES users (id)
      );
    `;
    console.log(`Created "quests" table`);

    const insertedQuestions = await Promise.all(
      questions.map(
        (question) => client.sql`
        INSERT INTO quests (text, created_on, user_id)
        VALUES (${question.text}, ${question.created_on}, ${question.user_id})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedQuestions.length} questions`);

    return {
      createTable,
      questions: insertedQuestions,
    };
  }
  catch (error) {
    console.error('Error seeding questions:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUser(client);
  await seedQuestion(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
