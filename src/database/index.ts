import { createConnection } from "typeorm";

const connection = async () => {
  try {
    const connectionDb = await createConnection();
    console.log(`connection database is ${connectionDb.isConnected}`);
  } catch (err) {
    console.log({ status: "Server error", err });
  }
};

connection();
