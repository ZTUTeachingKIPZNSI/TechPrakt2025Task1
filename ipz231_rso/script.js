document.querySelectorAll('.news-media').forEach(image => {
	image.addEventListener('mouseover', e => {
		e.target.src = e.target.src.replace('.png', '.gif')
	})
	
	image.addEventListener('mouseleave', e => {
		e.target.src = e.target.src.replace('.gif', '.png')
	})
})

document.addEventListener("DOMContentLoaded", e => {
	document.querySelector('#tip').style.opacity = '1'
});
