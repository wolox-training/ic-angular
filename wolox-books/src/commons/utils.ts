export default class Utils {
  /**
   * Returns an object that contains properties with the name of type `SnakeCase` from an object with properties of the `CamelCase` type.
   * @param any Object that contains properties of the `CamelCase` type.
   */
  static getPropsSnakeFromCamel(object: any) {
    const snakeObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = snakeObject[camelToSnake(key)] = object[key];
        if (typeof (element) === 'object' && element) {
          snakeObject[camelToSnake(key)] = this.getPropsSnakeFromCamel(element);
        }
      }
    }
    return snakeObject;
  }
}

/**
 * Returns a string `SnakeCase` from a string `CamelCase`.
 * @param string string `CamelCase`.
 */
function camelToSnake(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
