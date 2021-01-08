function submit(){
    let email =document.getElementById("email").value
    let suggestion = document.getElementById("suggestion").value

    window.open(`mailto:${email}?subject=formcookies&body=${suggestion}`)

}