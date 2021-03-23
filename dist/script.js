document.querySelectorAll('section.box').forEach(item => {

	item.addEventListener('click', event => {
		
		//handle click
		basicLightbox.create(`
		<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.dataset.youtubeId}" frameborder="0" allowfullscreen></iframe>
		`).show()
	
	})

})