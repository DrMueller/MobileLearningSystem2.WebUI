export class ObjectUtils {
  public static isNullOrUndefined(obj: any): boolean {
    if (obj === null) {
      return true;
    }

    if (typeof obj === 'undefined') {
      return true;
    }

    return false;
  }
}
