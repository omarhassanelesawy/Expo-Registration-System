// Get items from dom
const form = document.querySelector("form");
let email = document.querySelector(".form-control");
const select = document.querySelector("#inputGroupSelect01");
const but = document.querySelector(".btn");
// Verify both inputs are fulfilled
let verify = [false, false];
select.addEventListener("change", () => {
    if (select.value === "Choose...")
        verify[1] = false;
    else
        verify[1] = true;
    buttonEnable();
});
email.addEventListener("input", () => {
    if (email.value.length === 0)
        verify[0] = false;
    else
        verify[0] = true;
    buttonEnable();
});

var buttonEnable = () => {
    if (verify[0] && verify[1])
        but.disabled = false;
    else {
        but.disabled = true;
    }
}

// Submission
but.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.checkValidity())
        successAppearance();
    else
        dangerAppearance();
})

var successAppearance = () => {
    var div = document.querySelector(".alert-success");
    div.classList.replace("d-none", "d-block");
    email.value = "";
    but.disabled = true;
    setTimeout(() => {
        div.classList.replace("d-block", "d-none");
    }, 3000);
}

var dangerAppearance = () => {
    var div = document.querySelector(".alert-danger");
    div.classList.replace("d-none", "d-block");
    setTimeout(() => {
        div.classList.replace("d-block", "d-none");
    }, 3000);
}


