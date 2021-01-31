
$.getJSON("data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {

        var oldPrice = val.oldPriceText;
        var rebsorte = val.params.rebsorte;
        var isNew = val.params.isNew;
        var likeCount = val.params.likeCount;

        var $outerDiv = $("<div/>")
            .css("width", "18rem")
            .addClass("card")   //add class name
            .prepend($('<img>', { class: 'theImg', src: val.image }))
            .append($(isNew === "true" ? "<li class='card-isNew'>" + "NEU"+"</li>" : "<li class='card-isNew'></li>"))
            .append($( likeCount === "" ? "<p class=' card-count'>" +" </p>": "<p class=' card-count' >" + " 🤍" + val.params.likeCount + "</p>"))
            .appendTo("body")

        var $innerDiv = $("<ul/>")
            .addClass("card-body")
            .append($("<li class='card-title'>" + val.name + "</li>" +
                (rebsorte === "" ? "<br/>" : "<li class='card-text-rebsorte'>" + "| " + val.params.rebsorte + "</li>") +
                "<li class='card-text-price'>" + val.priceText + "*" + "</li>" +
                (oldPrice === "" ? "" : "<li class='card-text-old'>" + val.oldPriceText + "</li>") +
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

