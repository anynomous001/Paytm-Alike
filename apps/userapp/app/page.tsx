import { PrismaClient } from "@repo/db/client"

const client = new PrismaClient()
console.log(client.user)

export default function Home() {
  return (
    <div className="text-2xl font-semibold" >Hi there
      Prisma added
    </div>
  );
}
