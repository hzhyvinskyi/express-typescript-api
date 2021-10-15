import * as database from "./database"
// @ponicode
describe("database.dbConnect", () => {
    test("0", () => {
        let callFunction: any = () => {
            database.dbConnect()
        }
    
        expect(callFunction).not.toThrow()
    })
})
