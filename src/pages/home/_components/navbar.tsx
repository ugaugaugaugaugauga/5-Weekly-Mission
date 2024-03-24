import { UserData, fetchUserData } from '@/api/get-user-data'
import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/user-button'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData()
      setUserData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <nav className='z-10 h-20 fixed w-full bg-slate-100 flex items-center justify-between lg:px-36 md:px-20 px-10'>
      <img src='/logo.png' alt='logo' />
      <div className='flex items-center'>
        {isLoading && <Loader className='animate-spin' />}
        {!isLoading &&
          (userData ? (
            <>
              <UserButton url={userData.profileImageSource} />
              <p className='ml-3'>{userData.email}</p>
            </>
          ) : (
            <Button variant={'primary'} className='rounded-md '>
              로그인
            </Button>
          ))}
      </div>
    </nav>
  )
}
