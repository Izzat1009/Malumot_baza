const form1 = document.querySelector(".form");
const inputFname = document.querySelector(".form_fname");
const inputLname = document.querySelector(".form_name");
const inputAge = document.querySelector(".form_age");
const inputProfession = document.querySelector(".form_profession");
const inputGender = document.querySelector(".form_gender");
const inputCountry = document.querySelector(".form_country");
const wrapperEl = document.querySelector(".wrapper");

form1.addEventListener("submit", (event) => {
  event.preventDefault(); 
  console.log("OK");

  
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  cardEl.innerHTML = `
    <h3>familya: ${inputFname.value}</h3>
    <h3>ism: ${inputLname.value}</h3>
    <h3>Yosh: ${inputAge.value}</h3>
    <h3>Kasb: ${inputProfession.value}</h3>
    <h3>Jins: ${inputGender.value}</h3>
    <h3>Mamlakat: ${inputCountry.value}</h3>
  `;


  wrapperEl.appendChild(cardEl);

  setTimeout(() => {
    cardEl.classList.add("show");

  }), 1000

  inputFname.value = "";
  inputLname.value = "";
  inputAge.value = "";
  inputProfession.value = "";
  inputGender.value = "";
  inputCountry.value = "";
});

const Tasdiqlash = confirm("Malumot bermoqchimisiz?")
if (Tasdiqlash){
    alert ("Siz Ok ni tanladingiz")
} else
alert ("Siz 'Cancel'ni tanladingiz.")