export default function handlePasswordFocusIn() {
  const password = document.getElementById('signup-password')
  const error = document.getElementById('signup-passwordError')

  password.classList.remove('input-error')
  error.textContent = ''
}
