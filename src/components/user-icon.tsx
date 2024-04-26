import { cva, type VariantProps } from 'class-variance-authority'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface UserIconProps extends VariantProps<typeof avatarVariants> {
  url: string
}

const avatarVariants = cva(
  'cursor-pointer inline-block overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-6 w-6',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        default: 'h-8 w-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export const UserIcon = ({ url, size }: UserIconProps) => {
  return (
    <Avatar className={avatarVariants({ size })}>
      <AvatarImage src={url} alt='User icon' />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}
