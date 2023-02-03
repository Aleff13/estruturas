class Errorfactory {
  static NotExists(value = "") {
    return `${value} not exists`;
  }

  static alreadyExists(value = "") {
    return `${value} already exists`;
  }
}

export default Errorfactory;
