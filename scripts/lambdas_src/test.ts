import dotenv from "dotenv";
dotenv.config();

export const handler = async function (event) {
  // Do some stuff here

  const myUser = process.env.MY_USER;

  return {
    statusCode: 200,
    body: "test: " + myUser,
  };
};
