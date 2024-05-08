import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/'>
      <img src='/logo.png' alt='logo' className='hover:opacity-80 transition' />
    </Link>
  )
}
