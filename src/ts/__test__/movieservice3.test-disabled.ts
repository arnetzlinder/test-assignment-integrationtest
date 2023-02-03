/**
 *@jest-environment jsdom
 */

 import { getData } from "../services/movieservice";
 import { testData } from "../services/__mocks__/movieservice";
 import { IMovie } from "../models/Movie";
 
 jest.mock("axios", () => {
     get: async (url:string) => {
         return new Promise((resolve, reject) => {
             if(url.endsWith("error")) {
                 reject([]);
             } else {
                 resolve({ data : {Search: testData}});
             }
         })
     }
 });
 
 
 test("test för att se att data hämtas rätt", async () => {
     //Arrange
 
     //Act
     let dataTest: IMovie[] = await getData("Titanic");
     console.log(dataTest);
     //Assert
     expect(dataTest.length).toBe(3);
     expect(dataTest[0].Title).toBe("Titanic");
 });
 
 test("test för att se när kod fallerar", async () => {
 
     try {
         let dataTest: IMovie[] = await getData("error");
     }
     catch(error: any) {
         expect(error.length).toBe(0);
         expect(error).toReturnWith([]);
     }
 })