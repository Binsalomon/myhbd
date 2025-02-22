document.addEventListener("DOMContentLoaded", () => {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("greeting").innerHTML = `Hello <strong>${userName}</strong>! I am BIN Salomon, and I am thrilled to invite you to my birthday celebration! 🎈🎁`;
    }
});

document.getElementById("confirmBtn").addEventListener("click", () => {
    document.getElementById("formContainer").style.display = "block";
});

  let images = document.querySelectorAll(".slider img");
    let index = 0;
    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3000);


    
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
  
        let form = this;
        let formMessage = document.getElementById("formMessage");
  
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                formMessage.style.display = "block"; 
                formMessage.innerText = "Message sent successfully!";
                form.reset(); 
            } else {
                formMessage.style.display = "block";
                formMessage.style.color = "red";
                formMessage.innerText = "Error sending message. Please try again.";
            }
        }).catch(error => {
            console.log(error);
            formMessage.style.display = "block";
            formMessage.style.color = "red";
            formMessage.innerText = "Something went wrong. Try again later.";
        });
    });
  });
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      let name = document.querySelector('input[name="name"]').value;
      document.getElementById("dynamicSubject").value = `New message from ${name}`;
  });