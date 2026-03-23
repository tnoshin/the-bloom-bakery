document.querySelector(`button`).addEventListener(`click`, function () {
    if (document.querySelector(`#fname`).value === ``) {
        alert(`Please fill the name.`)
    }
    else if (document.querySelector(`#tomato`).value === ``) {
        alert(`Please fill in the email address`)
    }
    else if (document.querySelector(`#potato`).value === ``) { alert(`Please write the message`) }
    else {
        alert(`Message sent! Thank you`)
    }
})