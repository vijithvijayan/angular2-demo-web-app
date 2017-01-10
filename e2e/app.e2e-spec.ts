import { Angular2DemoappPage } from './app.po';

describe('angular2-demoapp App', function() {
  let page: Angular2DemoappPage;

  beforeEach(() => {
    page = new Angular2DemoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
