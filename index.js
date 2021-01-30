
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

           
            items.push("<img src=" + val.image+ " class='card-img-top'></img>"+ "<div class='card-body'></div>" +"<h5 id='product-name'>" + val.name + "</h5>"+ "<p id='product-rebsorte'>" + val.params.rebsorte + "</p>"+"<p id='product-priceText'>" + val.price + "</p>"+ "<p id='product-oldPrice'>" + val.oldPrice + "</p>"+ "<p id='product-rebsorte'>" + val.params.basePrice + "</p>");
            // items.push("<h5 id='product-name'>" + val.name + "</h5>");
            // items.push("<p id='product-rebsorte'>" + val.params.rebsorte + "</p>");
            // items.push("<p id='product-priceText'>" + val.price + "</p>");
            // items.push("<p id='product-oldPrice'>" + val.oldPrice + "</p>");
            // items.push("<p id='product-rebsorte'>" + val.params.basePrice + "</p>");  

               
        });
    
        $("<div/>", {
            "class": "card",
            html: items.join("<div>")
        }).appendTo("body");
    });
        
