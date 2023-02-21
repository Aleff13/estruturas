//Busca binária

// A busca binaria consiste em dividir a lista no meio e verificar se o valor esta no meio, e ir dividindo a lista até encontrar o elemento

class BinarySearch {
  /**
   * Slices the list in two
   * @param list The list you want to slice
   * @param length The index of slice, default is half os @param list
   * @returns
   */
  static chunk(
    list: number[] | string[],
    length: number = Math.floor(list.length / 2)
  ) {
    let chunks = [];
    let i = 0;
    let n = list.length;

    while (i < n) {
      chunks.push(list.slice(i, (i += length)));
    }

    return { firstSlice: [...chunks[0]], secondSlice: [...chunks[1]] };
  }

  /**
   * Binary search implementation
   * @param list the list of values
   * @param value target value
   * @returns
   */
  static searchValueInList = (list: any[], value: string | number) => {
    //early return
    if (list[0] > value || list[list.length - 1] < value) {
      return `${value} is not in the list`;
    }

    const { firstSlice, secondSlice } = this.chunk(list);

    const elementInHalf = list[Math.floor(list.length / 2)];

    const firstOrLastInFirstSlice =
      firstSlice[firstSlice.length - 1] === value || firstSlice[0] === value;
    const firstOrLastInSecondSlice =
      secondSlice[secondSlice.length - 1] === value || secondSlice[0] === value;

    if (elementInHalf === value) {
      return `${value} found in half of ${list}`;
    }

    //verifica se é o ultimo elemento
    if (firstOrLastInFirstSlice) {
      return `${value} is first/last in first slice = ${firstSlice}`;
    }

    //verifica se é o ulitmo elemento
    if (firstOrLastInSecondSlice) {
      return `${value} is first/last in second slice = ${secondSlice}`;
    }

    //varifica se o valor esta na primeira parte
    if (firstSlice[firstSlice.length - 1] > value) {
      console.log(`Inside of first slice ${firstSlice}`);
      return this.searchValueInList(firstSlice, value);
    }

    //varifica se o valor esta na segunda parte
    if (secondSlice[secondSlice.length - 1] > value) {
      console.log(`Inside of second slice ${secondSlice}`);
      return this.searchValueInList(secondSlice, value);
    }
  };
}

export default BinarySearch;
