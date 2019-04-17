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
}