import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display activities page with default text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mouse over a user or task to get their path');
  });

  it('should display the correct link when hovered over a json template', () => {
    browser.actions().mouseMove(page.getTemplateJSONProfile()).perform();
    expect(page.getParagraphText()).toEqual('profiles/edward-tippett');
    browser.actions().mouseMove(page.getTemplateJSONTask()).perform();
    expect(page.getParagraphText()).toEqual('task/rails-camp');
  });

  it('should display the default text when hover over a connector string', () => {
    browser.actions().mouseMove(page.getTemplateConnector()).perform();
    expect(page.getParagraphText()).toEqual('Mouse over a user or task to get their path');
  });

});
