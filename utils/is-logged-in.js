export default function isLoggedIn() {
  const accessToken = localStorage.getItem('accessToken')
  return !!accessToken
}
