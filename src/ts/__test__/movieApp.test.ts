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
    test("handleSubmit() is being called correctly", async () => {
        //Arrange
        document.body.innerHTML= `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här"/>
            <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>
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

 describe("Tests for handle submit", () => {
    test("should create HTML if search is positive", () => {
        //Arrange
        document.body.innerHTML = 
        `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;

        // let 

        //Act
        movieApp.init();
        (document.getElementById("searchText") as HTMLInputElement).value = "Love";  
        (document.getElementById("searchForm") as HTMLFormElement).submit();
        let container: HTMLDivElement = document.getElementById(
            "movie-container"
        ) as HTMLDivElement;
        movieApp.createHtml(testData, container);
        
        //Assert
        expect(document.body.innerHTML).toContain("Love Actually");
    })

    test('Should get data correctly and call createHtml', async () => {

        //Arrange
        let movies: IMovie[] = [];

        document.body.innerHTML = `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>
        `


        let searchText = (document.getElementById("searchText") as HTMLInputElement).value = 'Love Actually';
        let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

        let spyCreateHtml = jest.spyOn(movieApp, 'createHtml').mockReturnValue();
    
        //Act
        await movieApp.handleSubmit()
        movies = await getData(searchText);

        //Assert
        expect(movies.length).toBe(3);
        expect(spyCreateHtml).toHaveBeenCalled();
        expect(spyCreateHtml).toBeCalledWith(movies, container);
        spyCreateHtml.mockRestore();
    });

    test("calling displayNoResult when there are no movies to display", async () => {
        //Arrange
        document.body.innerHTML = 
        `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;

        let spyDisplayNoResults = jest.spyOn(movieApp, 'displayNoResult').mockReturnValue();
     
        //Act
        await movieApp.handleSubmit();
             
        //Assert
        expect(spyDisplayNoResults).toHaveBeenCalled();
        spyDisplayNoResults.mockRestore();

    })
});