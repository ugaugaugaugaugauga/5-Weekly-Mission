export default function displayInputError(element, errorElement, errorMessage) {
  element.classList.add('input-error')
  errorElement.textContent = errorMessage
}
