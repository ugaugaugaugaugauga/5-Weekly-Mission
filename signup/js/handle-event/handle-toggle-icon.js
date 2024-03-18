export function showPasswordAndEyeOn(
  inputElement,
  eyeOffElement,
  eyeOnElement,
) {
  inputElement.setAttribute('type', 'text')
  eyeOnElement.style.display = 'inline'
  eyeOffElement.style.display = 'none'
}

export function hidePasswordAndEyeOff(
  inputElement,
  eyeOffElement,
  eyeOnElement,
) {
  inputElement.setAttribute('type', 'password')
  eyeOnElement.style.display = 'none'
  eyeOffElement.style.display = 'inline'
}
