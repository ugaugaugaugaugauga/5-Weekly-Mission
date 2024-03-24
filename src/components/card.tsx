import { formatDate, getTimeDifference } from '@/lib/date'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  content: string
  url: string
  createdAt: string
}

export const Card = ({ content, url, createdAt }: Props) => {
  return (
    <article className='hover:scale-110 transition flex flex-col rounded-xl shadow-lg'>
      <img
        src={url}
        className='aspect-video rounded-t-xl object-cover object-center'
      />
      <div className='p-5 space-y-3'>
        <div className='text-sm text-muted-foreground'>
          {getTimeDifference(createdAt)}
        </div>
        <p className='line-clamp-2 font-semibold'>{content}</p>
        <div className='text-sm'>{formatDate(createdAt)}</div>
      </div>
    </article>
  )
}

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='aspect-video' />
      <div className='space-y-4'>
        <Skeleton className='h-6' />
        <Skeleton className='h-6' />
        <Skeleton className='h-6' />
      </div>
    </div>
  )
}
