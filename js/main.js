$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
    })
    const inputs = document.querySelectorAll(".form-input");
    function focusFunction(){
        let parent = this.parentNode;
        parent.classList.add("focus")
    }
    function blurFunction(){
        let parent = this.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus")
        }
    }
    inputs.forEach(function(input){
        input.addEventListener("focus",focusFunction)
        input.addEventListener("blur",blurFunction)
    })
})