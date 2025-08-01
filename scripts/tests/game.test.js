/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf8");
    document.body.innerHTML = fileContents;
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42; 
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button3", "button4"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear playerMoves array", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("should clear currentGame array", () => {
        expect(game.currentGame).toEqual([]);
    });
    test("should display 0 for the element with ID of score", () => {
        expect(document.getElementById("score").innerText).toEqual("0");
    });
});