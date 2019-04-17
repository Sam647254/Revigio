export type Glisado = "Palato" | "Velo" | "Neniu";

const regex = /([b-df-hj-np-tv-zĉĝĵŝĥɫɹ]*)([aeiou])([jŭ])?([Jb-df-hk-np-tv-zĉĝĵŝĥʔ]*)/;

export class Silabo {
  constructor(
    public readonly komenco: string,
    public readonly vokalo: string,
    public readonly glisado: Glisado,
    public readonly fino: string
  ) {}

  static krei(eniro: string): Silabo | null {
    const kaptaĵoj = regex.exec(eniro);
    if (kaptaĵoj == null) {
      return null;
    }
    const komenco = kaptaĵoj[1];
    const vokalo = kaptaĵoj[2];
    const glisadoLitero = kaptaĵoj[3];
    const glisado: Glisado = glisadoLitero === "j" ? "Palato" :
      glisadoLitero === "ŭ" ? "Velo" : "Neniu";
    const fino = kaptaĵoj[4];

    return new Silabo(komenco, vokalo, glisado, fino);
  }

  public static konsonantoLarĝeco(kvanto: number, bazo: number): number {
    if (kvanto <= 1) {
      return bazo - 20;
    } else {
      return bazo - 30;
    }
  }

  public static konsonantojLarĝeco(kvanto: number, unuaLarĝeco: number): number {
    if (kvanto <= 1) return unuaLarĝeco;
    return unuaLarĝeco * kvanto + (kvanto - 1) * 10;
  }
}