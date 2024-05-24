// Функция для загрузки данных из локального хранилища
function loadFromLocalStorage() {
    const data = localStorage.getItem("selectedItems");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}
    const selectedFootInput = document.querySelector("#selectedFood")
// Загрузка данных из локального хранилища при загрузке страницы
let selectedItems = loadFromLocalStorage();
console.log(selectedItems)
for(let i = 0; i < selectedItems.length; i++){
    let footName = selectedItems[i].dishNameTr;
    selectedFootInput.value += `${i+1} ${footName}, `;
}


let footRating;
const footStars = document.querySelectorAll("#footStars i");
for (let i = 0; i < footStars.length; i++) {
    footStars[i].onclick = function () {
        footRating = `Оценка еды ${i + 1} ⭐`;
        const footInput = document.querySelector("#foot");
        footInput.value = i + 1;
        console.log(footRating)
        for (let g = 0; g < footStars.length; g++) {
            footStars[g].classList.remove("star_active");

        }
        for (let s = 0; s < i + 1; s++) {
            footStars[s].classList.add("star_active");
        }
    }
}


let serviceRating;
const serviceStars = document.querySelectorAll("#serviceStars i");
for (let i = 0; i < serviceStars.length; i++) {
    serviceStars[i].onclick = function () {
        serviceRating = `Оценка обслуживания ${i + 1} ⭐`;
        const serviceInput = document.querySelector("#service");
        serviceInput.value = i + 1;
        console.log(serviceRating)
        for (let g = 0; g < serviceStars.length; g++) {
            serviceStars[g].classList.remove("star_active");
        }
        for (let s = 0; s < i + 1; s++) {
            serviceStars[s].classList.add("star_active");
        }
    }
}

let comment;
const inputComment = document.querySelector("#comment");
const textarea = document.querySelector("textarea");
textarea.oninput = function () {
    comment = textarea.value;
    inputComment.value = textarea.value;
    console.log(comment)
}


const tokenTg = "6951046334:AAFt7lerf2Qptumrk0BmFx7RQuEzGaVb1Mk";
const chatIdTg = "5712656420";
const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("button");
const formBlock = document.querySelector(".form-block");
const formIframe = document.querySelector("iframe");
formIframe.onload = function(){
    formBlock.classList.add("wrapper_active");
    setTimeout(() => {
        for (let g = 0; g < footStars.length; g++) {
            footStars[g].classList.remove("star_active");

        }
        for (let g = 0; g < serviceStars.length; g++) {
            serviceStars[g].classList.remove("star_active");
        }
        document.querySelector("form").reset()
        textarea.value = "";
        formBlock.classList.remove("wrapper_active");
   }, 3000);
}


         

