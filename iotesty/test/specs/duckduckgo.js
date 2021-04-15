describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://duckduckgo.com/')

        $('#search_form_input_homepage').setValue('Pogoda lublin')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Tytul strony to : ' + title)
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
})