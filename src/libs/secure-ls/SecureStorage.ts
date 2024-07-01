import SecureLS from "secure-ls";

export default class SecureStorage {
  private secureLS: SecureLS;

  static instance: SecureStorage;

  constructor() {
    this.secureLS = new SecureLS({ encodingType: 'aes' });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new SecureStorage();
    }

    return this.instance;
  }

  public getByKey(key: string) {
    return this.secureLS.get(key);
  }

  public setByKey(key: string, data: any) {
    this.secureLS.set(key, data);
  }

  public removeByKey(key: string) {
    this.secureLS.remove(key);
  }

  public removeAll() {
    this.secureLS.removeAll();
  }
}
