describe('console log test', function () {


    it('should show success in console', function () {
        browser.get('http://localhost:63342/basic_protractor_osx/index.html');

        //expect(element(by.css('body > a')).getAttribute('value')).toEqual('hier');
        expect(element(by.css('body > a')).getAttribute('text')).toEqual('hier');


        var elm = element(by.css("body > a"));
        expect(elm.getText()).toEqual("My Text");


    });


    //select anchor plase contact us
   //expect(element(    by.xpath('//*[@id="main"]/section/div/section[2]/section[2]/div[2]/p[5]/a')).getAttribute('href')).toEqual('sdfdsfsd');

});
