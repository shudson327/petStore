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
description: "Perfect for games of fetch. Non-abrasive tennis material will not wear down your dog's teeth."

},
{
     
title: 'Piggy Chew Toy',
image: 'img/dogtoy3.jpg',
price: '50',
description: "Polly Piggy is sure to please even the most particular and precocious pooches. For dogs of all sizes."
    
},
{
     
title: 'Tug-Of-War Rope',
image: 'img/dogtoy4.jpg',
price: '500',
description: "Bring out the pups to play—this rope toy is specially sized for small and medium dogs."
        
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
    description: "Perfect for games of fetch. Non-abrasive tennis material will not wear down your dog's teeth."
    
    },
    {
         
    title: 'Piggy Chew Toy',
    image: 'img/dogtoy3.jpg',
    price: '50',
    description: "Polly Piggy is sure to please even the most particular and precocious pooches. For dogs of all sizes."
        
    },
    {
         
    title: 'Tug-Of-War Rope',
    image: 'img/dogtoy4.jpg',
    price: '500',
    description: "Bring out the pups to play—this rope toy is specially sized for small and medium dogs."
            
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
    description: "Perfect for games of fetch. Non-abrasive tennis material will not wear down your dog's teeth."
            
    },
    {
                 
    title: 'Piggy Chew Toy',
    image: 'img/dogtoy3.jpg',
    price: '50',
    description: "Polly Piggy is sure to please even the most particular and precocious pooches. For dogs of all sizes."
                
    },
    {
                 
    title: 'Tug-Of-War Rope',
    image: 'img/dogtoy4.jpg',
    price: '500',
    description: "Bring out the pups to play—this rope toy is specially sized for small and medium dogs."
                    
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
description: "These crunchy filled treats are made with real bone marrow, the great tasting part of the bone your dog craves."

},
{
title: 'Beneful Original Food',
image: 'img/dogfood2.jpg',
price: '7,000',
description: "Make mealtime for your adult dog as tasty as it is nutritious with Purina Beneful Originals with Real Beef Dry Dog Food."

},
{
     
title: 'Purina One Chicken & Rice',
image: 'img/dogfood3.jpg',
price: '50',
description: "Give your dog the taste of succulent steak accented with hearty vegetables in Pedigree Adult Complete Nutrition "
    
},
{
     
title: 'Frosty Paw Treats',
image: 'img/dogfood4.jpg',
price: '500',
description: "Purina FROSTY PAWS Peanut Butter Flavor Frozen Dog Treats come in a box of 4 irresistible frozen cups."
        
},
{
    title: 'Milk Bone Treats',
    image: 'img/dogfood1.jpg',
    price: '200',
    description: "These crunchy filled treats are made with real bone marrow, the great tasting part of the bone your dog craves."
    
    },
    {
    title: 'Beneful Original Food',
    image: 'img/dogfood2.jpg',
    price: '7,000',
    description: "Make mealtime for your adult dog as tasty as it is nutritious with Purina Beneful Originals with Real Beef Dry Dog Food."
    
    },
    {
         
    title: 'Purina One Chicken & Rice',
    image: 'img/dogfood3.jpg',
    price: '50',
    description: "Give your dog the taste of succulent steak accented with hearty vegetables in Pedigree Adult Complete Nutrition "
        
    },
    {
         
    title: 'Frosty Paw Treats',
    image: 'img/dogfood4.jpg',
    price: '500',
    description: "Purina FROSTY PAWS Peanut Butter Flavor Frozen Dog Treats come in a box of 4 irresistible frozen cups."
            
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