const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://google.pl')
		const title = await browser.getTitle()
        assert.strictEqual(title, 'Google')
    })
})
