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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    email.value = "";
    but.disabled = true;
})


