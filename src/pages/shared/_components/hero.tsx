import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { UserIcon } from '@/components/user-icon'

type Props = {
  isLoading: boolean
  hasData: boolean
  imgUrl: string
  ownerName: string
  name: string
}

export const Hero = ({
  isLoading,
  hasData,
  imgUrl,
  ownerName,
  name,
}: Props) => {
  return (
    <section className='bg-slate-100 flex flex-col items-center py-10'>
      {isLoading ? (
        <div className='flex flex-col space-y-3'>
          <Skeleton className='h-14 w-14 rounded-full' />
          <div className='space-y-4'>
            <Skeleton className='h-4' />
            <Skeleton className='h-12' />
          </div>
        </div>
      ) : hasData ? (
        <>
          <UserIcon url={imgUrl} size='xl' />
          <p className='mt-2 text-sm text-gray-700'>@{ownerName}</p>
          <div className='mt-4 text-4xl font-bold'>{name}</div>
        </>
      ) : (
        <Button variant='primary' className='rounded-md '>
          로그인
        </Button>
      )}
    </section>
  )
}
