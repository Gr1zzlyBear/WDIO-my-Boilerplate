const Url = "";

import Page from "./page.js";

class SearchBar extends Page {
  get Searchbar() {
    return $('[title="Search"]');
  }
}
export default new SearchBar();
