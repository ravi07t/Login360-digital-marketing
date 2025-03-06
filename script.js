// ----------------------------- FAQ Container ---------------------------

document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
        details.addEventListener("toggle", () => {
            const icon = details.querySelector("summary i");
            if (icon) {
                icon.style.transform = details.open ? "rotate(180deg)" : "rotate(0deg)";
            }
        });
    });
});

// -----------------------------------------------------------------------

// --------------------------------Time claim your offer-----------------------
document.addEventListener("DOMContentLoaded", function () {
    let offerContainer = document.querySelector(".main-claim-your-offer");
    let scrollPosition = 0;

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > 100) { // Show after scrolling 100px
            offerContainer.classList.add("active");
        } else {
            offerContainer.classList.remove("active");
        }
    });
});
// ------------------------------------------------------------------------
// ---------------------------------form dialog section---------------------------
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popupContainer");
    const openModalBtns = document.querySelectorAll("#showPopup, #open-modal, #registerBtnForm, #stickyBtnOffer, #claimOfferBtn");
    const closeModal = document.querySelector(".close-popup");

    // Open modal when either button is clicked
    openModalBtns.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex";
        });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
// ------------------------------------------------------------------------
//  --------------------------------Why choose login360------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".sub-why-login-360-left-container-text2");
    let index = 0;

    function showNextText() {
        texts.forEach(text => text.classList.remove("active")); // Hide all
        texts[index].classList.add("active"); // Show current text

        index = (index + 1) % texts.length; // Loop back after the last text

        setTimeout(showNextText, 2000); // Change text every 2 seconds
    }

    showNextText();
});
// --------------------------------------------------------------------------


