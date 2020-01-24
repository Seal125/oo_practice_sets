class MySet {
  constructor() {
    this.data = [];
  }

  add(el) {
    if(!this.data.includes(el)) {
      this.data.push(el);
      return this.data;
    }
  }

  delete(el) {
    if(this.data.includes(el)) {
      this.data.splice(this.data.indexOf(el), 1);
      return 'Successfully deleted.';
    }
  }

  has(el) {
    if(this.data.includes(el)) {
      return true;
    }
    return false;
  }

  static from(arr) {
    let newSet = new MySet();
    newSet.data = arr;
    return newSet;
  }
}

let myset = MySet.from([10, 20]);
console.log(myset.has(10));
// → true
console.log(myset.has(30));
// → false
myset.add(10);
myset.delete(10);
console.log(myset.has(10));
// → false