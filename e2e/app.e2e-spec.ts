import { BullshitAppFrontend2Page } from './app.po';

describe('bullshit-app-frontend2 App', () => {
  let page: BullshitAppFrontend2Page;

  beforeEach(() => {
    page = new BullshitAppFrontend2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
