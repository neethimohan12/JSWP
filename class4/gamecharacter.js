function createCharacter(name, health, attackPower) {
  let lastAbilityTime = 0; // for cooldown
  const cooldown = 3000; // 3 seconds

  return {
    name,
    health,
    attackPower,

    // Method using 'this'
    describe() {
      console.log(`${this.name} - HP: ${this.health}, Attack: ${this.attackPower}`);
    },

    // Ability with cooldown using closure
    useAbility(target) {
      const now = Date.now();
      if (now - lastAbilityTime < cooldown) {
        console.log(`${this.name}'s ability is on cooldown! Wait a bit.`);
        return;
      }
      lastAbilityTime = now;
      const damage = this.attackPower * 2;
      target.health -= damage;
      console.log(`${this.name} used a powerful strike on ${target.name} for ${damage} damage!`);
    },

    // Basic attack method
    attack(target) {
      target.health -= this.attackPower;
      console.log(`${this.name} attacked ${target.name} for ${this.attackPower} damage.`);
    }
  };
}

// Create characters
const hero = createCharacter("Hero", 100, 15);
const villain = createCharacter("Villain", 120, 10);

// Describe characters
hero.describe();
villain.describe();

// Battle simulation
hero.attack(villain);
villain.attack(hero);

// Ability usage
hero.useAbility(villain);
hero.useAbility(villain); // Cooldown message

// Use bind to create battle function with fixed context
function battleTurn(target) {
  this.attack(target);
}

const heroTurn = battleTurn.bind(hero);
const villainTurn = battleTurn.bind(villain);

heroTurn(villain);
villainTurn(hero);

// Final state
hero.describe();
villain.describe();
