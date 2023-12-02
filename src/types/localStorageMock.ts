export class localStorageMock {
  storage: { [key: string]: string } = {};

  getItem(key: string) {
    return this.storage[key] || null;
  }

  setItem(key: string, value: string) {
    this.storage[key] = value || "";
  }

  removeItem(key: string) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}
