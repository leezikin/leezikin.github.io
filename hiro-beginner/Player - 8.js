class Player {
  constructor(){
    this.health = 0
    this.doingRest = false
    this.isRescue = false

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

      switch (this.whatInSight(warrior)){
          case 2:
            if(!warrior.feel().isUnit()){
              warrior.walk();
            }
            else {
              warrior.rescue();
            }
            break;
          case 1:
            warrior.shoot();
            break;
          case 0:
            warrior.walk();
            break;
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
}
