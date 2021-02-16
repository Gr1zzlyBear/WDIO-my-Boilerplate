
const Url = "";
import Page from "./page.js";
class HomePage extends Page {
  open() {
    super.open(`${Url}`);
  }
}
export default new HomePage();