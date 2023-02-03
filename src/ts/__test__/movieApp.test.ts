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
        document.body.innerHTML= `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
        </form>
        `;

        let spyHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve)=> {
            resolve();
        }));

        //Act
        movieApp.init();
        (document.getElementById("searchForm") as HTMLFormElement).submit();

        //Assert
        expect(spyHandleSubmit).toHaveBeenCalled();
        spyHandleSubmit.mockRestore();
    });
 });