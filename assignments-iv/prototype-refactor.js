/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/* Previous code
function GameObject(character) {
    this.createdAt = character.createdAt;
    this.name = character.name;
    this.dimensions = character.dimensions;
  };
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`
  };
*/

class GameObject {
  constructor(gameAttrs) {
    this.createdAt = gameAttrs.createdAt;
    this.name = gameAttrs.name;
    this.dimensions = gameAttrs.dimensions;
  }
  destroy () {
    return `${this.name} was removed from the game.`
  }
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  /* Previous code
  function CharacterStats(character) {
    this.healthPoints = character.healthPoints;
    GameObject.call(this, character);
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  };
  */

class CharacterStats extends GameObject {
  constructor(statsAttrs) {
    super(statsAttrs);
    this.healthPoints = statsAttrs.healthPoints;
  }
  takeDamage (amount) {
    if(!amount) {
      amount = 0;
    }
    this.healthPoints = this.healthPoints - amount;
    if(this.healthPoints <= 0) {
      this.result = this.destroy();
    } else {
      this.result = `${this.name} has ${this.healthPoints} health points remaining.`;
    }
    return `${this.name} took ${amount} damage. ${this.result}`
  }
}

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

  /* Previous code
  function Humanoid(character) {
    this.team = character.team;
    this.weapons = character.weapons;
    this.language = character.language;
    CharacterStats.call(this, character);
  };
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function() {
    return `${this.name} offers greeting in ${this.language}.`;
  };
  */

class Humanoid extends CharacterStats {
  constructor(humanoidAttrs) {
    super(humanoidAttrs);
    this.team = humanoidAttrs.team;
    this.weapons = humanoidAttrs.weapons;
    this.language = humanoidAttrs.language;
  }
  greet () {
    return `${this.name} offers greeting in ${this.language}.`;
  }
}

  // TRY TO STRETCH
  /* Previous code
  function Hero(character) {
    Humanoid.call(this, character);
  };
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.dealDamage = function(target) {
    console.log(`${this.name}'s ${this.weapons[0]} injures ${target.name}!`);
    return target.takeDamage();
  
  };
  */

  class Hero extends Humanoid {
  constructor(heroAttrs) {
    super(heroAttrs);
  }
  dealDamage(target) {
    console.log(`${this.name}'s ${this.weapons[0]} injures ${target.name}!`);
    return target.takeDamage(Math.floor(Math.random() * 5));
  }
}
  

  /* Previous code
  function Villain(character) {
    Humanoid.call(this, character);
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.takeAppendage = function(target) {
    return `${this.name} took an appendage from ${target.name}!`;
  }
  */

class Villain extends Humanoid {
  constructor(villainAttrs) {
    super(villainAttrs);
  }
  takeAppendage(target) {
    console.log(`${this.name} attempted to take an appendage from ${target.name}!`);
    return target.takeDamage(Math.floor(Math.random() * 3));
  }
}

  /*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const heroCharacter = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 2,
    },
    healthPoints: 12,
    name: 'Bruce Campbell',
    team: 'Raimi',
    weapons: [
      'boomstick',
    ],
    language: 'English',
  });
  
  const villainCharacter = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Zombie Face',
    team: 'Zombie Body',
    weapons: [
      'Other People',
    ],
    language: 'Death Tongue',
  });
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    
    // Previous STRETCH TESTS
  //  console.log(heroCharacter.dimensions);
  //  console.log(heroCharacter.weapons);
  //  console.log(heroCharacter.greet());
  //   console.log(heroCharacter.takeDamage());
  //   console.log(heroCharacter.dealDamage(villainCharacter));
  //   console.log(villainCharacter.takeAppendage(heroCharacter));
  //   console.log(heroCharacter.dealDamage(villainCharacter));
  //   console.log(heroCharacter.dealDamage(villainCharacter));


while(villainCharacter.healthPoints >= 0) {
  console.log(heroCharacter.dealDamage(villainCharacter));
  if(villainCharacter.healthPoints <= 0) {
    return console.log(`${villainCharacter.name} has been destroyed!`);
  }
  console.log(villainCharacter.takeAppendage(heroCharacter));
  if(heroCharacter.healthPoints <= 0) {
    return console.log(`${heroCharacter.name} has been killed.`);
  }
}
