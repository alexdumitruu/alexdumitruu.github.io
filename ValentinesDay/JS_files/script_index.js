// Console in inspect page
/*console.log(`Hello`);
console.log(`I like pizza`);*/

// Alert
// window.alert(`This is an alert!`);

//document.getElementById("test").textContent = `Test`;

$(document).ready(function() {
    $(".container-envelope").mouseenter(function() {
        $(".card").stop().animate({
            top:"-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top:"5px"
        }, "slow");
    });
});

function showPhoto() {
    const photo = document.getElementById("photo");
    photo.style.display = "block";
}

function hidePhoto() {
    const photo = document.getElementById("photo");
    photo.style.display = "none";
}