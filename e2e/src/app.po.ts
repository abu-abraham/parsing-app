import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('msg')).getText();
  }

  getTemplateConnector() {
    return element(by.cssContainingText('.connector',' COMMENTED ON  '));
  }

  getTemplateJSONProfile() {
    return element(by.cssContainingText('.template',' Edward T.'));
  }

  getTemplateJSONTask() {
    return element(by.cssContainingText('.template',' Take me to rails camp ')); 
  }

}
