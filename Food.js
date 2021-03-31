class Food {
    constructor() {
     this.foodStock = 0
     this.image = loadImage('images/Milk.png')
    }
    // update(state){
    //  database.ref('/').update({

    //  })
   // }
    getFoodStock(){
      return this.foodStock
    }
    updateFoodStock(foodStock){
      this.foodStock = foodStock
    }
    display(){
      var x = 80,y = 100;
//  feed = createbutton("Feed the dog")
//  feed.position(700,95)
//  feed.mousePressed(feedDog)


// addFood = createbutton("Add Food")
// addFood.position(800,95)
// addFood.mousePressed(addFoods)




      imageMode(CENTER)
      image(this.image,720,220,70,70)
      if (this.foodStock!= 0) {
          for(var i=0; i<this.foodStock; i=i+10){
              if (i%10==0) {
                  x = 80
                  y = y+5
              }
            
          }
     }
     // rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };