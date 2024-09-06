import { sum } from "../../utils/sum";

test("Check sum of 2 positive numbers", ()=>{
    expect(sum(10,20)).toBe(30);
});