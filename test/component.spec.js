import {Component} from "../src/component";

describe("Component", () => {

   it('should be defined', () => {
       expect(Component).toBeDefined();
   });

   it('should return template', () => {
       const component = new Component();
       expect(component.element.innerHTML).toBe('<h1>Hello world!</h1>');
   })

});