import { SearchBar } from '../../components/search-bar'
import { useEffect, useState } from 'react'

import { toast } from 'sonner'
import { LinkCardList } from './_components/link-card-list'
import { FeedWrapper } from '@/components/feed-wrapper'
import { CardWrapper } from '@/components/card-wrapper'
import { ShardCard } from './_components/shard-card'
import { getFolderData } from '@/data/folders'
import { Folder } from '@/model'
import { Hero } from './_components/hero'

const SharedPage = () => {
  const [folderData, setFolderData] = useState<Folder>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const folder = await getFolderData()
        setFolderData(folder)
      } catch (error) {
        console.error('요청 실패:', error)
        toast.error('데이터 요청에 실패하였습니다.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchFolder()
  }, [])

  return (
    <main className='py-20'>
      <Hero
        isLoading={isLoading}
        hasData={!!folderData}
        imgUrl={folderData?.owner.profileImageSource!}
        ownerName={folderData?.owner.name!}
        name={folderData?.name!}
      />
      <FeedWrapper>
        <SearchBar />
        <CardWrapper>
          {isLoading ? (
            Array.from({ length: 9 }).map((_, index) => (
              <ShardCard.Skeleton key={index} />
            ))
          ) : folderData ? (
            <LinkCardList links={folderData.links} />
          ) : (
            <div className='flex justify-center text-5xl font-bold col-span-3'>
              콘탠츠가 존재하지 않습니다.
            </div>
          )}
        </CardWrapper>
      </FeedWrapper>
    </main>
  )
}

export default SharedPage
