const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
  roles,
  filieres,
  departs,
  staffs,
} = require('../app/lib/placeholder-data.js');
async function seedAdmission(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "admission" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS admission (
      Id_adm UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_st INTEGER NOT NULL,
      Id_fil INTEGER NOT NULL,
      bac INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      "create_at" TIMESTAMP  NOT NULL,
      "update_at" TIMESTAMP NOT NULL
  );
`;


    console.log(`Created "admission" table`);
    
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding admission:', error);
    throw error;
  }
}


async function seed_attrib_cours(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "attrib_cours" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS attrib_cours (
      Id_atc UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_cours INTEGER NOT NULL,
      Id_staf INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;


    console.log(`Created "attrib_cours" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding attrib_cours:', error);
    throw error;
  }
}


async function seed_att_strole(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "att_strole" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS att_strole (
      Id_strole UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_st INTEGER NOT NULL,
      Id_role INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;


    console.log(`Created "att_strole" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding att_strole:', error);
    throw error;
  }
}

async function seed_cours_table(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "cours_table" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cours_table (
      Id_cours UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      uniid_cours VARCHAR(50) NOT NULL,
      name_cours VARCHAR(50) NOT NULL,
      max_cours INTEGER NOT NULL,
      Id_fil INTEGER NOT NULL,
      bac INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;


    console.log(`Created "cours_table" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding cours_table:', error);
    throw error;
  }
}

async function seed_depart_table(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "depart_table" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS depart_table (
      Id_dep UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name_dep VARCHAR(50) NOT NULL
  );
`;


    console.log(`Created "depart_table" table`);
    const insertedDeparts = await Promise.all(
      departs.map(
        (depart) => client.sql`
        INSERT INTO depart_table (name_dep)
        VALUES (${depart.name_dep})
        ON CONFLICT (Id_dep) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedDeparts.length} departements`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding depart_table:', error);
    throw error;
  }
}

async function seed_filiere(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "filiere" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS filiere (
      Id_fil UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_dep INTEGER NOT NULL,
      name_filiere VARCHAR(50) NOT NULL
  );
`;
console.log(`Created "filiere" table`);

const insertedFilieres = await Promise.all(
  filieres.map(
    (filiere) => client.sql`
    INSERT INTO filiere (Id_dep, name_filiere)
    VALUES (${filiere.Id_dep},${filiere.name_filiere})
    ON CONFLICT (Id_fil) DO NOTHING;
  `,
  ),
);

console.log(`Seeded ${insertedFilieres.length} filières`);
    return {
      createTable,
      filieres: insertedFilieres
    };
  } catch (error) {
    console.error('Error seeding filiere:', error);
    throw error;
  }
}


async function seed_horaires(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "horaires" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS horaires (
      Id_hor UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_staf INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      date_hor date,
      time_hor INTEGER NOT NULL,
      id_cours INTEGER NOT NULL,
      Id_fil INTEGER NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;
console.log(`Created "horaires" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding horaires:', error);
    throw error;
  }
}


async function seed_note_table(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "note_table" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS note_table (
      Id_note UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      Id_cours INTEGER NOT NULL,
      Id_stud INTEGER NOT NULL,
      value FLOAT,
      Id_staf INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;
console.log(`Created "note_table" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding note_table:', error);
    throw error;
  }
}


async function seed_role(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "role" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS role (
      Id_role UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name_role  VARCHAR(50) NOT NULL
  );
`;
console.log(`Created "role" table`);
// Insert data into the "roles" table
const insertedRoles = await Promise.all(
  roles.map(async (role) => {
    return client.sql`
    INSERT INTO role (name_role)
    VALUES (${role.name_role})
    ON CONFLICT (Id_role) DO NOTHING;
  `;
  }),
);

console.log(`Seeded ${insertedRoles.length} users`);
    return {
      createTable,
      roles: insertedRoles
    };
  } catch (error) {
    console.error('Error seeding role:', error);
    throw error;
  }
}


async function seed_staf_table(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "staf_table" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS staf_table (
      Id_staf UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      uniid_staf  VARCHAR(50) NOT NULL,
      name_staff  VARCHAR(50) NOT NULL,
      pers_code  TEXT NOT NULL,
      image_url VARCHAR(50) NOT NULL,
      sexe VARCHAR(5) NOT NULL,
      date_naiss VARCHAR(50) NOT NULL,
      period  VARCHAR(50) NOT NULL,
      email_st VARCHAR(50) NOT NULL,
      phone_st VARCHAR(50) NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;
console.log(`Created "staf_table" table`);
// Insert data into the "users" table
const insertedStaffs = await Promise.all(
  staffs.map(async (staff) => {
    const hashedPassword = await bcrypt.hash(staff.pers_code, 10);
    return client.sql`
    INSERT INTO staf_table (uniid_staf, name_staff, pers_code,image_url, sexe,date_naiss, period, email_st, phone_st)
    VALUES (${staff.uniid_staf}, ${staff.name_staff}, ${hashedPassword},${staff.image_url}, ${staff.sexe}, ${staff.date_naiss} ,${staff.period}, ${staff.email_st}, ${staff.phone_st})
    ON CONFLICT (Id_staf) DO NOTHING;
  `;
  }),
);

console.log(`Seeded ${insertedStaffs.length} Staffs`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding staf_table:', error);
    throw error;
  }
}

async function seed_stud_table(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    // Create the "stud_table" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS stud_table (
      Id_st UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      uniid_st  VARCHAR(50) NOT NULL,
      name_st  VARCHAR(50) NOT NULL,
      matr_st  VARCHAR(15) NOT NULL,
      st_code  TEXT NOT NULL,
      sexe VARCHAR(5) NOT NULL,
      date_naiss TIMESTAMP NOT NULL,
      email_st VARCHAR(50) NOT NULL,
      tel_st VARCHAR(50) NOT NULL,
      "create_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "update_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`;
console.log(`Created "stud_table" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding stud_table:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedAdmission(client);
  await seed_attrib_cours(client)
  await seed_att_strole(client);
  await seed_cours_table(client);
  await seed_depart_table(client);
  await seed_filiere(client);
  await seed_horaires(client);
  await seed_note_table(client);
  await seed_role(client);
  await seed_staf_table(client);
  await seed_stud_table(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
