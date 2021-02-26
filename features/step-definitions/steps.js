import { Given, When, Then} from "cucumber";
import { expect } from 'chai'; 
import HomePage from "../pageObjects/homePage.js";
import CookieFrame from "../pageObjects/cookieFrame.js";
import homePage from "../pageObjects/homePage.js";
import searchBar from "../pageObjects/searchBar.js";

Given(/^the user has accessed the Google homepage$/, () => {
  HomePage.open();
  

  // browser.url("http://google.co.uk/")
});

When(/^I accept cookies$/, () => {
  browser.switchToFrame(0);
  expect(CookieFrame.cookieAgree.isExisting()).to.equals(true);
  CookieFrame.cookieAgree.click();
  browser.switchToParentFrame();
  expect(CookieFrame.cookieAgree.isExisting()).to.equals(false);
});

Then(/^the user is taken to the Google homepage$/, () => {
  expect(browser.getUrl()).to.includes("www.google.co.uk/");
});


Then(/^the user can see the Google logo$/, () => {
  expect(HomePage.Logo.isExisting()).to.equals(true);
  
 });



Then(/^the user can see the Search bar$/, () => {
   expect(HomePage.Searchbar.isExisting()).to.equals(false);
   //console.log(searchBar.Searchbar.isExisting())
  });