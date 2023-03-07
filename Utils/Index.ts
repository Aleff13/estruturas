export enum CompareEnum {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export const compare = <T>(a: T, b: T): number => {
  if (a === b) {
    return CompareEnum.EQUALS;
  }
  return a < b ? CompareEnum.LESS_THAN : CompareEnum.BIGGER_THAN;
};

export const defaultEquals = (a: string | number, b: string | number) => {
  return a === b;
};
