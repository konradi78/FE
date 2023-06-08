const form_elem = document.querySelector('form')

form_elem.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(e.target)
    let data = Object.fromEntries(form_data)
    console.log(data)
}
