import { IMovie } from "../models/Movie";
import * as functions from "../functions";

describe("Tests for sort function", () => {
    test("Test if sorting is correct when desc is true (descending sort)", () => {
        // Arrange
        let testData: IMovie[] = [
            {
                Title: "bb",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "aa",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
        ];

        // Act
        let newArray: IMovie[] = functions.movieSort(testData, true);

        // Assert
        expect(newArray[0].Title).toBe("aa");
    });

    test("Test if sorting is correct when desc is false (ascending sort)", () => {
        // Arrange
        let testData: IMovie[] = [
            {
                Title: "bb",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "aa",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
        ];

        // Act
        let newArray: IMovie[] = functions.movieSort(testData, false);

        // Assert
        expect(newArray[0].Title).toBe("cc");
    });

    test("Test if sorting is correct when desc is not specified (using the default vaule of true, ie descending sort)", () => {
        // Arrange
        let testData: IMovie[] = [
            {
                Title: "bb",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "cc",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
            {
                Title: "aa",
                imdbID: "",
                Type: "", 
                Poster: "",
                Year: ""
            },
        ];

        // Act
        let newArray: IMovie[] = functions.movieSort(testData);

        // Assert
        expect(newArray[0].Title).toBe("aa");
    });

});