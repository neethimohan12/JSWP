// Player class for our game
class Player {
 constructor(name, health = 100) {
 this.name = name;
 this.health = health;
 this.score = 0;
 this.items = [];
 }
 takeDamage(amount) {
 this.health -= amount;
 if (this.health <= 0) {
 this.health = 0;
 console.log(`${this.name} has been defeated!`);
 }
 }
 collectItem(item) {
 this.items.push(item);
 this.score += 10;
 console.log(`${this.name} collected ${item}!`);
 }
}

// Enemy class
class Enemy {
 constructor(type, damage = 10) {
 this.type = type;
 this.damage = damage;
 }
 attack(player) {
 console.log(`${this.type} attacks!`);
 player.takeDamage(this.damage);
 }
}
// Game in action
const hero = new Player("Hero");
const goblin = new Enemy("Goblin", 15);
hero.collectItem("Sword");
goblin.attack(hero);
console.log(`Health: ${hero.health}, Score: ${hero.score}`);