
// $(document).ready(function(){
//     $.getJSON("data.json", function (data) {
//         var name= data.name;
// });

// })

// $(document).ready(function () {
//     $.getJSON("data.json", function (data)  
//     {
//     for (var i = 0; i < data.length; i++) {  
//     document.write(data[i].name +" " + data[i].params.rebsorte  + " " + data[i].price + " " + data[i].oldPrice + " " + data[i].params.basePrice + "<br>");  

//     }
//     });

//     });

$.getJSON("data.json", function (data) {
    var items = [];
    var imgList = "";
    $.each(data, function (key, val) {

        var $outerDiv = $("<div/>")
        .css("width", "18rem")
        .addClass("card")   // creates a div element
        .prepend($('<img>',{id:'theImg',src:val.image})).addClass("card-img-top")
        .appendTo("body")

        var $innerDiv = $("<div/>")
        .addClass("card-body")   // creates a div element
        .append($("<h5 class='card-title'>"+val.name+"</div>")
        .append($("<p class='card-text'>"+val.priceText+"</p>")
       .append($("<p class='card-text'>"+val.oldPriceText+"</p>")
       .append($("<p class='card-text'>"+val.params.basePrice+"</p>")
        ))));

        $outerDiv.append($innerDiv)
       
        items.push($outerDiv);


    });

    $("<div/>", {
        // "class": "card",
        html: items.join("<div>")
    }).appendTo("body");
});








// var $newDiv = $("<div/>")   // creates a div element
//     .attr("id", "someID")  // adds the id
//     .addClass("someClass")   // add a class
//     .append
//     .html("<div>stuff here</div>");

// $("#somecontainer").append($newDiv);