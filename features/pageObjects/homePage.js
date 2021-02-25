
const Url = "";
import Page from "./page.js";
class HomePage extends Page {
  open() {
    super.open(`${Url}`);
  }
  test() {
    console.log("hello");
  }
}
export default new HomePage();