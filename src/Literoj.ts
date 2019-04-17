import {Glisado} from "./Silabo";

export type Konsonanto = (ctx: CanvasRenderingContext2D, x: number, y: number, larĝeco: number, alteco: number) => void;
export type Vokalo = (ctx: CanvasRenderingContext2D, x: number, y: number, larĝeco: number, glisado: Glisado, salto: boolean) => void;

export const konsonantoj = new Map<string, Konsonanto>([
  ["b", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x, y + alteco / 2);
    ctx.ellipse(x + larĝeco / 2, y + alteco / 2, larĝeco / 2, alteco / 2, 0, Math.PI, Math.PI * 3);
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x + larĝeco / 2, y + alteco);
  }],
  ["c", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco / 2 - 10, y + alteco / 2);
    ctx.moveTo(x + larĝeco * 3 / 4, y);
    ctx.lineTo(x + larĝeco / 2, y + alteco);
    ctx.lineTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco * 3 / 4, y);
  }],
  ["ĉ", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco / 2 - 10, y + alteco / 2);
    ctx.moveTo(x + larĝeco * 3 / 4, y);
    ctx.lineTo(x + larĝeco / 2, y + alteco);
    ctx.moveTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco * 3 / 4, y);
  }],
  ["d", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + alteco);
  }],
  ["f", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.lineTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
    ctx.ellipse(x + larĝeco / 2, y + alteco / 2, larĝeco / 2, alteco / 2, 0, 0, Math.PI);
  }],
  ["g", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco);
  }],
  ["ĝ", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x + larĝeco * 3 / 4, y);
    ctx.lineTo(x + larĝeco / 2, y + alteco);
    ctx.moveTo(x + larĝeco, y + alteco)
    ctx.lineTo(x + larĝeco * 3 / 4, y);
  }],
  ["h", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco)
    const y1 = y + alteco / 2 - 10;
    const y2 = y + alteco / 2 + 10;
    ctx.moveTo(x, y1);
    ctx.lineTo(x + larĝeco, y1);
    ctx.moveTo(x, y2);
    ctx.lineTo(x + larĝeco, y2);
  }],
  ["ĥ", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco)
    const y1 = y + alteco / 2 - 10;
    const y2 = y + alteco / 2 + 10;
    ctx.moveTo(x, y1);
    ctx.lineTo(x + larĝeco, y1);
    ctx.moveTo(x, y2);
    ctx.lineTo(x + larĝeco, y2);
  }],
  ["j", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x, y + alteco);
    ctx.lineTo(x, y);
    ctx.lineTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco);
  }],
  ["ĵ", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco / 2, y);
  }],
  ["k", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco);
    ctx.moveTo(x + 10, y + alteco / 2);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
  }],
  ["l", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x + larĝeco, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + alteco);
    ctx.lineTo(x + larĝeco, y + alteco);
  }],
  ["m", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x, y + alteco / 2);
    ctx.ellipse(x + larĝeco / 2, y + alteco / 2, larĝeco / 2, alteco / 2, 0, Math.PI, Math.PI * 3);
  }],
  ["n", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
  }],
  ["p", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x, y + alteco / 2);
    ctx.ellipse(x + larĝeco / 2, y + alteco / 2, larĝeco / 2, alteco / 2, 0, Math.PI, Math.PI * 3);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
  }],
  ["r", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
    ctx.lineTo(x, y + alteco / 2);
    ctx.lineTo(x, y + alteco);
    ctx.lineTo(x + larĝeco, y + alteco);
  }],
  ["s", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x, y + alteco);
    ctx.lineTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco / 2, y);
  }],
  ["ŝ", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco / 2, y);
  }],
  ["t", (ctx, x, y, larĝeco, alteco) => {
    ctx.lineTo(x + larĝeco, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + alteco);
    ctx.moveTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco - 10, y + alteco / 2);
  }],
  ["v", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x + larĝeco, y);
    ctx.lineTo(x, y + alteco / 2);
    ctx.lineTo(x + larĝeco, y + alteco / 2);
    ctx.ellipse(x + larĝeco / 2, y + alteco / 2, larĝeco / 2, alteco / 2, 0, 0, Math.PI);
  }],
  ["z", (ctx, x, y, larĝeco, alteco) => {
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x, y + alteco);
    ctx.lineTo(x + larĝeco, y + alteco);
    ctx.lineTo(x + larĝeco / 2, y);
  }],
]);

export const vokaloj = new Map<string, Vokalo>([
  ["a", (ctx, x, y, larĝeco, glisado, salto) => {
    if (!salto) {
      ctx.moveTo(x, y - 10);
      ctx.lineTo(x, y + 10);
    }
    switch (glisado) {
      case "Palato":
        ctx.moveTo(x + larĝeco, y - 10);
        ctx.lineTo(x + larĝeco, y);
        break;
      case "Velo":
        ctx.moveTo(x + larĝeco, y);
        ctx.lineTo(x + larĝeco, y + 10);
        break;
      case "Neniu":
        ctx.moveTo(x + larĝeco, y - 10);
        ctx.lineTo(x + larĝeco, y + 10);
        break;
    }
  }],
  ["e", (ctx, x, y, larĝeco, glisado) => {
    const x1 = x + larĝeco / 2 - 10;
    const x2 = x + larĝeco / 2 + 10;
    ctx.moveTo(x1, y - 10);
    ctx.lineTo(x1, y);
    ctx.moveTo(x2, y - 10);
    ctx.lineTo(x2, y);
    desegniGlisado(ctx, x, y, larĝeco, glisado);
  }],
  ["i", (ctx, x, y, larĝeco, glisado) => {
    ctx.moveTo(x + larĝeco / 2, y - 10);
    ctx.lineTo(x + larĝeco / 2, y);
    desegniGlisado(ctx, x, y, larĝeco, glisado);
  }],
  ["o", (ctx, x, y, larĝeco, glisado) => {
    const x1 = x + larĝeco / 2 - 10;
    const x2 = x + larĝeco / 2 + 10;
    ctx.moveTo(x1, y);
    ctx.lineTo(x1, y + 10);
    ctx.moveTo(x2, y);
    ctx.lineTo(x2, y + 10);
    desegniGlisado(ctx, x, y, larĝeco, glisado);
  }],
  ["u", (ctx, x, y, larĝeco, glisado) => {
    ctx.moveTo(x + larĝeco / 2, y);
    ctx.lineTo(x + larĝeco / 2, y + 10);
    desegniGlisado(ctx, x, y, larĝeco, glisado);
  }]
]);

function desegniGlisado(ctx: CanvasRenderingContext2D, x: number, y: number, larĝeco: number, glisado: Glisado) {
  switch (glisado) {
    case "Palato":
      ctx.moveTo(x + larĝeco, y - 10);
      ctx.lineTo(x + larĝeco, y);
      break;
    case "Velo":
      ctx.moveTo(x + larĝeco, y);
      ctx.lineTo(x + larĝeco, y + 10);
  }
}