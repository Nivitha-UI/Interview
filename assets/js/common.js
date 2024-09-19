// client data
var clientobg = 
[
    {
        img:"../assets/images/client1.webp",
        desc:"Client information 1"
    },
    {
        img:"../assets/images/client2.webp",
        desc:"Client information 2"
    },
    {
        img:"../assets/images/client3.webp",
        desc:"Client information 3"
    },
    {
        img:"../assets/images/client4.webp",
        desc:"Client information 4"
    },
    {
        img:"../assets/images/client5.webp",
        desc:"Client information 5"
    },
    {
        img:"../assets/images/client6.webp",
        desc:"Client information 6"
    },
    {
        img:"../assets/images/client7.webp",
        desc:"Client information 7"
    }
]
// show/hide mobile menu while clicking hamburger
function togglemenu()
{
    $("#menulist").toggleClass("toggle");
    $("#topnavbar").toggleClass("openmenu");
}

// open popup
function showModal(e)
{
    //  add classes to modal to show/hide

    $("#modalClient").removeClass("d-none").addClass("d-block");
    var id = e.target.getAttribute("data-id");
    console.log(id,"id");
    
    clientobg.forEach(function(item, index)
    {
        // match currently clicked client logo index with client data
        if(id == index)
        {
            // set client image src inside modal
            $("#modal-img").attr("src",item.img);
            // set client descripion inside modal
            $("#modal-desc").text(item.desc);

        }
    })
 
}
// hide popup
function hideModal()
{
    $("#modalClient").removeClass("d-block").addClass("d-none");

}


$(document).ready(function() {
    // get window width
    var window_widh = window.innerWidth;
    const carouselInner = $('.carousel');
    const totalItems = $('.slide').length;
    // code to set visible carousel iems based on window width
    if(window_widh<=575)
    {
        var visibleItems = 2;

    }
   else if(window_widh>575 && window_widh<=767)
    {
        var visibleItems = 3;
    
    }

    else if(window_widh>767 && window_widh<=1199)
    {
        var visibleItems = 5;
        
    }
    else
    {
        var visibleItems = 7;

    }
    const totalWidth = totalItems * 100 / visibleItems;

    // Clone the first few items to create a seamless loop
    for (let i = 0; i < visibleItems; i++) {
        carouselInner.append($('.slide').eq(i).clone());
    }

    let currentIndex = 0;

    // function to animate slider
    function updateSlider() {
        carouselInner.css('transform', 'translateX(' + (-currentIndex * (100 / visibleItems)) + '%)');
    }

    // funcion for auto scroll slides
    function autoScroll() {
        currentIndex = (currentIndex + 1) % totalItems; // Loop back to start
        updateSlider();
    }

    // Change the interval time as needed (5000ms = 5 seconds)
    setInterval(autoScroll, 2000);
});
