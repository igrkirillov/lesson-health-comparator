import sort from '../characterOrderUtils';

class Character {
  constructor(health, name) {
    this.health = health;
    this.name = name;
  }
}

const ch1 = new Character(80, 'Lion');
const ch2 = new Character(20, 'Monkey');
const ch3 = new Character(10, 'Rabbit');

const sortedCharacters = [ch1, ch2, ch3];

test.each([
  [[ch3, ch2, ch1], sortedCharacters],
  [[ch3, ch1, ch2], sortedCharacters],
  [[ch2, ch1, ch3], sortedCharacters],
  [[ch2, ch3, ch1], sortedCharacters],
  [[ch1, ch2, ch3], sortedCharacters],
  [[ch1, ch3, ch2], sortedCharacters],
])('test health sort with characters %o', (characters, expected) => {
  expect(sort(characters)).toEqual(expected);
});
