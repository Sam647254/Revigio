import * from "jest";
import {Silabo} from "../src/Silabo";

describe("Bazaj testoj de silaboj", () {
  it("sukcesas per pravaj silaboj", () => {
    const tekstoj = ["a", "la", "kaj", "lajn"];
    const rezultoj = [
      ["", "a", "Neniu", ""],
      ["l", "a", "Neniu", ""],
      ["k", "a", "Palato", ""],
      ["l", "a", "Palato", "n"]
    ];
    const silaboj = tekstoj.map(t => Silabo.krei(t));
    silaboj.forEach((s, i) => {
      expect(s).not.toBeNull();
      if (s != null) {
        expect(s.komenco).toEqual(rezultoj[i][0]);
        expect(s.vokalo).toEqual(rezultoj[i][1]);
        expect(s.glisado).toEqual(rezultoj[i][2]);
        expect(s.fino).toEqual(rezultoj[i][3]);
      }
    });
  });
});