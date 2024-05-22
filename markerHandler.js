AFRAME.registerComponent("markerHandler", {
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("marker is found");
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost", ()=>{
            console.log("marker is lost");
            this.handleMarkerLost();
        })

    },
    handleMarkerFound: function(){
        var buttonDiv= document.getElementById("button-div");
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "rate toy",
                text: "work in progress"
            })
        })
        orderButton.addEventListener("click", ()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "thanks for order!!!", 
                text: "enjoy your toy!!!."
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})