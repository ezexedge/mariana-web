var pageHome = function(){

    $("body").css({
        "background": "linear-gradient(-70deg,  rgba(0, 0, 0, .5) 40%,#fff 30%), url('../img/header.jpg')",
        "background-repeat": "repeat",
        "margin-top": "60px",
        "background-size" : "contain",
        "background-position": "102% 51%"
        
    })
    $("main").removeClass("mi-collection")
    $("main").removeClass("mi-cv")
    $("main").addClass("sobre-mi")

    }