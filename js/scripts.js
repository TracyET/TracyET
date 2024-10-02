
// Navbar

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const hamburger2 = document.getElementById('hamburger2');
    const navLinks = document.getElementById('nav-links');
    const drop = document.getElementById('drop');
    const drop2 = document.getElementById('drop2');
    const dropdownContent = document.getElementById('dropdown-content');
    const dropdownContent2 = document.getElementById('dropdown-content2');



    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('hide');
        hamburger2.classList.toggle('show');
   
    });

    hamburger2.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('hide');
        hamburger2.classList.toggle('show');
    });

    drop.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownContent.classList.toggle('show');
    });

    drop2.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownContent2.classList.toggle('show');
    });
    
});







// details pop up (all cars page)

const closeButtons = document.querySelectorAll('.close');
    const popups = document.querySelectorAll('.popup');
    const detailButtons = document.querySelectorAll('.buttons');


    function openPopup(index) {
    popups[index].classList.add('show');
    popups[index].classList.remove('hide');
    }

 
    function closePopup(index) {
    popups[index].classList.remove('show');
    popups[index].classList.add('hide');
    }

    // Adding event listeners to detail buttons
    detailButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        openPopup(index);
    });
    });

    // Adding event listeners to close buttons
    closeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        closePopup(index);
    });
    });







// filter brands (promotions page)
const brandLogo = document.querySelectorAll(".brands button");
const promoCard = document.querySelectorAll(".container .promo");

const filterBrands = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    promoCard.forEach(promo => {
        promo.classList.add("hide");
        if(promo.dataset.brand === e.target.dataset.brand || e.target.dataset.brand === "All"){
            promo.classList.remove("hide");
        }
    });
};

brandLogo.forEach(button => button.addEventListener("click", filterBrands));





// slider jsScript (about us page)
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// forms (register page)
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let gender = document.getElementById('gender').value;
    let dob = document.getElementById('dob').value;
    let termsCheckbox = document.getElementById('terms').checked;

    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (username.length < 5) {
        alert("Username must contain at least 5 letters");
        return;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Email is invalid");
        return;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 letters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (gender === 'none') {
        alert("Gender must be selected");
        return;
    }

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("Age must be at least 18 years old");
        return;
    }

    if (!termsCheckbox) {
        alert("Please accept the terms and conditions");
        return;
    }

    window.location.href = 'home.html';
});
