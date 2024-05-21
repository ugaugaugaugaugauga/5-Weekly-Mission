import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href='/'>
      <img
        src='/logo.png'
        alt='logo'
        className={cn('hover:opacity-80 transition', className)}
      />
    </Link>
  )
}
