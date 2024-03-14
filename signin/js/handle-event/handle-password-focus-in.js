export default function handlePasswordFocusIn() {
  const password = document.getElementById('signIn-password')
  const error = document.getElementById('signIn-passwordError')

  password.classList.remove('input-error')
  error.textContent = ''
}
