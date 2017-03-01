import { TrainProjectPage } from './app.po';

describe('train-project App', () => {
  let page: TrainProjectPage;

  beforeEach(() => {
    page = new TrainProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
