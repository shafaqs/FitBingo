import { PrismaClient } from '@prisma/client'

export default function UserPage({ user }) {
  return (
    <div>
      Hello {user.email}! 
      You have {user.experience_points} experience points.
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    },
  })
  return {
    props: { user }
  }
}