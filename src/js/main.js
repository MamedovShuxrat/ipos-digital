document.addEventListener('DOMContentLoaded', function () {
    const firstDropdownToggle = document.getElementById('firstDropdownToggle')
    const secondDropdownToggle = document.getElementById('secondDropdownToggle')
    const firstDropdown = document.getElementById('firstDropdown')
    const secondDropdown = document.getElementById('secondDropdown')
    const arrowRotate = document.querySelectorAll('.arrow')

    const pageTitle = document.getElementById('pageTitle')

    firstDropdownToggle.addEventListener('click', function () {
        firstDropdown.classList.toggle('hide')
        arrowRotate[0].style.transform = firstDropdown.classList.contains('hide') ? 'rotate(180deg)' : 'rotate(0deg)'
    })

    secondDropdownToggle.addEventListener('click', function () {
        secondDropdown.classList.toggle('hide')
        arrowRotate[1].style.transform = secondDropdown.classList.contains('hide') ? 'rotate(180deg)' : 'rotate(0deg)'
    })

    secondDropdown.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedValue = event.target.textContent
            alert(selectedValue)
            secondDropdown.classList.add('hide')
        }
    })
    firstDropdown.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            pageTitle.textContent = `${pageTitle.textContent} - ${event.target.dataset.value}`
            firstDropdown.classList.add('hide')
        }
    })

    document.addEventListener('click', function (event) {
        if (!firstDropdown.contains(event.target) && !firstDropdownToggle.contains(event.target)) {
            firstDropdown.classList.add('hide')
            arrowRotate[0].style.setProperty('transform', 'rotate(180deg)')
        }

        if (!secondDropdown.contains(event.target) && !secondDropdownToggle.contains(event.target)) {
            secondDropdown.classList.add('hide')
            arrowRotate[1].style.setProperty('transform', 'rotate(180deg)')
        }
    })

}) 
