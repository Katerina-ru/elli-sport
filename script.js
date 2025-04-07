const orderButton = document.getElementById('order-button');
const orderButton2 = document.getElementById('order-button-2');
const modal = document.getElementById('data-collection');
const closeModal = document.getElementsByClassName('close')[0];

orderButton.onclick = function () {
  modal.style.display = "block";
};

orderButton2.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewhell: true,
  keyboard: true,

});