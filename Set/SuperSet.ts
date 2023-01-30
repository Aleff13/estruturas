import SetTs, { SetInterface } from "./Set";

interface SuperSetInterface extends SetInterface {
  union(set: SetTs | SuperSetInterface): SetTs | SuperSetInterface;
  intersection(set: SetTs | SuperSetInterface): SetTs | SuperSetInterface;
  difference(set: SetTs | SuperSetInterface): SetTs | SuperSetInterface;
  isSubsetOf(set: SetTs | SuperSetInterface): boolean;
}

/**
 * This class implements super methods to work with math and "sql" problems
 * All methods are pure, don't have changes on this.items
 */
class SuperSet extends SetTs implements SuperSetInterface {
  /**
   * returns a set where set union this.set
   * @param otherSet
   */
  union(otherSet: SetTs | SuperSetInterface): SetTs | SuperSetInterface {
    const unionSet = new SetTs()
    let values = this.values()   // is an array like [1, 2, 3, ... n]

    values.forEach(val => {
        unionSet.add(val)   //this method does not allow repetition
    })

    values = otherSet.values();   //is another array

    values.forEach(val => {
        unionSet.add(val)    //this method does not allow repetition
    })
    
    //when the iteration use .add with this.values() and otherSet.values() the new set dont have repetition
    return unionSet
  }

  /**
   * returns a set where set intersection this.set
   * @param otherSet
   */
  intersection(otherSet: SetTs | SuperSetInterface): SetTs | SuperSetInterface {
    const intersectionSet = new SetTs()
    let values = this.values()

    values.forEach(val => {
        if (otherSet.has(val)) {    //se contém o valor do outro conjunto
            intersectionSet.add(val)
        }
    })

    return intersectionSet
  }

  /**
   * returns a set where set - this.set
   * Tudo que temos em this.set tirando otherSet
   * @param otherSet
   */
  difference(otherSet: SetTs | SuperSetInterface): SetTs | SuperSetInterface {
    const difference = new SetTs()
    let values = this.values()

    values.forEach(val => {
      if (!otherSet.has(val)) {
        difference.add(val)
      }
    })

    return difference
  }

  /**
   * returns a boolean where this.set isSubsetOf otherSet
   * Basicamente verifica se this.set está contido em otherSet
   * @param otherSet
   */
  isSubsetOf(otherSet: SetTs | SuperSetInterface): boolean {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true;
    this.values().every(value => {
      if(!otherSet.has(value)) {
        isSubset = false;
        return false
      }
      return true
    })
    return isSubset
  }
}

export default SuperSet;

