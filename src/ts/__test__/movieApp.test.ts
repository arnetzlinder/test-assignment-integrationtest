/**
 *@jest-environment jsdom
 */

 import * as movieApp from "../movieApp";
 import { getData } from "../services/movieservice";
 import { testData } from "../services/__mocks__/movieservice";
 import { IMovie } from "../models/Movie";

 beforeEach(() => {
    document.body.innerHTML = ``;
 });
 
 jest.mock("../services/movieservice");

 describe("testing init function", () => {
    test("handleSubmit() is beeing called correctly", () => {
        //Arrange

        //Act

        //Assert
    })
 })