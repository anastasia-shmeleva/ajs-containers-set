/* eslint-disable no-new */
/* eslint-disable no-undef */
import {
  Character, Bowman, Swordsman, Magician, Deamon, Undead, Zombie, Team,
} from '../js/players';

test('Character', () => {
  expect(new Character('Alex', 'magician')).toEqual({
    name: 'Alex', type: 'magician', health: 100, level: 1,
  });
});

test('Bowman', () => {
  expect(new Bowman('Alex', 'Bowman')).toEqual({
    name: 'Alex', type: 'bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('Swordsman', () => {
  expect(new Swordsman('Alex', 'Swordsman')).toEqual({
    name: 'Alex', type: 'swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('Magician', () => {
  expect(new Magician('Alex', 'Magician')).toEqual({
    name: 'Alex', type: 'magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('Deamon', () => {
  expect(new Deamon('Alex', 'Deamon')).toEqual({
    name: 'Alex', type: 'deamon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('Undead', () => {
  expect(new Undead('Alex', 'Undead')).toEqual({
    name: 'Alex', type: 'undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('Zombie', () => {
  expect(new Zombie('Alex', 'Zombie')).toEqual({
    name: 'Alex', type: 'zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('Error name', () => {
  expect(() => {
    new Bowman('B', 'bowman');
    throw new Error('имя должно быть от 2 до 10 символов');
  }).toThrow();
});

test('Error type', () => {
  expect(() => {
    new Bowman('Bob', 'cat');
    throw new Error('тип игрока может быть только Bowman, Swordsman, Magician, Deamon, Undead или Zombie');
  }).toThrow();
});

// Tests for the current homework

test('Team', () => {
  expect(new Team()).toEqual({ members: new Set() });
});

const bowman = new Bowman('Alex', 'bowman');
const zombie = new Zombie('Pop', 'Zombie');
const magician = new Magician('Sam', 'Magician');
const team = new Team();

test('add player to the team', () => {
  team.add(bowman);
  expect(team.members).toContainEqual({
    name: 'Alex', type: 'bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('add multiple players to the team', () => {
  team.addAll([zombie, magician, bowman]);
  expect(team.members).toContainEqual({
    name: 'Alex', type: 'bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Pop', type: 'zombie', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Sam', type: 'magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('convert Set to Array', () => {
  team.addAll([zombie, magician, bowman]);
  expect(team.toArray()).toEqual([{
    attack: 25, defence: 25, health: 100, level: 1, name: 'Alex', type: 'bowman',
  }, {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Pop', type: 'zombie',
  }, {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Sam', type: 'magician',
  }]);
});

test('Error double player', () => {
  expect(() => {
    team.add(bowman);
    throw new Error('Игрок уже в команде!');
  }).toThrow();
});
