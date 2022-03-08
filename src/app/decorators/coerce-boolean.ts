export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

export function CoerceBoolean() {
  return (target: any, key: string): void => {
    const getter = function (this: any) {
      return this['_' + key];
    };

    const setter = function (this: any, next: any) {
      this['_' + key] = coerceBooleanProperty(next);
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
