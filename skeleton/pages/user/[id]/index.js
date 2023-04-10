import { PrismaClient } from '@prisma/client'
import Link from "next/link"

export default function UserPage({ user }) {
  return (
    <div>
      Hello {user.name}.{' '}
      You have {user.experience_points} experience points.
      <div><Link href={`/user/${user.id}/profile`}>Go to your profile</Link></div>
      <div><Link href={`/user/${user.id}/history`}>Go to your play history</Link></div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
  return {
    props: { user }
  }
}