// button animation when scrolling
document.addEventListener('DOMContentLoaded', function () {
	const fixContainer = document.querySelector('.container_fix'),
		sections = document.querySelectorAll('section')

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	}

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (entry.target.id === 'section1') {
					fixContainer.classList.add('container_fix')
					fixContainer.classList.remove('container_fix-2')
				} else if (entry.target.id === 'section2') {
					fixContainer.classList.add('container_fix-2')
					fixContainer.classList.remove('container_fix')
					fixContainer.classList.remove('container_fix-3')
				} else if (entry.target.id === 'section3') {
					fixContainer.classList.add('container_fix-3')
					fixContainer.classList.remove('container_fix-2')
				}
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	sections.forEach(section => {
		observer.observe(section)
	})
})

// Cursor
const container = document.querySelector('.second-section__wrapper'),
	cursor = document.getElementById('cursor')

container.addEventListener('mousemove', function (e) {
	const rect = container.getBoundingClientRect()
	let x = e.clientX - rect.left

	if (x < 0) x = 0
	if (x > rect.width) x = rect.width

	cursor.style.left = x + 'px'
})

// Accordion
document.addEventListener('DOMContentLoaded', function () {
	const accordionItems = document.querySelectorAll('.accordion__item')

	accordionItems.forEach(item => {
		const header = item.querySelector('.accordion__header')
		header.addEventListener('click', () => {
			const content = item.querySelector('.accordion__content')

			if (item.classList.contains('active')) {
				item.classList.remove('active')
				content.style.maxHeight = 0
			} else {
				accordionItems.forEach(i => {
					i.classList.remove('active')
					i.querySelector('.accordion__content').style.maxHeight = 0
				})
				item.classList.add('active')
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	})
})
