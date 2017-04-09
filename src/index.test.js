import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('our first Test', ()=>{
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('check file Content', ()=>{
    it('should say Users', (done) =>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, (err, window)=>{
        if(err) {
            console.log(err);
        }
        const h2 = window.document.getElementsByTagName('h2')[0];
        expect(h2.innerHTML).to.equal('Users');
        done();
        window.close();
        });
    });
});