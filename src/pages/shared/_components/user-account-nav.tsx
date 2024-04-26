import { Button } from '@/components/ui/button'
import { UserIcon } from '@/components/user-icon'
import { UserData } from '@/model'

type Props = {
  userData: UserData[] | undefined
}

export const UserAccountNav = ({ userData }: Props) => {
  if (userData) {
    return (
      <>
        <UserIcon url={userData[0].image_source} />
        <p className='ml-3'>{userData[0].email}</p>
      </>
    )
  }
  return (
    <Button variant='primary' className='rounded-md '>
      로그인
    </Button>
  )
}
