import { getFolderData } from '@/app/api/folder'
import { getUserData } from '@/app/api/user'
import Image from 'next/image'

export const Hero = async () => {
  const folder = await getFolderData()
  const userData = await getUserData()

  return (
    <section className='bg-slate-100 flex flex-col items-center py-10'>
      <Image
        src={userData.image_source}
        alt={'user img'}
        height={56}
        width={56}
      />
      <p className='mt-2 text-sm text-gray-700'>@{folder.owner.name}</p>
      <div className='mt-4 text-3xl font-bold'>{folder.name}</div>
    </section>
  )
}
