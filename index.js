class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error ('EmptySortedList');
    // let max = Number.MIN_SAFE_INTEGER;
    // this.items.forEach((number) => {
      //   if (number >= max){
        //     max = number;
        //   }
        // })
        // return max
    return Math.max(...this.items)
  }
      
  min() {
    if (!this.items.length) throw new Error ('EmptySortedList');
    return Math.min(...this.items)
  }
  
  sum() {
    if (!this.items.length) return 0;
    let reduced = this.items.reduce((acc, cV) => acc + cV, 0)
    return reduced 
  }
  
  avg() {
    if (!this.items.length) throw new Error ('EmptySortedList');
    let averaged = this.sum()/this.items.length
    return averaged
  }
}

module.exports = SortedList;
