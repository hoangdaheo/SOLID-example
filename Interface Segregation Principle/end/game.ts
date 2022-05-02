interface Entity {
  name: string;
}
interface Mover {
  move(): void;
}
interface Attacker {
  attack(targetEntity: Entity): void;
}
interface HasHealth {
  takeDamage(damage: number): void;
}
class Character implements Entity, Mover, Attacker, HasHealth {
  name: string;
  attackDamage: number;
  health: number;
  constructor(name: string, attackDamage: number, health: number) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  takeDamage(damage: number) {
    this.health = this.health - damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
  attack<T extends Entity & HasHealth>(targetEntity: T) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  move() {
    console.log(`${this.name} move`);
  }
}

class Wall implements Entity, HasHealth {
  name: string;
  health: number;
  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }
  takeDamage(damage: number) {
    this.health = this.health - damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Turret implements Attacker, Entity {
  constructor(public name: string, public attackDamage: number) {}
  attack<T extends Entity & HasHealth>(targetEntity: T) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
}

const turret = new Turret('Turret', 4);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.attack(wall);
character.move();
