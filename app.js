// cat filter

function filterCat(){

    var postHTML = " "

    let cats = 'Cat'

    let shop = shop.filter(function(arg){

        return arg.pet == cat
    })}


   
var shop = [{
     
title: 'Turbo Cat Scratcher',
image: 'img/toy1.jpg',
price: '200',
description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."

},
{
title: 'Floppy Fish Toy',
image: 'img/toy2.jpg',
price: '7,000',
description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish whenever touched by the cat, producing sporadic flapping to entice the cat and cater to the pet’s hunting instincts."

},
{
     
title: 'Leaps & Bounce Ball',
image: 'img/toy3.jpg',
price: '50',
description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
    
},
{
     
title: 'Feather Cat Wand',
image: 'img/toy4.jpg',
price: '500',
description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
        
}
]

 var postHTML = '';

for (var i=0; i < shop.length; i++){
    var heading = '<div class="cat">' + shop[i].title + '</div>'
    var image = '<img src="' + shop[i].image + '"/>'
    var price ='<p> $' + shop[i].price + '</p>'
    var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}

document.getElementById('market').innerHTML = postHTML
var body = document.getElementById("shopping");
body.setAttribute("style", "position: relative; padding: 5px;");



// var shop = document.getElementById("market");
// shop.setAttribute("style", "position: flex; align-content: inline;");



// reptile filter
