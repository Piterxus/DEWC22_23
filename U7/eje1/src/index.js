
const pinInput = document.getElementById("pin");
const formEl = document.querySelector('form')
const formData = new FormData(formEl)
const data = new URLSearchParams(formData)
const responseDiv = document.getElementById("response")



pinInput.addEventListener("keyup",async (e) => {
    if (e.target.value.length === 5) {
       
        const response = await fetch("https://validate-pin.fly.dev/validate", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": ' application/x-www-form-urlencoded'
            }
        })
        const content = await response.text();
        responseDiv.innerHTML = content
       
    }
});
