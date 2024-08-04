
let bagItems;

onLoad();
//load funciton banaya hai jisme  displayItemsOnHomePage ko call kiya jisme sara image hai
function onLoad(){
    let bagItemsStr=bagItems=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();  //pahle isliye call kiya ki count zero ho to element na dikhe.

}

//function of all element in bag
function addToBag(itemId){
    bagItems.push(itemId);

    localStorage.setItem('bagItems',JSON.stringify(bagItems));

    displayBagIcon();   //call displayBagIcon taki jab koi element add ho to value update ho jaye.
}


//function of count element in bag function
function displayBagIcon(){
    let bagItemCountElement=document.querySelector(".bag-item-count");
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerHTML=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}


//display funtion of all item
function displayItemsOnHomePage(){
    
let itemsContainerElement=document.querySelector('.items-container');
if(!itemsContainerElement){
    return;
}

let innerHTML='';
items.forEach(item=>{
    innerHTML+=`
<div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐| ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>
`
});


itemsContainerElement.innerHTML=innerHTML;

}

