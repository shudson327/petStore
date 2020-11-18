// rodent filter

function filterRodent(){

    var postHTML = " "

    let rodent = 'Rodent'

    let shop = shop.filter(function(arg){

        return arg.pet == rodent
    })}


   
var shop = [{
     
title: 'Portable Hamster Haven',
image: 'img/rodentacc1.jpg',
price: '200',
description: "Provide plenty of activities for your hamster. It’s a spacious home that’s loaded with plenty of fun options to explore, hide and play."

},
{
title: 'Exercise Wheel',
image: 'img/rodentacc2.jpg',
price: '7,000',
description: "This whisper quiet workout wheel uses ball bearing technology to keep it super silent while your pet runs. The running surface is made of high-quality plastic."

},
{
     
title: 'Hamster Hideout',
image: 'img/rodentacc3.jpg',
price: '50',
description: "This cute, cozy hideout encourages his natural nesting instincts be providing him with a safe place to get away and nap in quiet seclusion."
    
},
{
     
title: 'Mini Bathtub',
image: 'img/rodentacc4.jpg',
price: '500',
description: "This colorful accessory gives your pet a convenient spot to bathe right in their own cage, and with four sturdy feet, the tub is difficult to tip over."
        
},
{
    title: 'Portable Hamster Haven',
    image: 'img/rodentacc1.jpg',
    price: '200',
    description: "Provide plenty of activities for your hamster. It’s a spacious home that’s loaded with plenty of fun options to explore, hide and play."
    
    },
    {
    title: 'Exercise Wheel',
    image: 'img/rodentacc2.jpg',
    price: '7,000',
    description: "This whisper quiet workout wheel uses ball bearing technology to keep it super silent while your pet runs. The running surface is made of high-quality plastic."
    
    },
    {
         
    title: 'Hamster Hideout',
    image: 'img/rodentacc3.jpg',
    price: '50',
    description: "This cute, cozy hideout encourages his natural nesting instincts be providing him with a safe place to get away and nap in quiet seclusion."
        
    },
    {
         
    title: 'Mini Bathtub',
    image: 'img/rodentacc4.jpg',
    price: '500',
    description: "This colorful accessory gives your pet a convenient spot to bathe right in their own cage, and with four sturdy feet, the tub is difficult to tip over."
            
    },
    {
           
    title: 'Portable Hamster Haven',
    image: 'img/rodentacc1.jpg',
    price: '200',
    description: "Provide plenty of activities for your hamster. It’s a spacious home that’s loaded with plenty of fun options to explore, hide and play."
            
    },
    {

    title: 'Exercise Wheel',
    image: 'img/rodentacc2.jpg',
    price: '7,000',
    description: "This whisper quiet workout wheel uses ball bearing technology to keep it super silent while your pet runs. The running surface is made of high-quality plastic."
            
    },
    {
                 
    title: 'Hamster Hideout',
    image: 'img/rodentacc3.jpg',
    price: '50',
    description: "This cute, cozy hideout encourages his natural nesting instincts be providing him with a safe place to get away and nap in quiet seclusion."
                
    },
    {
                 
    title: 'Mini Bathtub',
    image: 'img/rodentacc4.jpg',
    price: '500',
    description: "This colorful accessory gives your pet a convenient spot to bathe right in their own cage, and with four sturdy feet, the tub is difficult to tip over."
                    
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



function filterRodentTwo(){

    var postHTML = " "

    let rodent = 'RodentTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == rodent
    })}


   
var shop = [{
     
title: 'Sweet Harvest Rodent Food',
image: 'img/rodentfood1.jpg',
price: '200',
description: "A complete and balanced diet. Made with only high quality, protein and fiber rich ingredients, vitamins and minerals 100% consumable mix."

},
{
title: 'Science Selective Mouse & Rat Food',
image: 'img/rodentfood2.jpg',
price: '7,000',
description: "This tasty formula is rich in fruits to provide the healthy support of antioxidants and vitamins to encourage a healthy digestive system."

},
{
     
title: 'Kaytee Supreme Daily Diet',
image: 'img/rodentfood3.jpg',
price: '50',
description: "Feed your small pet a wholesome diet that contains natural protein, fiber, oils and nutrients with Kaytee Supreme Fortified Daily Diet Rat & Mouse Food."
    
},
{
     
title: 'Nature Gerbil Food',
image: 'img/rodentfood4.jpg',
price: '500',
description: "Gerbil food rich in grains, fruits and vegetables to offer essential vitamins for animal protein and to offer energy for an active small pet lifestyle."
        
},
{
    title: 'Sweet Harvest Rodent Food',
    image: 'img/rodentfood1.jpg',
    price: '200',
    description: "A complete and balanced diet. Made with only high quality, protein and fiber rich ingredients, vitamins and minerals 100% consumable mix."
    
    },
    {
    title: 'Science Selective Mouse & Rat Food',
    image: 'img/rodentfood2.jpg',
    price: '7,000',
    description: "This tasty formula is rich in fruits to provide the healthy support of antioxidants and vitamins to encourage a healthy digestive system."
    
    },
    {
         
    title: 'Kaytee Supreme Daily Diet',
    image: 'img/rodentfood3.jpg',
    price: '50',
    description: "Feed your small pet a wholesome diet that contains natural protein, fiber, oils and nutrients with Kaytee Supreme Fortified Daily Diet Rat & Mouse Food."
        
    },
    {
         
    title: 'Nature Gerbil Food',
    image: 'img/rodentfood4.jpg',
    price: '500',
    description: "Gerbil food rich in grains, fruits and vegetables to offer essential vitamins for animal protein and to offer energy for an active small pet lifestyle."
            
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