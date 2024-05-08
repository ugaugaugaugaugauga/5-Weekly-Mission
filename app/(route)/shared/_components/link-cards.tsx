import { getFolderData } from '@/app/api/folder'
import { LinkCard } from './link-card'

export const LinkCards = async () => {
  const links = (await getFolderData()).links

  if (!links)
    return (
      <div className='text-2xl font-bold'>
        해당 유저의 폴더 링크가 존재하지 않습니다.
      </div>
    )

  return (
    <ul className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
      {links.map((link) => (
        <LinkCard
          key={link.id}
          id={link.id}
          content={link.description}
          imgUrl={link.imageSource || ''}
          createdAt={link.createdAt}
        />
      ))}
    </ul>
  )
}
