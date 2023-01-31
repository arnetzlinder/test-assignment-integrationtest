import { IMovie } from "../../models/Movie";

let testData: IMovie[] = [
                    {
                        Title: "Titanic",
                        imdbID: "tt0120338",
                        Type: "Romance", 
                        Poster: "",
                        Year: "1997"
                    },
                    {
                        Title: "Love Actually",
                        imdbID: "tt0314331",
                        Type: "Romance", 
                        Poster: "",
                        Year: "2003"
                    },
                    {
                        Title: "Operation Mincemeat",
                        imdbID: "tt1879016",
                        Type: "Drama", 
                        Poster: "",
                        Year: "2021"
                    },
];

export async function getData(): Promise<IMovie[]> {
    return new Promise((resolve) => {
        resolve(testData);
    });
}

