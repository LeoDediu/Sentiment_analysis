import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing handleSubmit functionality", () => {
    test("The function should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});