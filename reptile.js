// reptile filter

function filterReptile(){

    var postHTML = " "

    let reptile = 'Reptile'

    let shop = shop.filter(function(arg){

        return arg.pet == reptile
    })}


   
var shop = [{
     
title: 'Feeding dish',
image: 'img/reptileacc1.jpg',
price: '200',
description: "The functional yet stylish Exo Terra Feeding Dish has a natural look and fits easily into almost any terrarium. It’s made from food-grade resin."

},
{
title: 'Reptile Habitat Half Log',
image: 'img/reptileacc2.jpg',
price: '7,000',
description: "Habitat half log adds much needed privacy to any reptiles terrarium. A perfect way to help reptiles feel safe and secure, and reduce stress."

},
{
     
title: 'Reptile Heat bulb',
image: 'img/reptileacc3.jpg',
price: '50',
description: "The light bulb can provide accurately controlled energy radiation for heating and sterilization, which has a health effect on small animals."
    
},
{
     
title: 'All Reptile Cage',
image: 'img/reptileacc4.jpg',
price: '5000',
description: "Our Vision Cage Model 734 makes for an excellent living environment for snakes, reptiles and lizards. Designed and manufactured by our team of experts."
        
},
{
    title: 'Feeding dish',
    image: 'img/reptileacc1.jpg',
    price: '200',
    description: "The functional yet stylish Exo Terra Feeding Dish has a natural look and fits easily into almost any terrarium. It’s made from food-grade resin."
    
    },
    {
    title: 'Reptile Habitat Half Log',
    image: 'img/reptileacc2.jpg',
    price: '7,000',
    description: "Habitat half log adds much needed privacy to any reptiles terrarium. A perfect way to help reptiles feel safe and secure, and reduce stress."
    
    },
    {
         
    title: 'Reptile Heat bulb',
    image: 'img/reptileacc3.jpg',
    price: '50',
    description: "The light bulb can provide accurately controlled energy radiation for heating and sterilization, which has a health effect on small animals."
        
    },
    {
         
    title: 'All Reptile Cage',
    image: 'img/reptileacc4.jpg',
    price: '5000',
    description: "Our Vision Cage Model 734 makes for an excellent living environment for snakes, reptiles and lizards. Designed and manufactured by our team of experts."
            
    },
    {
           
    title: 'Feeding dish',
    image: 'img/reptileacc1.jpg',
    price: '200',
    description: "The functional yet stylish Exo Terra Feeding Dish has a natural look and fits easily into almost any terrarium. It’s made from food-grade resin."
            
    },
    {

    title: 'Reptile Habitat Half Log',
    image: 'img/reptileacc2.jpg',
    price: '7,000',
    description: "Habitat half log adds much needed privacy to any reptiles terrarium. A perfect way to help reptiles feel safe and secure, and reduce stress."
            
    },
    {
                 
    title: 'Reptile Heat bulb',
    image: 'img/reptileacc3.jpg',
    price: '50',
    description: "The light bulb can provide accurately controlled energy radiation for heating and sterilization, which has a health effect on small animals."
                
    },
    {
                 
    title: 'All Reptile Cage',
    image: 'img/reptileacc4.jpg',
    price: '5000',
    description: "Our Vision Cage Model 734 makes for an excellent living environment for snakes, reptiles and lizards. Designed and manufactured by our team of experts."
                    
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



function filterReptileTwo(){

    var postHTML = " "

    let reptile = 'ReptileTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == reptile
    })}


   
var shop = [{
     
title: 'Munchies Mealworms',
image: 'img/reptilefood1.jpg',
price: '200',
description: "Nutritious Zilla® Reptile Munchies contain dehydrated ingredients that are quick and convenient with no refrigeration required! All natural ingredients."

},
{
title: 'Muchies Omnivore',
image: 'img/reptilefood2.jpg',
price: '7,000',
description: "Supplies beneficial vitamins and nutrients from a variety of natural ingredients. Nutritious, dehydrated ingredients that are quick and convenient!"
 
},
{
     
title: 'Buffet Blend treats',
image: 'img/reptilefood3.jpg',
price: '50',
description: "This unique blend ensures your pet will receive the proper balance of essential protein, fat vitamins, and minerals. Adult formula, 2.9 oz."
    
},
{
     
title: 'Tutle Delite',
image: 'img/reptilefood4.jpg',
price: '5000',
description: "Made with 100% dried whole shrimp, Wardley Turtle Delite Turtle Food is a wonderful addition to any complete turtle diet. Made in the USA!"
        
},
{
    title: 'Munchies Mealworms',
    image: 'img/reptilefood1.jpg',
    price: '200',
    description: "Nutritious Zilla® Reptile Munchies contain dehydrated ingredients that are quick and convenient with no refrigeration required! All natural ingredients."
    
    },
    {
    title: 'Munchies Omnivore',
    image: 'img/reptilefood2.jpg',
    price: '7,000',
    description: "Supplies beneficial vitamins and nutrients from a variety of natural ingredients. Nutritious, dehydrated ingredients that are quick and convenient!"
    
    },
    {
         
    title: 'Buffet Blend Treats',
    image: 'img/reptilefood3.jpg',
    price: '50',
    description: "This unique blend ensures your pet will receive the proper balance of essential protein, fat vitamins, and minerals. Adult formula, 2.9 oz."
        
    },
    {
         
    title: 'Turtle Delite',
    image: 'img/reptilefood4.jpg',
    price: '5000',
    description: "Made with 100% dried whole shrimp, Wardley Turtle Delite Turtle Food is a wonderful addition to any complete turtle diet. Made in the USA!"
            
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