export default function showPassword(passwordElement, isShow) {
  if (!isShow) {
    passwordElement.setAttribute('type', 'password')
    return
  }
  passwordElement.setAttribute('type', 'text')
}
