document.getElementById('btn').addEventListener("click", () => {
    const email = document.getElementById('email').value;
    fetch('/send-data', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    });
});