export default function attachTogglePasswordView() {
  const passwordInput = document.getElementById('signIn-password')
  const eyeOffIcon = document.getElementById('eye-off')
  const eyeOnIcon = document.getElementById('eye-on')

  eyeOffIcon.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'password')
    eyeOnIcon.style.display = 'none'
    eyeOffIcon.style.display = 'inline'
  })

  eyeOnIcon.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'text')
    eyeOffIcon.style.display = 'none'
    eyeOnIcon.style.display = 'inline'
  })
}
