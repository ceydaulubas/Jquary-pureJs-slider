
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
    // var imgList = "";
    $.each(data, function (key, val) {

        var $outerDiv = $("<div/>")
            .css("width", "18rem")
            .addClass("card")   // creates a div element
            .prepend($('<img>', { id: 'theImg', src: val.image })).addClass("card-img-top")
            .appendTo("body")

        var $innerDiv = $("<ul/>")
            .addClass("card-body")   // creates a div element
            .append($("<li class='card-title'>" + val.name + "</li>"+ "<li class='card-text-price'>" + val.priceText + "</li>"+"<li class='card-text-old'>" + val.oldPriceText + "</li>"+"<li class='card-text-base'>" + val.params.basePrice + "</li>")
                // .append($("<li class='card-text-price'>" + val.priceText + "</li>")
                    // .append($("<li class='card-text-old'>" + val.oldPriceText + "</li>")
                        // .append($("<li class='card-text-base'>" + val.params.basePrice + "</li>")
                        // )))
                        );

        $outerDiv.append($innerDiv)

        items.push($outerDiv);


    });

    $(".card", {
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