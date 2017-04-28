import { AngularCalendarMaterialIssuePage } from './app.po';

describe('angular-calendar-material-issue App', () => {
  let page: AngularCalendarMaterialIssuePage;

  beforeEach(() => {
    page = new AngularCalendarMaterialIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
