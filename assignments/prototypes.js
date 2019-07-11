/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
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
function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


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

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
function Villain(villainAttrs) {
  Humanoid.call(this, villainAttrs);
  this.power = villainAttrs.power;
  this.type = 'villain';
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.laugh = function () {
  return `${this.name} cackles maniacally!`;
}
Villain.prototype.attack = function (hero) {
  if (hero.type === 'hero') {
    return `${this.name} attacks with ${this.weapons} cutting ${hero.name}'s health to ${hero.healthPoints - 10}!`;
  }
}
Villain.prototype.raiseDead = function (hero) {
  return `${this.name} raises hundreds of decomposing corpses from the battlefield. He whispers with a frosty breath, commanding them to slay ${hero.name} and his allys!!`
}

function Hero(heroAttrs) {
  Humanoid.call(this, heroAttrs);
  this.power = heroAttrs;
  this.type = 'hero';
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.save = function () {
  return `${this.name} attempts to save his party from the Villains tyranny! *he's successful!*`;
}
Hero.prototype.divineShield = function () {
  return `${this.name} uses Divine Shield! ${this.name}'s health raises to ${this.healthPoints + 20}!`;
}
Hero.prototype.lastStand = function (villain) {
  if (villain.type === 'villain') {
    return `${this.name} slams ${this.weapons} on the ground with angelic force elminating all of the undead from the battlefield! ${this.name} lunges at ${villain.name} with a final strike, the death knight doubles over, defeated. ${villain.destroy()}`
  }
}


const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 3
  },
  healthPoints: 15,
  name: 'Tirion Fordring',
  team: 'Paladins Guild',
  weapons: 'Ashbringer',
  language: [
    'Common Tongue',
    'Holy Tongue'
  ]
});

const deathKnight = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 3,
    height: 4
  },
  healthPoints: 20,
  name: 'Arthas Menethil',
  team: 'The Scourge',
  weapons: 'Frostmourne',
  language: [
    'Common Tongue',
    'Holy Tongue',
    'Elvish',
    'Undead'
  ]
});
console.log(deathKnight.laugh());
console.log(deathKnight.attack(paladin, deathKnight));
console.log(paladin.divineShield(paladin));
console.log(deathKnight.raiseDead(deathKnight, paladin));
console.log(paladin.save());
console.log(paladin.lastStand(deathKnight));