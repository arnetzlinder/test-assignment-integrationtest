import { IMovie } from "../../models/Movie";
import axios from "axios";
import { IOmdbResponse } from "../../models/IOmdbResponse";



export let testData: IMovie[] = [
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

// export async function getData(searchText: string): Promise<IMovie[]> {
//     return new Promise((resolve, reject) => {
//         if (testData.length > 0 && searchText !== "error") {
//             resolve ({data: {Search: testData}, status: 200});
//         } else {
//             reject({ data: [], status: 500});
//             throw new Error("Meh");
//     }
// });
// }

// export const getData = async (searchText: string): Promise<IMovie[]> => {
//     return axios
//       .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
//       .then((data) => {
//         return data.data.Search;
//       })
//       .catch(() => {
//         return [];
//       });
//   };
export const getData = async (searchText: string): Promise<IMovie[]> => {
    if (searchText === "") {
        return [];
    }
    return testData;
    console.log("Trying to look up "+searchText);
    return axios
      .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
      .then((data) => {
        console.log(data.data.Search);
        return data.data.Search;
      })
      .catch(() => {
        console.log("we caught the error here!");
        throw new Error("Meh");
      });
  };
