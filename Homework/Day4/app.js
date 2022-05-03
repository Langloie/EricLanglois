//item entered on screen
let new_item = '';

//list of entered items
let list = [];

//quantity of new item on screen
let quantity = 0;

//directory of all grocery items in store
let directory = ["Milk", "Bread", "Eggs", "Ground beef"];

//unit of measurement of items in store
let unit = ["(gallon)", "(loaf)", "(dozen)", "(lbs)"];

var index = 0;

//click_enter = true;
//click_plus = true;
//click_minus = true;

for(let i=0;directory[i]!=new_item;i++){
        index = i;
}

if(click_plus == true){
    quantity = quantity + 1;
    //console.log("Quantity equals",quantity);
}

if(click_minus == true){
    if(quantity > 0 ){
        quantity = quantity - 1;
        //console.log("Quantity equals",quantity);
    }
}

//when enter is clicked on screen, new_item is put in list and cleared
if (click_enter == true){
    new_item = input_textbox;
    //console.log("Quantity equals",new_item);
    list =  [list,new_item,unit[index]];
    new_item = null;
    //console.log("List now contains",list);
    //console.log("Item is null now.",new_item);
    

}