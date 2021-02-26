
const Url = "";
import Page from "./page.js";
class HomePage extends Page {
  open() {
    super.open(`${Url}`);
  }
  test() {
    console.log("hello");
  }
  get Searchbar() {
    return $('[title="Search"]');
  }
  get Logo() {
    return $('[title="Lantern Festival 2021"]');
  }
}
export default new HomePage();