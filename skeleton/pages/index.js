import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/user/1') 
  }, [])

}

export default Home