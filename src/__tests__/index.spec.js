import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it('Return corrent value. (string to upper or lower case', () => {
    expect(changeStringCase('Hello world, its me.', 'lowercase')).toEqual(
      'hello world, its me.'
    );
    expect(changeStringCase('Hello world, its me.', 'uppercase')).toEqual(
      'HELLO WORLD, ITS ME.'
    );
    expect(changeStringCase('Hello world, its me.')).toEqual(
      'Hello world, its me.'
    );
  });
  // describe('If 2nd arg in the func - lowercase', () => {
  //   it('Func will change a curr string to string in lowercase', () => {
  // expect(changeStringCase('Hello world, its me.', 'lowercase')).toEqual(
  //   'hello world, its me.'
  // );
  //   });
  // });
  // describe('If 2nd arg in the func - uppercase', () => {
  //   it('Func will change a curr string to string in uppercase', () => {
  // expect(changeStringCase('Hello world, its me.', 'uppercase')).toEqual(
  //   'HELLO WORLD, ITS ME.'
  // );
  //   });
  // });
  // describe("If 2nd arg isn't in Lower or Upper case", () => {
  //   it('Func will return an original string', () => {
  // expect(changeStringCase('Hello world, its me.')).toEqual(
  //   'Hello world, its me.'
  // );
  //   });
  // });
});

describe('sumOfArray()', () => {
  describe('If typeof currentValue is Number', () => {
    const array = [1, 2, 3, 4, 5, 6];
    it('Func will return summOf accumulator & currentValue', () => {
      expect(sumOfArray(array)).toEqual(21);
    });
  });
  describe('If typeof currentValue = string, ignore it', () => {
    const secondArray = [1, 'test', 3, 'wtf', 4, 5, 6];
    it('Func will return summOf accumulator & currentValue without (string-value of array)', () => {
      expect(sumOfArray(secondArray)).toEqual(19);
    });
  });
  describe('If typeof currentValue only String or not a number', () => {
    const thirdArray = ['test', false, 'test'];
    it('Func will return accumulator (0)', () => {
      expect(sumOfArray(thirdArray)).toEqual(0);
    });
  });
});

describe('divisibleBy()', () => {
  describe('When the array has only Number-value', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func should return num % number === 0', () => {
      expect(divisibleBy(array, 2)).toEqual([2, 4, 6, 8]);
    });
  });
  describe('When the array has only String-value', () => {
    it('Func should return only an emply array[]', () => {
      const array = ['str', 'str', 'str'];
      expect(divisibleBy(array, 2)).toEqual([]);
    });
  });
  describe('When the second arg it is 0', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func should return an empty array[]', () => {
      expect(divisibleBy(array, 0)).toEqual([]);
    });
  });
  describe('When the second arg it is String', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('Func should return an empty array[]', () => {
      expect(divisibleBy(array, 'someStr')).toEqual([]);
    });
  });
});

describe('addDotsToString()', () => {
  describe('If the str > 2nd argument (length)', () => {
    const str = 'Hello world';
    it('Func should return sliced string from 0 to 2arg(length)-3+...', () => {
      expect(addDotsToString(str, 5)).toEqual('He...');
    });
  });
  describe('If the str < 2nd argument (length)', () => {
    const str = 'Hello world';
    it('Func should return original str', () => {
      expect(addDotsToString(str, 20)).toEqual(str);
    });
  });
  describe('If the 2nd arg (length)=0', () => {
    const str = 'Hello world';
    it('Func should return original str', () => {
      expect(addDotsToString(str, 0)).toEqual('Hello wo...');
    });
  });
  describe('If the 2nd does not exist', () => {
    const str = 'Hello world';
    it('Func should return original str', () => {
      expect(addDotsToString(str)).toEqual(str);
    });
  });
});

describe('objectEntries()', () => {
  describe('If the object has key and value', () => {
    const object = {
      name: 'Jimmy',
      age: 24,
    };
    it('Func should return rebuild obj into Array with obj.key-name', () => {
      expect(objectEntries(object)).toEqual([
        ['name', 'Jimmy'],
        ['age', 24],
      ]);
    });
  });
  describe("If the object doesn't have key and value", () => {
    const object = {};
    it('Func should return rebuild obj into Array with obj.key-name', () => {
      expect(objectEntries(object)).toEqual([]);
    });
  });
});
