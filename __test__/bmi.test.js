const timeout = 10000;

describe('Acceptance testing for bmi calculator', () => {

    //Information
    let page = '';
    const port = 8080;
    const url = 'http://localhost:'+port+'/';

    //Elements
    const heightSelector = '#cm';
    const weightSelector = '#kg';
    const submitSelector = 'body > div > form > div > div.panel-footer > input';

    //Run once before all tests
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto(url);
    }, timeout);


    it("Height equal 0", async () => {
        //Test information
        const heightInput = '0';
        const weightInput = '0';

        //Test flow
        await page.waitFor(100);
        await page.click(heightSelector);
        await page.type(heightSelector, heightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(weightSelector);
        await page.type(weightSelector, weightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(submitSelector);
        await page.waitFor(1000);


        //Expected outcome
        expect(page.url()).toBe(url);
    }, timeout);

    it("Height is not a number (NaN)", async () => {
        //Test information
        const heightInput = 'a';
        const weightInput = '0';

        //Test flow
        await page.waitFor(100);
        await page.click(heightSelector);
        await page.type(heightSelector, heightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(weightSelector);
        await page.type(weightSelector, weightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(submitSelector);
        await page.waitFor(1000);


        //Expected outcome
        expect(page.url()).toBe(url);
    }, timeout);

    it("Height greater than 0", async () => {
        //Test information
        const heightInput = '1';
        const weightInput = '0';

        //Test flow
        await page.waitFor(100);
        await page.click(heightSelector);
        await page.type(heightSelector, heightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(weightSelector);
        await page.type(weightSelector, weightInput, {delay: 100});
        await page.waitFor(100);
        await page.click(submitSelector);
        await page.waitFor(1000);
        //Split the url by ?, because we don't need the url query
        let currentUrl = page.url().split('?');

        //Expected outcome
        expect(currentUrl[0]).toBe(url+'result');
    }, timeout);

});