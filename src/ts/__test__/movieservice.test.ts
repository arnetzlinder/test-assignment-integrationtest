/**
 *@jest-environment jsdom
 */

import * as movieservice from "../services/movieservice";
import { testData } from "../services/__mocks__/movieservice";
import { IMovie } from "../models/Movie";


jest.mock("axios", () => ({
    get: async (url:string) => { 
            if (!url.endsWith("error")) {
                let returnvalue = {data: {Search: testData}, status: 200}
                console.log(returnvalue);
                return returnvalue;
            } else {
                throw new Error("Meh");
            }
        }
    
}));




test("test för att se att data hämtas rätt", async () => {
    //Arrange

    //Act
    let dataTest: IMovie[] = await movieservice.getData("Titanic");
    console.log(dataTest);
    //Assert
    expect(dataTest.length).toBe(3);
    expect(dataTest[0].Title).toBe("Titanic");
});

test("test för att se när kod fallerar", async () => {
    let dataTest: IMovie[] = await movieservice.getData("error");
    console.log(dataTest);
    //Assert
    expect(dataTest.length).toBe(0);
})