/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader =
        document.querySelector(".loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 900);

});


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle(
            "open"
        );

        document.body.classList.toggle(
            "no-scroll"
        );

    }
);


/* Close mobile menu */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }
    );

});


/* =====================================================
   SPORT SWITCHER
===================================================== */

const sportTabs =
    document.querySelectorAll(
        ".sport-tab"
    );

const sportContents =
    document.querySelectorAll(
        ".sport-content"
    );


sportTabs.forEach(function (tab) {

    tab.addEventListener(
        "click",
        function () {

            const selectedSport =
                tab.dataset.sport;


            /* remove active tabs */

            sportTabs.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            tab.classList.add(
                "active"
            );


            /* hide all content */

            sportContents.forEach(
                function (content) {

                    content.classList.remove(
                        "active"
                    );

                }
            );


            /* show selected */

            const selected =
                document.getElementById(
                    selectedSport
                );


            selected.classList.add(
                "active"
            );

        }
    );

});


/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


galleryItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            const image =
                item.dataset.image;


            lightboxImage.src =
                image;


            lightbox.classList.add(
                "open"
            );


            document.body.classList.add(
                "no-scroll"
            );

        }
    );

});


/* close */

lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* background click */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


function closeLightbox() {

    lightbox.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "no-scroll"
    );

    setTimeout(function () {

        lightboxImage.src = "";

    }, 300);

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-header, .training-card, .review-card, .gallery-item, .sport-content"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   PARALLAX HERO
===================================================== */

const hero =
    document.querySelector(
        ".hero"
    );

const heroImage =
    document.querySelector(
        ".hero-image"
    );

const heroGraphic =
    document.querySelector(
        ".hero-graphic"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.innerWidth <= 900
        ) {

            return;

        }


        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `translateY(${scroll * .18}px) scale(1.03)`;


            heroGraphic.style.transform =
                `translateY(${scroll * -.08}px)`;

        }

    }
);


/* =====================================================
   SMOOTH ANCHOR NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    anchor.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const offset = 70;


                const position =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    offset;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }
        );

    });