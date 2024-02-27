function type_change(type) {
  let documnet = this.document;
  let password_img = documnet.getElementById(type == 'password' ? 'password-img' : 'password-repeat-img');
  let password_input = documnet.getElementById(type == 'password' ? 'password-input' : 'password-repeat-input');

  let src = password_img.getAttribute('src');
  if (src == 'img/eye-on.png') {
    password_img.setAttribute('src', 'img/eye-off.png');
    password_input.setAttribute('type', 'text');
  } else {
    password_img.setAttribute('src', 'img/eye-on.png');
    password_input.setAttribute('type', 'password');
  }
}

function diff_check() {
  let documnet = this.document;
  let password = documnet.getElementById('password-input');
  let repeat = documnet.getElementById('password-repeat-input');
  let diff_msg = documnet.getElementById('diff-msg');

  if (repeat.value == '') {
    repeat.setAttribute('class', 'password-repeat-input');
    diff_msg.hidden = true;
  } else {
    if (password.value == repeat.value) {
      repeat.setAttribute('class', 'password-repeat-input');
      diff_msg.hidden = true;
    } else {
      repeat.setAttribute('class', 'password-repeat-input-diff');
      diff_msg.hidden = false;
    }
  }
}