document.addEventListener("DOMContentLoaded",function(){
    const searchinput = document.getElementById("searchinput");
    const items = document.querySelectorAll(".search-item");

    if (searchinput) {
        searchinput.addEventListener("keyup",function()
    {
        let filter = searchinput.ariaValueMax.toLowerCase();

        items.forEach(item=> {
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display="";
            }
            else {
                item.style.display="none";
            }
        });
    });
}

const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm) {
    subscribeForm.addEventListener("submit",function(e)
    {
        e.preventDefault();
        const email = document.getElementById("emailInput").value;

        if(email==="") {
            alert("Please enter your email address!");
            return;
        }

        if(!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert('Thank you for subscribing,${email}!');
        subscribeForm.reset()

    });
}
});


function validateEmail(email) {
    const re=/^[^\s@]+[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
