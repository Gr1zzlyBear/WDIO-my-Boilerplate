const Url = "";

import Page from "./page.js";

class SearchBar extends Page {
  get Searchbar() {
    return $('[id="realbox"]');
  }
}
export default new SearchBar();
