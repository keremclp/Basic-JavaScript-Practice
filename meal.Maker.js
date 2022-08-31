const menu = {
    _meal : '',
    _price : 0,

    set meal(mealToCheck){
        if (typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },

    set price(priceToCheck){
        if (typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        }
    },

    get todaysSpecial(){
        if(typeof this._meal === 'string' && typeof this._price === 'number'){
            return `Today's special is ${this._meal} for ${this._price} dollars.`;
        }
        else{
            return 'Please enter a meal and price.';
        }
        
    }

}

menu.meal = 'Chicken';
menu.price = 10;
console.log(menu.todaysSpecial);