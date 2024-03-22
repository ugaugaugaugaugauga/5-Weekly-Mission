export default function hideInputError(element, errorElement) {
  element.classList.remove('input-error')
  errorElement.textContent = ''
}
