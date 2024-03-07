function handleLogin(event) {
  event.preventDefault()

  const inputEmail = document.getElementById('email').value
  const inputPassword = document.getElementById('password').value

  const email = 'test@codeit.com'
  const password = 'codeit101'

  if (inputEmail === email && inputPassword === password) {
    redirectToFolderPage()
  } else {
    displayErrorMessage('잘못된 이메일 또는 비밀번호입니다.')
  }
}

function redirectToFolderPage() {
  window.location.href = '/folder'
}

function displayErrorMessage(message) {
  document.getElementById('emailError').innerText = message
}

document.getElementById('loginForm').addEventListener('submit', handleLogin)
