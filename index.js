
$.getJSON("data.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {

        var oldPrice = val.oldPriceText;
        var rebsorte = val.params.rebsorte;
        var isNew = val.params.isNew;
        var likeCount = val.params.likeCount;
        var oldPriceForPer = val.oldPrice

        var $outerDiv = $("<div/>")
            .css("width", "8rem")
            .addClass("card")
            .prepend($('<img>', { class: 'theImg', src: val.image }))
            .append($(isNaN(oldPriceForPer) == true ? "</br>" + " </li>" : "<li class='card-ratio'>" + "-" +
                ((Math.round(val.oldPrice - val.price) / val.oldPrice) * 100).toFixed(0) + "%" + "</li>"))
            .append($(likeCount === "" ? "<p class=' card-count' >" + "</br>" + val.params.likeCount + "</p>" : "<p class=' card-count' >" + " 🤍" + val.params.likeCount + "</p>"))
            .append($(isNew === "true" ? "<li class='card-isNew'>" + "NEU" + "</li>" : "<li class='card-isNew'>" + "</li>" + "</br>"))
            .appendTo(".bigDiv")

        var $innerDiv = $("<ul/>")
            .addClass("card-body")
            .append($("<li class='card-title'>" + val.name + "</li>" +
                "<br/>" +
                (rebsorte === "" ? "<li class='card-text-rebsorte'>" + "</br> " + "</li>" : "<li class='card-text-rebsorte'>" + " | " + val.params.rebsorte + "</li>") +
                "<li class='card-text-price'>" + val.priceText + "*" + "</li>" +
                (oldPrice === "" ? "" : "<li class='card-text-old'>" + val.oldPriceText + "</li>") +
                "<li class='card-text-base'>" + val.params.basePrice + "</li>"
            )
            );

        $outerDiv.append($innerDiv)

        items.push($outerDiv);

    });

    $(".card", {
        html: items.join("body")
    })
    // .appendTo("body");

    $('.bigDiv').slick({


    //     infinite: true,
    // slidesToShow: 3, // Shows a three slides at a time
    // slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    // arrows: true, // Adds arrows to sides of slider

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});

