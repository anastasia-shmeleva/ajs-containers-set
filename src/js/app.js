/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman, Swordsman, Magician, Deamon, Undead, Zombie, Team,
} from './players';

const bowman = new Bowman('Alex', 'bowman');
console.log(bowman);

const swordsman = new Swordsman('Max', 'Swordsman');
console.log(swordsman);

const magician = new Magician('Sam', 'Magician');
console.log(magician);

const deamon = new Deamon('Maze', 'Deamon');
console.log(deamon);

const undead = new Undead('Carl', 'Undead');
console.log(undead);

const zombie = new Zombie('Pop', 'Zombie');
console.log(zombie);

const team = new Team();
team.add(bowman);
// team.add(bowman);

team.addAll([zombie, magician, bowman]);
console.log(team);

console.log(team.toArray());
