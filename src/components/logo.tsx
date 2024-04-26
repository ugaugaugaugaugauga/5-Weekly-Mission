import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src='/logo.png' alt='logo' />
    </Link>
  )
}
