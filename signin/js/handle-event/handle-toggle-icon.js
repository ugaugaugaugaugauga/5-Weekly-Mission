const passwordInput = document.getElementById('signIn-password')
const eyeOffIcon = document.getElementById('eye-off')
const eyeOnIcon = document.getElementById('eye-on')

export function showPasswordAndEyeOn() {
  passwordInput.setAttribute('type', 'text')
  eyeOnIcon.style.display = 'inline'
  eyeOffIcon.style.display = 'none'
}

export function hidePasswordAndEyeOff() {
  passwordInput.setAttribute('type', 'password')
  eyeOnIcon.style.display = 'none'
  eyeOffIcon.style.display = 'inline'
}
