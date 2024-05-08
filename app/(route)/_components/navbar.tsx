import { getUserData } from '@/app/api/user'
import { Logo } from '@/components/logo'
import Image from 'next/image'

export const Navbar = async () => {
  const userData = await getUserData()

  return (
    <nav className='bg-slate-100 flex h-20 fixed w-full z-10'>
      <div className='w-full flex items-center justify-between xl:w-[1200px] xl:mx-auto mx-10'>
        <Logo />
        <div className='flex items-center gap-x-2'>
          <Image
            src={userData.image_source}
            alt={'user img'}
            height={32}
            width={32}
          />
          <span>{userData.email}</span>
        </div>
      </div>
    </nav>
  )
}
