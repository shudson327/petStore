// rabbit filter

function filterRabbit(){

    var postHTML = " "

    let rabbit = 'Rabbit'

    let shop = shop.filter(function(arg){

        return arg.pet == rabbit
    })}


   
var shop = [{
     
title: 'Rabbit Adjustable Harness',
image: 'img/rabbitacc1.jpg',
price: '200',
description: "It is convenient to control the pet's activity when going out to make sure safety. Adjustable strap design, it can be adjusted according to size"

},
{
title: 'Rabbit Hay Feeder',
image: 'img/rabbitacc2.jpg',
price: '7,000',
description: "Feeding is more convenient, the hollow in the middle and the large opening underneath, with enough open space, the rabbit is more convenient to eat."

},
{
     
title: 'Hay, Food, Water Feeder',
image: 'img/rabbitacc3.jpg',
price: '50',
description: "Keep a generous supply of food and hay in an organized bin style feeder. Made of a plastic/wood composite material and features to secure feeder in place."
    
},
{
     
title: 'Easy Roll Indoor Cage',
image: 'img/rabbitacc4.jpg',
price: '500',
description: "This cage features a removable tray for easy cleaning, and rolling casters make moving the cage simple. Dimensions: 29.0(L), 31.0(H) x 19.0(W)"
        
},
{
    title: 'Rabbit Adjustable Harness',
    image: 'img/rabbitacc1.jpg',
    price: '200',
    description: "It is convenient to control the pet's activity when going out to make sure safety. Adjustable strap design, it can be adjusted according to size"
    
    },
    {
    title: 'Rabbit Hay Feeder',
    image: 'img/rabbitacc2.jpg',
    price: '7,000',
    description: "Feeding is more convenient, the hollow in the middle and the large opening underneath, with enough open space, the rabbit is more convenient to eat."
    
    },
    {
         
    title: 'Leaps & Bounce Ball',
    image: 'img/rabbitacc3.jpg',
    price: '50',
    description: "Keep a generous supply of food and hay in an organized bin style feeder. Made of a plastic/wood composite material and features to secure feeder in place."
        
    },
    {
         
    title: 'Easy Roll Indoor Cage',
    image: 'img/rabbitacc4.jpg',
    price: '500',
    description: "This cage features a removable tray for easy cleaning, and rolling casters make moving the cage simple. Dimensions: 29.0(L), 31.0(H) x 19.0(W)"
            
    },
    {
           
    title: 'Rabbit Adjustable Harness',
    image: 'img/rabbitacc1.jpg',
    price: '200',
    description: "It is convenient to control the pet's activity when going out to make sure safety. Adjustable strap design, it can be adjusted according to size"
            
    },
    {

    title: 'Rabbit Hay Feeder',
    image: 'img/rabbitacc2.jpg',
    price: '7,000',
    description: "Feeding is more convenient, the hollow in the middle and the large opening underneath, with enough open space, the rabbit is more convenient to eat."
            
    },
    {
                 
    title: 'Leaps & Bounce Ball',
    image: 'img/rabbitacc3.jpg',
    price: '50',
    description: "Keep a generous supply of food and hay in an organized bin style feeder. Made of a plastic/wood composite material and features to secure feeder in place."
                
    },
    {
                 
    title: 'Easy Roll Indoor Cage',
    image: 'img/rabbitacc4.jpg',
    price: '500',
    description: "This cage features a removable tray for easy cleaning, and rolling casters make moving the cage simple. Dimensions: 29.0(L), 31.0(H) x 19.0(W)"
                    
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



function filterRabbitTwo(){

    var postHTML = " "

    let rabbit = 'RabbitTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == rabbit
    })}


   
var shop = [{
     
title: 'Supreme Rabbit Food',
image: 'img/rabbitfood1.jpg',
price: '200',
description: "Feed your rabbit a wholesome diet that contains natural protein, fiber, oils and nutrients with Kaytee Supreme Fortified Daily Diet Rabbit Food."

},
{
title: 'Sunburst Organic Food',
image: 'img/rabbitfood2.jpg',
price: '7,000',
description: "Formulated as a food and treat all-in-one, Sunburst Gourmet Blends are fortified with vitamins, minerals and amino acids as well as plant based DHA Omega."

},
{
     
title: 'Feed for Your Bunny',
image: 'img/rabbitfood3.jpg',
price: '50',
description: "These treats are designed to provide your bunny buddy with a variety that she might not be getting with her regular diet. 1-oz or 3-oz bag available."
    
},
{
     
title: 'Rabbit Diet Pellets',
image: 'img/rabbitfood4.jpg',
price: '500',
description: "This Rabbit food was developed to support optimal nutrition in rabbits. With the right nutrition, including high fiber this feed works for rabbits in any stage of life."
        
},
{
    title: 'Supreme Rabbit Food',
    image: 'img/rabbitfood1.jpg',
    price: '200',
    description: "Feed your rabbit a wholesome diet that contains natural protein, fiber, oils and nutrients with Kaytee Supreme Fortified Daily Diet Rabbit Food."
    
    },
    {
    title: 'Sunburst Organic Food',
    image: 'img/rabbitfood2.jpg',
    price: '7,000',
    description: "Formulated as a food and treat all-in-one, Sunburst Gourmet Blends are fortified with vitamins, minerals and amino acids as well as plant based DHA Omega."
    
    },
    {
         
    title: 'Feed for Your Bunny',
    image: 'img/rabbitfood3.jpg',
    price: '50',
    description: "These treats are designed to provide your bunny buddy with a variety that she might not be getting with her regular diet. 1-oz or 3-oz bag available."
        
    },
    {
         
    title: 'Rabbit Diet Pellets',
    image: 'img/rabbitfood4.jpg',
    price: '500',
    description: "This Rabbit food was developed to support optimal nutrition in rabbits. With the right nutrition, including high fiber this feed works for rabbits in any stage of life."
            
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