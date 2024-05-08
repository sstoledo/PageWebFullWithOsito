
import prisma from "@/util/prisma";


export default async function Home() {
  
  const users = await prisma.product.findMany();

  return (
    <main>
      
    </main>
  );
}
