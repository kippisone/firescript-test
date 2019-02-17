const Fruits = require('./Fruits').Fruits;
class Banana extends Fruits {
  constructor (opts) {
    this.isSweet = opts.isSweet;
  }

  peel () {
    throw new Error('No Bananas left!');
  }
}

module.exports.Banana = Banana;
module.exports.__esModule = true;
module.exports.__fsLocationMap = [
  [1, 8, 1, 7, 'Fruits'],
  [1, 20, 1, 24],
  [1, 8, 1, 36, 'Fruits'],
  [3, 1, 2, 1, 'class'],
  [3, 7, 2, 7, 'Banana'],
  [3, 22, 2, 22, 'Fruits'],
  [4, 3, 4, 3],
  [4, 15, 4, 14],
  [4, 16, 4, 16, 'opts'],
  [5, 5, 6, 5],
  [5, 10, 6, 10, 'isSweet'],
  [5, 20, 6, 20, 'opts'],
  [5, 25, 6, 25, 'isSweet'],
  [7, 3, 11, 3],
  [7, 3, 11, 3, 'peel'],
  [7, 8, 11, 7],
  [8, 5, 13, 5, 'throw'],
  [8, 11, 13, 10, 'new'],
  [8, 15, 13, 13, 'Error'],
  [8, 21, 13, 19],
  [10, 8, 18, 16, 'Banana'],
  [10, 8, 18, 25, 'Banana']
];
