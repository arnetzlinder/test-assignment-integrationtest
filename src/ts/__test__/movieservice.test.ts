/**
 *@jest-environment jsdom
 */

import { getData } from "../services/movieservice";
import { testData } from "../services/__mocks__/movieservice";
import { IMovie } from "../models/Movie";


jest.mock('axios', () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith("error")) {
                console.log("An error occured!");
                reject([]);
            } else {
                resolve({ data: {Search: testData } });
            }
        });
    },
    catch: async () => {
        console.log("We should catch the error here");        
    }
}));


test("test för att se att data hämtas rätt", async () => {
    //Arrange

    //Act
    let dataTest: IMovie[] = await getData("Titanic");
    // console.log(dataTest);
    //Assert
    expect(dataTest.length).toBe(3);
    expect(dataTest[0].Title).toBe("Titanic");
});

test("test för att se när kod fallerar", async () => {

    
    try {
        let dataTest: IMovie[] = await getData("error");
    }
    catch(error: any) {
        console.log("We caught the error!");
        return;
    }
    // no error occured!
    expect(2).toBe(3);
})