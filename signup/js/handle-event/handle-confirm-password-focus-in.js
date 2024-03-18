export default function handleConfirmPasswordFocusIn() {
  const password = document.getElementById('signup-confirm-password')
  const error = document.getElementById('signup-confirm-password-error')

  password.classList.remove('input-error')
  error.textContent = ''
}
