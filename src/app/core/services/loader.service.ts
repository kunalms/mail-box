import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly NULL_KEY = 'NULL_KEY';
  private keys: any = [];

  constructor() {
  }

  /**
   * @param key - input key.
   * @returns (string) returns the input key if its a string or else returns 'NULL_KEY'
   * @private
   */
  private stringKey(key?: string | object): string {
    if (typeof key !== 'string') {
      key = this.NULL_KEY;
    }
    return key;
  }

  /**
   * Show the standard (full screen) loader.  If multiple shows have been called
   * without a subsequent hide (using the same key argument), the loader will not
   * be hidden until the hide has been called with all key values provided by the
   * show calls.  Allows for nested calls to show/hide.
   * When to use a key:  Use when there may be multiple concurrent (either in the same
   * controller/directive or separate nested directive/controllers) data requests or
   * long running operations and the standard loader should remain showing until all
   * are complete to prevent the loader from hiding too soon.
   * @param key (optional) - if a string is provided, it is used to identify a key
   * to wait for the same key to passed to the hide method before actually hiding
   * the loader.  If not provided or it's not a string, the NULL_KEY will be
   * used for the key.
   * NOTE: using a key is not expected to solve a double loader problem.
   */
  show(key?: string | object): void {
    this.keys.push(this.stringKey(key));
  }

  private removeItem(array: string[], item: string): string[] {
    return array.filter((i) => i !== item);
  }

  /**
   * Hides the standard loader.
   * @param key (optional) - if a string is provided, it is used to identify a key
   * to wait for the same key to passed to the hide method before actually hiding
   * the loader.  If not provided or it's not a string, the NULL_KEY will be
   * used for the key.
   * NOTE: show is always called as loader.show(), whereas hide is sometimes called as a function,
   * and sometimes passed as a callback function reference, where it does not execute the function
   * if not defied as a arrow function (used in manage-tags.component, privacy.component, and many
   * other such places used as finally(loader.hide);
   */
  hide = (key?: string | object): void => {
    const stringKey = this.stringKey(key);
    this.keys = this.removeItem(this.keys, stringKey);
  }

  /**
   * @returns true, if there have been calls to show without corresponding calls to hide, false otherwise.
   */
  isActive(): boolean {
    return this.keys.length !== 0;
  }

}
