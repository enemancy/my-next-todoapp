const { db } = require('@vercel/postgres');
const { initialTodos } = require('../app/lib/test-datas.js');
const bcrypt = require('bcrypt');

async function seedTodos(client) {
  try{
    await client.sql`create extension if not exists "uuid-ossp"`;

    const createTable = await client.sql`
      create table if not exists todos (
        id uuid default uuid_generate_v4() primary key,
        name varchar(255) not null,
        deadline varchar(10),
        is_important boolean not null,
        assigned_person varchar(255),
        tag varchar(100),
        is_done boolean not null
      );
    `;
    console.log(`Created "todos" table`);

    const insertTodos = await Promise.all(
      initialTodos.map(async (todo) => {
        return client.sql`
          insert into todos (
            id,
            name,
            deadline,
            is_important,
            assigned_person,
            tag,
            is_done
          ) values (
            ${todo.id},
            ${todo.name},
            ${todo.deadline},
            ${todo.is_important},
            ${todo.assigned_person},
            ${todo.tag},
            ${todo.is_done}
          )
          on conflict (id) do nothing;
        `;
      }),
    );
    console.log(`Seeded ${insertTodos.length} todos`);

    return {
      createTable,
      todos: insertTodos,
    };
  }catch (error) {
    console.error(`Error seeding todos:`, error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedTodos(client);
  
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occured while attempting to seed the database:',err
  );
});