/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file */
export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) throw new Error('имя должно быть от 2 до 10 символов');
    const toString = type.toString();
    const toOneCase = toString.toLowerCase();
    if (toOneCase !== 'bowman' && toOneCase !== 'swordsman' && toOneCase !== 'magician' && toOneCase !== 'deamon' && toOneCase !== 'undead' && toOneCase !== 'zombie') throw new Error('тип игрока может быть только Bowman, Swordsman, Magician, Deamon, Undead или Zombie');
    this.name = name,
    this.type = toOneCase,
    this.health = 100,
    this.level = 1,
    this.attack,
    this.defence;
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Deamon extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) throw new Error('Игрок уже в команде!');
    this.members.add(player);
  }

  addAll([...players]) {
    players.forEach((player) => this.members.add(player));
  }

  toArray() {
    return Array.from(this.members);
  }
}
