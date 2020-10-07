import React from "react";
import { PrismaClient } from "@prisma/client";

export default function Contests() {
  return (
    <div>
      
      Contests
      
    </div>

  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  async function main() {
    const allUsers = await prisma.user.findMany({
      include: { posts: true },
    });
    console.log(allUsers);
  }
  
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return {
    props: {}, // will be passed to the page component as props
  }
}