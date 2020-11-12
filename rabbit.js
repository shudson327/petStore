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
description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."

},
{
title: 'Rabbit Hay Feeder',
image: 'img/rabbitacc2.jpg',
price: '7,000',
description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."

},
{
     
title: 'Hay, Food, Water Feeder',
image: 'img/rabbitacc3.jpg',
price: '50',
description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
    
},
{
     
title: 'Easy Roll Indoor Cage',
image: 'img/rabbitacc4.jpg',
price: '500',
description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
        
},
{
    title: 'Rabbit Adjustable Harness',
    image: 'img/rabbitacc1.jpg',
    price: '200',
    description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."
    
    },
    {
    title: 'Rabbit Hay Feeder',
    image: 'img/rabbitacc2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
    
    },
    {
         
    title: 'Leaps & Bounce Ball',
    image: 'img/rabbitacc3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
        
    },
    {
         
    title: 'Easy Roll Indoor Cage',
    image: 'img/rabbitacc4.jpg',
    price: '500',
    description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
            
    },
    {
           
    title: 'Rabbit Adjustable Harness',
    image: 'img/rabbitacc1.jpg',
    price: '200',
    description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."
            
    },
    {

    title: 'Rabbit Hay Feeder',
    image: 'img/rabbitacc2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
            
    },
    {
                 
    title: 'Leaps & Bounce Ball',
    image: 'img/rabbitacc3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
                
    },
    {
                 
    title: 'Easy Roll Indoor Cage',
    image: 'img/rabbitacc4.jpg',
    price: '500',
    description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
                    
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
description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."

},
{
title: 'Sunburst Organic Food',
image: 'img/rabbitfood2.jpg',
price: '7,000',
description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."

},
{
     
title: 'Feed for Your Bunny',
image: 'img/rabbitfood3.jpg',
price: '50',
description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
    
},
{
     
title: 'Rabbit Diet Pellets',
image: 'img/rabbitfood4.jpg',
price: '500',
description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
        
},
{
    title: 'Supreme Rabbit Food',
    image: 'img/rabbitfood1.jpg',
    price: '200',
    description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."
    
    },
    {
    title: 'Sunburst Organic Food',
    image: 'img/rabbitfood2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
    
    },
    {
         
    title: 'Feed for Your Bunny',
    image: 'img/rabbitfood3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
        
    },
    {
         
    title: 'Rabbit Diet Pellets',
    image: 'img/rabbitfood4.jpg',
    price: '500',
    description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
            
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