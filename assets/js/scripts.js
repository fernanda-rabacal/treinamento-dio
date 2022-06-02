const title = document.getElementById('page-title')
const modeSelectorBtn = document.getElementById('mode-selector')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

function switchMode(){
  
  if (title.classList.contains('dark-mode')){
    title.innerHTML = 'Light mode ON'
    modeSelectorBtn.innerHTML = 'Dark mode';
  } else {
    title.innerHTML = 'Dark mode ON'
    modeSelectorBtn.innerHTML = 'Light mode';
  }
  title.classList.toggle('dark-mode')
  body.classList.toggle('dark-mode')
  modeSelectorBtn.classList.toggle('dark-mode')
  footer.classList.toggle('dark-mode')

  return
}