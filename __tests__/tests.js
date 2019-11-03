const app = require("../restApi");
const request = require("supertest");


describe('/',()=>{
    it('should print hello world',async ()=>{
        const response = await request(app).get('/');
        console.log(response.text);
        expect(response.text).toEqual("Hello World");
    })
})

describe('add/',()=>{
    it('should  show addition',async ()=>{
        const response = await request(app).get('/add/9/3');
        
        expect(response.text).toEqual("12");
    })
})

