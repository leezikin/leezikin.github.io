class Player {
  constructor(){
    this.health = 0
    this.doingRest = false
    this.isRescue = false
  }
  playTurn(warrior) {
      // Cool code goes here.

      if(this.feelTheWall(warrior)){
        warrior.pivot()
      }
      else{
              if(warrior.health()<10 || this.doingRest){
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

      //
      // if(!this.isRescue){
      //     if(warrior.feel('backward').isUnit()){
      //         if(warrior.feel('backward').getUnit().isFriendly()){
      //             warrior.rescue('backward')
      //             this.isRescue = true;
      //         }
      //     }
      //     else{
      //         warrior.walk('backward')
      //     }
      // }
      // else{
      //     if(warrior.health()<10 || this.doingRest){
      //         if(this.health > warrior.health()){
      //             warrior.walk('backward')
      //             this.health = warrior.health();
      //         }
      //         else{
      //             warrior.rest()
      //             if(warrior.health() < 20){
      //                 this.doingRest = true;
      //             }
      //             else{
      //                 this.doingRest = false;
      //             }
      //             this.health = warrior.health();
      //
      //         }
      //     }
      //
      //
      //     else{
      //         if(warrior.feel().isUnit()){
      //             if(warrior.feel().getUnit().isHostile()){
      //                 warrior.attack()
      //             }
      //             else{
      //                 warrior.rescue()
      //             }
      //
      //         }
      //         else{
      //             warrior.walk()
      //         }
      //     }
      //
      // }



  }

  feelTheWall(warrior){
      return warrior.feel().isWall();
  }
}
