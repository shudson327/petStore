// aquatic filter

function filterAquatic(){

    var postHTML = " "

    let aquatic = 'Aquatic'

    let shop = shop.filter(function(arg){

        return arg.pet == aquatic
    })}


   
var shop = [{
     
title: 'Artificial Barrel Ornament Aquatic',
image: 'img/fishacc1.jpg',
price: '200',
description: "Provides a beautiful decoration for your aquarium,also is an excellent hiding place for fish which adds extra fun to play. Made in the USA!"

},
{
title: 'Artificial Miniature Castle',
image: 'img/fishacc2.jpg',
price: '7,000',
description: "Fake ancient castle ornaments are suitable for house aquarium, they can create a lifelike world for your aquarium. 100% non-toxin."

},
{
     
title: 'Aquatic Tank',
image: 'img/fishacc3.jpg',
price: '50',
description: "High protein sinking micro pellets for ALL Types of Aquatic Frogs and Tadpoles. Ships with 1-3 business days! 2 ounces per bottle."
    
},
{
     
title: 'Aquarium Coral Decor',
image: 'img/fishacc4.jpg',
price: '500',
description: "Aquatic Turtle treats are a fun way to entice your turtles and other creatures including newts and aquatic frogs to the surface and watch them feed."
        
},
{
    title: 'Artificial Barrel Ornament Aquatic',
    image: 'img/fishacc1.jpg',
    price: '200',
    description: "Provides a beautiful decoration for your aquarium,also is an excellent hiding place for fish which adds extra fun to play. Made in the USA!"
    
    },
    {
    title: 'Artificial Miniature Castle',
    image: 'img/fishacc2.jpg',
    price: '7,000',
    description: "This veterinarian formulated meal is specifically made for aquatic turtles. It has a soft, moist texture to help provide your sidekick with healthy hydration."
    
    },
    {
         
    title: 'Aquatic Tank',
    image: 'img/fishacc3.jpg',
    price: '50',
    description: "High protein sinking micro pellets for ALL Types of Aquatic Frogs and Tadpoles. Ships with 1-3 business days! 2 ounces per bottle."
        
    },
    {
         
    title: 'Aquarium Coral Decor',
    image: 'img/fishacc4.jpg',
    price: '500',
    description: "Aquatic Turtle treats are a fun way to entice your turtles and other creatures including newts and aquatic frogs to the surface and watch them feed."
            
    },
    {
           
    title: 'Artificial Barrel Ornament Aquatic',
    image: 'img/fishacc1.jpg',
    price: '200',
    description: "Provides a beautiful decoration for your aquarium,also is an excellent hiding place for fish which adds extra fun to play. Made in the USA!"
            
    },
    {

    title: 'Artificial Miniature Castle',
    image: 'img/fishacc2.jpg',
    price: '7,000',
    description: "This veterinarian formulated meal is specifically made for aquatic turtles. It has a soft, moist texture to help provide your sidekick with healthy hydration."
            
    },
    {
                 
    title: 'Aquatic Tank',
    image: 'img/fishacc3.jpg',
    price: '50',
    description: "High protein sinking micro pellets for ALL Types of Aquatic Frogs and Tadpoles. Ships with 1-3 business days! 2 ounces per bottle."
                
    },
    {
                 
    title: 'Aquarium Coral Decor',
    image: 'img/fishacc4.jpg',
    price: '500',
    description: "Aquatic Turtle treats are a fun way to entice your turtles and other creatures including newts and aquatic frogs to the surface and watch them feed."
                    
    }
    ]

 var postHTML = '';

for (var i=0; i < shop.length; i++){
    
    var heading = '<div class="card carousel-item">' + shop[i].title 
    var image = '<img src="' + shop[i].image + '"/>'
    var price ='<p class="price"> $' + shop[i].price + '</p>'
    var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div>'+'</div>' 
    var concatThis =  heading + image + price + description
    postHTML = postHTML + concatThis
}

document.getElementById('market').innerHTML = postHTML



function filterAquaticTwo(){

    var postHTML = " "

    let aquatic = 'AquaticTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == aquatic
    })}


   
var shop = [{
     
title: 'Aqueon Shrimp Pellets',
image: 'img/fishfood1.jpg',
price: '200',
description: "Aqueon foods were developed with premium ingredients and unique formulas to keep fish healthy and energetic. Size: 3.25-Oz Bottle"

},
{
title: 'Aquatic Turtle Food',
image: 'img/fishfood2.jpg',
price: '7,000',
description: "This veterinarian formulated meal is specifically made for aquatic turtles. It has a soft, moist texture to help provide your sidekick hydrated."

},
{
     
title: 'Aquatic Frog & Tadpole Food',
image: 'img/fishfood3.jpg',
price: '50',
description: "High protein sinking micro pellets for ALL Types of Aquatic Frogs and Tadpoles. Ships within 1-3 business days! 2 ounces per bottle."
    
},
{
     
title: 'Aquatic Turtle Treats',
image: 'img/fishfood4.jpg',
price: '500',
description: "Aquatic Turtle treats are a fun way to entice your turtles and other creatures including newts and aquatic frogs to the surface and watch them feed."
        
},
{
    title: 'Aqueon Shrimp Pellets',
    image: 'img/fishfood1.jpg',
    price: '200',
    description: "Aqueon foods were developed with premium ingredients and unique formulas to keep fish healthy and energetic. Size: 3.25-Oz Bottle"
    
    },
    {
    title: 'Aquatic Turtle Food',
    image: 'img/fishfood2.jpg',
    price: '7,000',
    description: "This veterinarian formulated meal is specifically made for aquatic turtles. It has a soft, moist texture to help provide your sidekick hydrated."
    
    },
    {
         
    title: 'Aquatic Frog & Tadpole Food',
    image: 'img/fishfood3.jpg',
    price: '50',
    description: "High protein sinking micro pellets for ALL Types of Aquatic Frogs and Tadpoles. Ships within 1-3 business days! 2 ounces per bottle."
        
    },
    {
         
    title: 'Aquatic Turtle Treats',
    image: 'img/fishfood4.jpg',
    price: '500',
    description: "Aquatic Turtle treats are a fun way to entice your turtles and other creatures including newts and aquatic frogs to the surface and watch them feed."
            
    }
    ]

 var postHTML = '';

for (var i=0; i < shop.length; i++){
    
    var heading = '<div class="card carousel-item">' + shop[i].title 
    var image = '<img src="' + shop[i].image + '"/>'
    var price ='<p class="price"> $' + shop[i].price + '</p>'
    var description = '<div class="hoverProduct"><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Add to cart</button></div>'+'</div>' 
    var concatThis =  heading + image + price + description
    postHTML = postHTML + concatThis
}

document.getElementById('marketTwo').innerHTML = postHTML