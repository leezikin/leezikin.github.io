class Player {
  constructor(){
    this.health = 0
    this.doingRest = false

    this.rescue = false
    this.backwardJobDone = false
  }

  playTurn(warrior) {
      // Cool code goes here.

              // if(warrior.health()<10 || this.doingRest){
              //     if(this.health > warrior.health()){
              //         warrior.walk('backward')
              //         this.health = warrior.health();
              //     }
              //     else{
              //         warrior.rest()
              //         if(warrior.health() < 20){
              //             this.doingRest = true;
              //         }
              //         else{
              //             this.doingRest = false;
              //         }
              //         this.health = warrior.health();
              //
              //     }
              // }



          //first look backward
          if(!this.backwardJobDone){
              switch (this.whatInSight(warrior,'backward')){
                  case 2:
                      if(!warrior.feel('backward').isUnit()){
                          warrior.walk('backward');
                      }
                      else {
                          // if(!this.rescue){
                              // this.rescue = true;
                          // }
                          warrior.rescue('backward');

                      }
                      break;
                  case 1:
                      warrior.shoot('backward');
                      break;
                  case 0:
                      this.backwardJobDone = true;
                      break;
              }
          }
          else{



              switch (this.whatInSight(warrior)){
                  case 2:
                      if(!warrior.feel().isUnit()){
                          warrior.walk();
                      }
                      else {
                          if(!this.rescue){
                              this.rescue = true;
                          }
                          warrior.rescue();

                      }
                      break;
                  case 1:
                      warrior.shoot();
                      break;
                  case 0:
                      // if(this.rescue){
                      //     warrior.pivot();
                      //     this.rescue = false;
                      // }
                      // else{
                          if(this.feelTheWall(warrior)){
                              warrior.pivot();
                          }
                          else{
                              warrior.walk();
                          }

                      // }
                      break;
              }
          }




  }

  feelTheWall(warrior){
      return warrior.feel().isWall();
  }
  whatInSight(warrior){
      const NOTHING = 0;
      const ENEMEY = 1;
      const CAPTIVE = 2;
      const spaceWithUnit = warrior.look().find(space => space.isUnit());

      if(spaceWithUnit && spaceWithUnit.getUnit().isHostile()){
        return ENEMEY;
      }
      else if(spaceWithUnit && spaceWithUnit.getUnit().isFriendly()){
        return CAPTIVE;
      }
      return NOTHING;

  }
    whatInSight(warrior,direction){
        const NOTHING = 0;
        const ENEMEY = 1;
        const CAPTIVE = 2;
        const spaceWithUnit = warrior.look(direction).find(space => space.isUnit(direction));

        if(spaceWithUnit && spaceWithUnit.getUnit(direction).isHostile()){
            return ENEMEY;
        }
        else if(spaceWithUnit && spaceWithUnit.getUnit(direction).isFriendly()){
            return CAPTIVE;
        }
        return NOTHING;

    }

}
