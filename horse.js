// horse filter

function filterHorse(){

    var postHTML = " "

    let horse = 'Horse'

    let shop = shop.filter(function(arg){

        return arg.pet == horse
    })}


   
var shop = [{
     
title: 'High Horse Saddle',
image: 'img/horseacc1.jpg',
price: '200',
description: "An adjustable position rigging gives you the freedom to choose your rigging style and the tall cantle will provide security under a variety of trail conditions."

},
{
title: 'Classic Stable Blanket',
image: 'img/horseacc2.jpg',
price: '7,000',
description: "Protect your horse from chilly weather with the SmartPak Classic Stable Blanket. Made from durable polyester your horse will stay toasty warm all winter long."

},
{
     
title: 'Horse Grooming Kit',
image: 'img/horseacc3.jpg',
price: '50',
description: "Keep your favorite foal looking and feeling great with this Grooming Kit. This high-quality set features a great selection of grooming essentials."
    
},
{
     
title: 'Herbal Fly Repellant Horse Spray',
image: 'img/horseacc4.jpg',
price: '500',
description: "Your buddy can enjoy horseplay free from the bother of bugs and sun with Herbal Horse Spray Concentrate. Made with gentle blend of ingredients."
        
},
{
    title: 'High Horse Saddle',
    image: 'img/horseacc1.jpg',
    price: '200',
    description: "An adjustable position rigging gives you the freedom to choose your rigging style and the tall cantle will provide security under a variety of trail conditions."
    
    },
    {
    title: 'Classic Stable Blanket',
    image: 'img/horseacc2.jpg',
    price: '7,000',
    description: "Protect your horse from chilly weather with the SmartPak Classic Stable Blanket. Made from durable polyester your horse will stay toasty warm all winter long."
    
    },
    {
         
    title: 'Horse Grooming Kit',
    image: 'img/horseacc3.jpg',
    price: '50',
    description: "Keep your favorite foal looking and feeling great with this Grooming Kit. This high-quality set features a great selection of grooming essentials."
        
    },
    {
         
    title: 'Herbal Fly Repellant Horse Spray',
    image: 'img/horseacc4.jpg',
    price: '500',
    description: "Your buddy can enjoy horseplay free from the bother of bugs and sun with Herbal Horse Spray Concentrate. Made with gentle blend of ingredients."
            
    },
    {
           
    title: 'High Horse Saddle',
    image: 'img/horseacc1.jpg',
    price: '200',
    description: "An adjustable position rigging gives you the freedom to choose your rigging style and the tall cantle will provide security under a variety of trail conditions."
            
    },
    {

    title: 'Classic Stable Blanket',
    image: 'img/horseacc2.jpg',
    price: '7,000',
    description: "Protect your horse from chilly weather with the SmartPak Classic Stable Blanket. Made from durable polyester your horse will stay toasty warm all winter long."
            
    },
    {
                 
    title: 'Horse Grooming Kit',
    image: 'img/horseacc3.jpg',
    price: '50',
    description: "Keep your favorite foal looking and feeling great with this Grooming Kit. This high-quality set features a great selection of grooming essentials."
                
    },
    {
                 
    title: 'Herbal Fly Repellant Horse Spray',
    image: 'img/horseacc4.jpg',
    price: '500',
    description: "Your buddy can enjoy horseplay free from the bother of bugs and sun with Herbal Horse Spray Concentrate. Made with gentle blend of ingredients."
                    
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



function filterHorseTwo(){

    var postHTML = " "

    let horse = 'HorseTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == horse
    })}


   
var shop = [{
     
title: 'Nutrition Senior Balancer',
image: 'img/horsefood1.jpg',
price: '200',
description: "Support your mature hoofed friend with Buckeye Nutrition Senior Balancer Horse Food. It provides daily joint support with MSM, vitamins and minerals."

},
{
title: 'Producers Pride Feed',
image: 'img/horsefood2.jpg',
price: '7,000',
description: "This formula is specifically designed to provide the protein, vitamins and minerals needed to keep adult horses healthy and energetic."

},
{
     
title: 'Horse Wellness Treats',
image: 'img/horsefood3.jpg',
price: '50',
description: "Our completely wholesome All-Natural Full Spectrum Hemp Horse Wellness Treats have been baked to soft, chewy perfection."
    
},
{
     
title: 'Super Horse Feed',
image: 'img/horsefood4.jpg',
price: '500',
description: "Our feeding system allows you to choose the precise feed type and formula to meet your horse’s specific life stage and energy level requirements."
        
},
{
    title: 'Nutrition Senior Balancer',
    image: 'img/horsefood1.jpg',
    price: '200',
    description: "Support your mature hoofed friend with Buckeye Nutrition Senior Balancer Horse Food. It provides daily joint support with MSM, vitamins and minerals."
    
    },
    {
    title: 'Producers Pride Feed',
    image: 'img/horsefood2.jpg',
    price: '7,000',
    description: "This formula is specifically designed to provide the protein, vitamins and minerals needed to keep adult horses healthy and energetic."
    
    },
    {
         
    title: 'Horse Wellness Treats',
    image: 'img/horsefood3.jpg',
    price: '50',
    description: "Our completely wholesome All-Natural Full Spectrum Hemp Horse Wellness Treats have been baked to soft, chewy perfection."
        
    },
    {
         
    title: 'Super Horse Feed',
    image: 'img/horsefood4.jpg',
    price: '500',
    description: "Our feeding system allows you to choose the precise feed type and formula to meet your horse’s specific life stage and energy level requirements."
            
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