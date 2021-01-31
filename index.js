
$.getJSON("data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {

        var $outerDiv = $("<div/>")
            .css("width", "18rem")
            .addClass("card")   //add class name
            .prepend($('<img>', { class: 'theImg', src: val.image }))
            .append( $("<p class=' card-count' >"+" 🤍" +val.params.likeCount + "</p>"))
            .appendTo("body")

        var $innerDiv = $("<ul/>")
            .addClass("card-body")
            .append($("<li class='card-title'>" + val.name + "</li>" +
                "<li class='card-text-rebsorte'>" +  val.params.rebsorte + "</li>" +
                "<li class='card-text-price'>" + val.priceText+"*" +"</li>" +
                "<li class='card-text-old'>" + val.oldPriceText + "</li>" +
                "<li class='card-text-base'>" + val.params.basePrice + "</li>")
            );

        $outerDiv.append($innerDiv)

        items.push($outerDiv);

    });

    $(".card", {
        // "class": "card",
        html: items.join("<div>")
    }).appendTo("body");
});

