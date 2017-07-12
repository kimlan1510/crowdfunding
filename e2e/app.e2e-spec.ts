import { CrowdfundingPage } from './app.po';

describe('crowdfunding App', () => {
  let page: CrowdfundingPage;

  beforeEach(() => {
    page = new CrowdfundingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
