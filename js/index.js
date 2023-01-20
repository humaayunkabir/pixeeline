$('.logo-slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});
$('.testimonial-slid').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function serviceFunction() {
    document.getElementById("myDropdown-two").classList.toggle("show-two");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn-two')) {
        var dropdownsTwo = document.getElementsByClassName("dropdown-content-two");
        var j;
        for (j = 0; j < dropdownsTwo.length; j++) {
            var openDropdownTwo = dropdownsTwo[j];
            if (openDropdownTwo.classList.contains('show-two')) {
                openDropdownTwo.classList.remove('show-two');
            }
        }
    }
}