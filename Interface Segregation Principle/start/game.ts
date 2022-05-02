interface Entity {
  attackDamage: number;
  health: number;
  name: string;

  move(): void;
  attack(targetEntity: Entity): void;
  takeDamage(damage: number): void;
}

class Character implements Entity {
  attackDamage: number;
  health: number;
  name: string;
  constructor(attackDamage: number, health: number, name: string) {
    this.attackDamage = attackDamage;
    this.health = health;
    this.name = name;
  }
  move() {
    console.log(`${this.name} move`);
  }
  attack(targetEntity: Entity) {
    console.log(`${this.name} attacked ${targetEntity.name}
    for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }
  takeDamage(damage: number) {
    this.health = this.health - damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}
//! Turret cannot move and wall cannot attack, so we must segregate ENtity interface to smaller interface
class Turret implements Entity {
  attackDamage: number;
  health: number;
  name: string;
  constructor(attackDamage: number, health: number, name: string) {
    this.attackDamage = attackDamage;
    this.health = health;
    this.name = name;
  }
  attack(targetEntity: Entity) {
    console.log(`${this.name} attacked ${targetEntity.name}
    for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }
  takeDamage(damage: number) {
    this.health = this.health - damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Wall implements Entity {
  attackDamage: number;
  health: number;
  name: string;
  constructor(attackDamage: number, health: number, name: string) {
    this.attackDamage = attackDamage;
    this.health = health;
    this.name = name;
  }
  takeDamage(damage: number) {
    this.health = this.health - damage;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

const turret = new Turret(5, null, 'Turret');
const character = new Character(3, 100, 'Character');
const wall = new Wall(null, 200, 'Wall');
