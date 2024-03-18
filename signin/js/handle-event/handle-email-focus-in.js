export default function handleEmailFocusIn() {
  const email = document.getElementById('signIn-email')
  const error = document.getElementById('signIn-emailError')

  email.classList.remove('input-error')
  error.textContent = ''
}
