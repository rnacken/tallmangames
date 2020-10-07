// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export default (req, res) => {
  // async function main() {
  //   const post = await prisma.post.create({
  //     data: {
  //       title: "Prisma makes databases easy",
  //       author: {
  //         connect: { email: "sarah@prisma.io" },
  //       },
  //     },
  //   });
  //   console.log(post);
  //   const allUsers = await prisma.user.findMany({
  //     include: { posts: true },
  //   });
  //   console.dir(allUsers, { depth: null });
  // }
  // main()
  //   .catch((e) => {
  //     throw e;
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });

  res.statusCode = 200;
  res.json({ name: "Added contest to DB" });
};
