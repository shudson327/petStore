// dog filter

function filterDog(){

    var postHTML = " "

    let dog = 'Dog'

    let shop = shop.filter(function(arg){

        return arg.pet == dog
    })}


   
var shop = [{
     
title: 'Cactus Chew',
image: 'img/dogtoy1.jpg',
price: '200',
description: "This plush cactus is densely packed with fluffy stuffing and interactive elements that are perfect for playtime."

},
{
title: 'Kong Fetch Ball',
image: 'img/dogtoy2.jpg',
price: '7,000',
description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."

},
{
     
title: 'Piggy Chew Toy',
image: 'img/dogtoy3.jpg',
price: '50',
description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
    
},
{
     
title: 'Tug-Of-War Rope',
image: 'img/dogtoy4.jpg',
price: '500',
description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
        
},
{
    title: 'Cactus Chew',
    image: 'img/dogtoy1.jpg',
    price: '200',
    description: "This plush cactus is densely packed with fluffy stuffing and interactive elements that are perfect for playtime."
    
    },
    {
    title: 'Kong Fetch Ball',
    image: 'img/dogtoy2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
    
    },
    {
         
    title: 'Piggy Chew Toy',
    image: 'img/dogtoy3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
        
    },
    {
         
    title: 'Tug-Of-War Rope',
    image: 'img/dogtoy4.jpg',
    price: '500',
    description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
            
    },
    {
           
    title: 'Cactus Chew',
    image: 'img/dogtoy1.jpg',
    price: '200',
    description: "This plush cactus is densely packed with fluffy stuffing and interactive elements that are perfect for playtime."
            
    },
    {

    title: 'Kong Fetch Ball',
    image: 'img/dogtoy2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
            
    },
    {
                 
    title: 'Piggy Chew Toy',
    image: 'img/dogtoy3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
                
    },
    {
                 
    title: 'Tug-Of-War Rope',
    image: 'img/dogtoy4.jpg',
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



function filterDogTwo(){

    var postHTML = " "

    let dog = 'DogTwo'

    let shop = shop.filter(function(arg){

        return arg.pet == dog
    })}


   
var shop = [{
     
title: 'Milk Bone Treats',
image: 'img/dogfood1.jpg',
price: '200',
description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."

},
{
title: 'Beneful Original Food',
image: 'img/dogfood2.jpg',
price: '7,000',
description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."

},
{
     
title: 'Purina One Chicken & Rice',
image: 'img/dogfood3.jpg',
price: '50',
description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
    
},
{
     
title: 'Frosty Paw Treats',
image: 'img/dogfood4.jpg',
price: '500',
description: "This fishing rod comes with four interchangeable lures. They are light and airy so they will get your cat jumping."
        
},
{
    title: 'Milk Bone Treats',
    image: 'img/dogfood1.jpg',
    price: '200',
    description: "Just like its circular design, there will be no end to the fun your kitty will have with the Turbo Scratcher Cat Toy."
    
    },
    {
    title: 'Beneful Original Food',
    image: 'img/dogfood2.jpg',
    price: '7,000',
    description: "Features a realistic, 11″ fish with an improved built-in motion sensor-based motor that wiggles the fish."
    
    },
    {
         
    title: 'Purina One Chicken & Rice',
    image: 'img/dogfood3.jpg',
    price: '50',
    description: "Ships next business day! Leaps & Bounds Lattice Ball and Bell Cat Toys, Pack of 4 balls."
        
    },
    {
         
    title: 'Frosty Paw Treats',
    image: 'img/dogfood4.jpg',
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