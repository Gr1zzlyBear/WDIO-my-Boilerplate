// this page called is base page; page factory
export default class Page {
    constructor() {}
    open(path) {
      browser.url(path);
    }
  };

