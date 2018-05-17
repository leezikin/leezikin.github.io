class Player {
  constructor(){
    this.health = 0
    this.doingRest = false
  }
  playTurn(warrior) {
    // Cool code goes here.

      if(warrior.health()<5 || this.doingRest){
        if(this.health > warrior.health()){
          warrior.walk('backward')
          this.health = warrior.health();
        }
        else{
            warrior.rest()
            if(warrior.health() < 20){
                this.doingRest = true;
            }
            else{
                this.doingRest = false;
            }
            this.health = warrior.health();

        }
      }


      else{
        if(warrior.feel().isUnit()){
          if(warrior.feel().getUnit().isHostile()){
              warrior.attack()
          }
          else{
              warrior.rescue()
          }

        }
        else{
          warrior.walk()
        }
      }
  }
}
