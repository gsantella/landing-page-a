document.querySelector('figure.iframe').onclick = () => {

	basicLightbox.create(`
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Scxs7L0vhZ4" frameborder="0" allowfullscreen></iframe>
	`).show()

}