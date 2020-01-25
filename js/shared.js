var backdrop = document.querySelector(".backdrop"),
    modal = document.querySelector('.modal'),
    selectPlanButtons = document.querySelectorAll('.plan button'),
    noButtonOfModal = document.querySelector('.modal__action--negative'),
    toggleButton = document.querySelector('.toggle-button'),
    mobileNav = document.querySelector('.mobile-nav')
;

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function (evt) {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});

if (noButtonOfModal)
    noButtonOfModal.addEventListener('click', closeModal);

function closeModal() {
    backdrop.classList.remove('open');
    if (modal)
        modal.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

