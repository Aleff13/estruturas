class Sort {
  /**
   * Performs a sort selection in a list of numbers
   * @param list
   * @param sortBy if true return lowest to higher, if false reverse
   * @returns
   *
   * Iterates the list to find the lowest value, save the lowest value in the next index
   *
   * Its a great algorithm for a little list, no for big list
   */
  static selection(list: number[], sortBy = true): number[] {
    let swapPosition: number;

    for (let current = 0; current < list.length; current++) {
      swapPosition = current;

      for (let unSorted = current + 1; unSorted < list.length; unSorted++) {
        const order = sortBy
          ? list[unSorted] < list[current]
          : list[unSorted] > list[current];

        if (order) {
          swapPosition = unSorted; //swapPosition now is the lowest value inside this iteration
        }
      }

      const swapPositionHasChanged = swapPosition != current;

      if (swapPositionHasChanged) {
        //if swapPosition has changed in previous loop we need to swap values
        [list[current], list[swapPosition]] = [
          list[swapPosition],
          list[current],
        ]; //swaping values
      }
    }

    return list;
  }

  /**
   * Sort a list of numbers with insertion sort
   * @param list
   * @param sortBy if true return lowest to higher, if false reverse
   * @returns
   */
  static insertion(list: number[], sortBy = true): number[] {
    if (!sortBy) {
      return this.insertionDesc(list); //call insertion desc
    }

    for (let current = 0; current < list.length; current++) {
      //iterates each element in the list

      let value = list[current]; //get current value by index
      let previous = current - 1; //get previous index

      while (previous >= 0 && value < list[previous]) {
        //iterates while current value is lowest than previous value
        list[previous + 1] = list[previous]; //change the position of current value in list to left
        previous = previous - 1; //reduces previous index
      }

      list[previous + 1] = value; //save the value in correct position
    }

    return list;
  }

  private static insertionDesc(list: number[]): number[] {
    for (let current = 0; current < list.length; current++) {
      let value = list[current];
      let previous = current - 1;

      while (previous >= 0 && value > list[previous]) {
        list[previous - 1] = list[previous];
        previous = previous + 1;
      }

      list[previous + 1] = value;
    }
    return list;
  }

  static counting(list: number[]): number[] {
    let count = new Array(); //array counter
    const listSize = list.length;
    let result = [];

    // count = [0, 0, 0, 0, 0, ... 0]
    for (let currentIndex = 0; currentIndex < listSize; currentIndex++) {
      count[currentIndex] = 0;
    }

    // count = [1, 0, 2, 1, 0, 1, 4, ... 1]
    for (let currentIndex = 0; currentIndex < listSize; currentIndex++) {
      const currentValue = list[currentIndex];
      count[currentValue] += 1;
    }

    // monta o novo array com base na quantidade de ocorrencias no contador
    for (let currentIndex = 0; currentIndex < listSize; currentIndex++) {
      for (let j = 0; j < count[currentIndex]; j++) {
        result.push(currentIndex);
      }
    }

    return result;
  }

  static listGenerator(size: number): number[] {
    const list = [];
    const max = 10;

    for (let i = 0; i < size; i++) {
      let number = Math.floor(Math.random() * max);
      list.push(number);
    }

    return list;
  }

  static bubbleSort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        const next = j + 1;
        if (list[j] > list[next]) {
          [list[j], list[next]] = [list[next], list[j]]; //swap values
        }
      }
    }

    return list;
  }
}

export default Sort;

// const bigList = Sort.listGenerator(100000);
// const smallList = Sort.listGenerator(10);

// console.log(Sort.counting(smallList));

// console.time("Selection big list");
// Sort.selection(bigList);
// console.timeEnd("Selection big list");

// console.time("Insertion big list");
// Sort.insertion(bigList);
// console.timeEnd("Insertion big list");

// console.time("Selection small list");
// Sort.selection(smallList);
// console.timeEnd("Selection small list");

// console.time("Insertion small list");
// Sort.insertion(smallList);
// console.timeEnd("Insertion small list");

// console.time("Insertion small list");
// console.table(smallList);
// console.table(Sort.bubbleSort(smallList));
// console.timeEnd("Insertion small list");
