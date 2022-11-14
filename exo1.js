let vide = document.querySelector('input');

const ul = document.createElement('ul')

document.querySelector('body').append(ul)

document.querySelector('button').addEventListener('click', function() {
	ul.innerHTML += '<li>' + vide.value + '</li>'
})