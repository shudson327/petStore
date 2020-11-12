// bird filter

function filterBird(){

    var postHTML = " "

    let bird = 'Bird'

    let shop = shop.filter(function(arg){

        return arg.pet == bird
    })}


   
var shop = [{
     
    title: 'Bird Carrier',
    image: 'img/birdacc1.jpg',
    price: '200',
    description: "This habitat could serve as the perfect starter home or travel carrier. Use the fold-out door for extra space to perch, play, and bond."
    
    },
    {
    title: 'Parrot Pet Toy Climbing Ladder',
    image: 'img/birdacc2.jpg',
    price: '7,000',
    description: "It is suitable for all small and medium birds, such as parakeets, cockatiels, conure, lovebirds, African grey and small macaw."
    
    },
    {
         
    title: 'Bird Wood Play Stand',
    image: 'img/birdacc3.jpg',
    price: '50',
    description: "All birds love to make noise and colorful toys, give your pet birds a treat and let them enjoy it for hours. 100% safe and non-toxic."
        
    },
    {
         
    title: 'Feeding Bowl',
    image: 'img/birdacc4.jpg',
    price: '500',
    description: "Parrot feeding bowl holder is made of quality stainless steel material, rustproof and anti-corrosion, not easy to break or deform, safe and durable."
            
    },
    {
        title: 'Bird Carrier',
        image: 'img/birdacc1.jpg',
        price: '200',
        description: "This habitat could serve as the perfect starter home or travel carrier. Use the fold-out door for extra space to perch, play, and bond."
        
        },
        {
        title: 'Parrot Pet Toy Climbing Ladder',
        image: 'img/birdacc2.jpg',
        price: '7,000',
        description: "It is suitable for all small and medium birds, such as parakeets, cockatiels, conure, lovebirds, African grey and small macaw."
        
        },
        {
             
        title: 'Bird Wood Play Stand',
        image: 'img/birdacc3.jpg',
        price: '50',
        description: "All birds love to make noise and colorful toys, give your pet birds a treat and let them enjoy it for hours. 100% safe and non-toxic."
            
        },
        {
             
        title: 'Feeding Bowl',
        image: 'img/birdacc4.jpg',
        price: '500',
        description: "Parrot feeding bowl holder is made of quality stainless steel material, rustproof and anti-corrosion, not easy to break or deform, safe and durable."
                
        },
        {
            title: 'Bird Carrier',
            image: 'img/birdacc1.jpg',
            price: '200',
            description: "This habitat could serve as the perfect starter home or travel carrier. Use the fold-out door for extra space to perch, play, and bond."
            
            },
            {
            title: 'Parrot Pet Toy Climbing Ladder',
            image: 'img/birdacc2.jpg',
            price: '7,000',
            description: "It is suitable for all small and medium birds, such as parakeets, cockatiels, conure, lovebirds, African grey and small macaw."
            
            },
            {
                 
            title: 'Bird Wood Play Stand',
            image: 'img/birdacc3.jpg',
            price: '50',
            description: "All birds love to make noise and colorful toys, give your pet birds a treat and let them enjoy it for hours. 100% safe and non-toxic."
                
            },
            {
                 
            title: 'Feeding Bowl',
            image: 'img/birdacc4.jpg',
            price: '500',
            description: "Parrot feeding bowl holder is made of quality stainless steel material, rustproof and anti-corrosion, not easy to break or deform, safe and durable."
                    
        },
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



function filterBirdTwo(){

    var postHTML = " "

    let bird = 'BirdTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == bird
    })}


   
var shop = [{
     
title: 'ZuPreem FruitBlend Food',
image: 'img/birdfood1.jpg',
price: '200',
description: "ZuPreem Fruit Blend Flavor Diets are formulated to be fed free choice. A typical bird will consume 20% of its body weight per day."

},
{
title: 'Harvest Parakeet Food ',
image: 'img/birdfood2.jpg',
price: '7,000',
description: "Give your feathered friend the gourmet treatment by feeding them Kaytee Nature's Harvest Parakeet Food - 2 lb.Naturally preserved for ideal freshness."

},
{
     
title: 'Tropical Fruit Nutri-Berries',
image: 'img/birdfood3.jpg',
price: '50',
description: "Tropical Fruit Nutri-Berries for Cockatiels combine whole seeds, grains, and 26% pellets with pieces of real pineapple, papaya, and mango together."
    
},
{
     
title: 'Pure Fun Enriching Variety',
image: 'img/birdfood4.jpg',
price: '500',
description: "The special blend in Pure Fun adds enriching variety to your bird’s regular food regimin and may be fed up to 30% of the food your bird eats every week."
        
},
{
    title: 'ZuPreem FruitBlend Food',
    image: 'img/birdfood1.jpg',
    price: '200',
    description: "ZuPreem Fruit Blend Flavor Diets are formulated to be fed free choice. A typical bird will consume 20% of its body weight per day."
    
    },
    {
    title: 'Harvest Parakeet Food',
    image: 'img/birdfood2.jpg',
    price: '7,000',
    description: "Give your feathered friend the gourmet treatment by feeding them Kaytee Nature's Harvest Parakeet Food - 2 lb.Naturally preserved for ideal freshness."
    
    },
    {
         
    title: 'Tropical Fruit Nutri-Berries',
    image: 'img/birdfood3.jpg',
    price: '50',
    description: "Tropical Fruit Nutri-Berries for Cockatiels combine whole seeds, grains, and 26% pellets with pieces of real pineapple, papaya, and mango together."
        
    },
    {
         
    title: 'Pure Fun Enriching Variety',
    image: 'img/birdfood4.jpg',
    price: '500',
    description: "The special blend in Pure Fun adds enriching variety to your bird’s regular food regimin and may be fed up to 30% of the food your bird eats every week."
            
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