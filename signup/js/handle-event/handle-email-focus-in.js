export default function handleEmailFocusIn() {
  const email = document.getElementById('signup-email')
  const error = document.getElementById('signup-emailError')

  email.classList.remove('input-error')
  error.textContent = ''
}
