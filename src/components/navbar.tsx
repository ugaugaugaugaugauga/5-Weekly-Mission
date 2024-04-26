import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

import { getUserData } from '@/data/users'
import { toast } from 'sonner'
import { UserAccountNav } from '../pages/shared/_components/user-account-nav'
import { Link } from 'react-router-dom'
import { UserData } from '@/model'

export const Navbar = () => {
  const [userData, setUserData] = useState<UserData[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)
        const user = await getUserData()
        console.log(user)
        setUserData(user)
      } catch (error) {
        console.error('요청 실패:', error)
        toast.error('사용자 정보를 불러오지 못했습니다.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <nav className='z-10 h-20 fixed w-full bg-slate-100 flex items-center justify-between lg:px-36 md:px-20 px-10'>
      <Link to='/'>
        <img src='/logo.png' alt='logo' />
      </Link>

      <div className='flex items-center'>
        {isLoading && <Loader className='animate-spin' />}
        {!isLoading && userData && <UserAccountNav userData={userData} />}
      </div>
    </nav>
  )
}
