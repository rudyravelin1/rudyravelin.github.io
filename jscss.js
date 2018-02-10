
var input = document.querySelector('input')
var footer = document.querySelector('footer')

input.addEventListener('change', function(){
  footer.style.setProperty('--footer-color', input.value)
})