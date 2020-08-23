import { checkForText } from "../src/client/js/textChecker";

describe("Testing textChecker functionality", () => {
    test("The function should be defined", () => {
        expect(checkForText).toBeDefined();
    });
});