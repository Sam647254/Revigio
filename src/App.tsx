import * as React from 'react';

import {Silabo} from "./Silabo";
import {konsonantoj, vokaloj} from "./Literoj";

import './App.css';

const bazo = 70;
const kanvasoLarĝeco = 1000;
const konsonantoAlteco = 40;
const vicoAlteco = konsonantoAlteco * 2 + 50;
const spaco = 10;

class App extends React.Component {
  private kanvaso = React.createRef<HTMLCanvasElement>();
  private teksto = React.createRef<HTMLTextAreaElement>();

  public render() {
    return (
      <div className="App">
        <div>
          <canvas ref={this.kanvaso} width={kanvasoLarĝeco} height={700}/>
        </div>
        <textarea ref={this.teksto} rows={7} cols={50}/>
        <button type="button" onClick={() => {
          this.legiKajDesegni();
        }}>Desegni</button>
      </div>
    );
  }

  private legiKajDesegni() {
    const teksto = this.teksto.current;
    if (teksto != null) {
      const enhavo = teksto.textContent;
      if (enhavo != null) {
        const vortoj = enhavo.split(" ")
        const silaboTeskto = vortoj.map(v => v.split("/"));
        const silaboj = silaboTeskto.map(v => {
          return v.map(s => {
            const silabo = Silabo.krei(s);
            if (silabo == null) {
              throw `${s} ne estas valida silabo`;
            }
            return silabo;
          });
        });
        this.desegni(silaboj);
      }
    }
  }

  private desegni(silaboj: Silabo[][]) {
    const kanvaso = this.kanvaso.current;
    if (kanvaso == null) return;
    const ctx = kanvaso.getContext("2d");
    if (ctx == null) return;
    ctx.clearRect(0, 0, kanvaso.width, kanvaso.height);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let x = 10, y = 80;
    let salto = false;
    silaboj.forEach((v) => {
      const vortoLarĝeco = v.reduce((sumo, s) => {
        return App.silaboLarĝeco(s);
      }, 0);
      if (vortoLarĝeco + x > kanvasoLarĝeco - 10) {
        x = 10;
        y += vicoAlteco;
      }
      v.forEach((s) => {
        const larĝeco = App.silaboLarĝeco(s);

        // Vokalo
        ctx.moveTo(x, y);
        ctx.lineTo(x + larĝeco, y);
        ctx.moveTo(x, y);
        const vokalo = vokaloj.get(s.vokalo);
        if (vokalo == null) {
          throw `Ne eblas desegni ${s.vokalo}`;
        }
        vokalo(ctx, x, y, larĝeco, s.glisado, salto);
        if (s.glisado !== "Neniu") {
          salto = true;
        } else {
          salto = false;
        }

        // Supraj konsonantoj
        const skLarĝeco = Silabo.konsonantoLarĝeco(s.komenco.length, bazo);
        let kx = x + (larĝeco / 2) - Silabo.konsonantojLarĝeco(s.komenco.length, skLarĝeco) / 2, ky = y - konsonantoAlteco - 20;
        for (const litero of s.komenco) {
          const konsonanto = konsonantoj.get(litero);
          if (konsonanto == null) {
            throw `Ne eblas desegni ${litero}`;
          }
          ctx.moveTo(kx, ky);
          konsonanto(ctx, kx, ky, skLarĝeco, konsonantoAlteco);
          kx += 10 + skLarĝeco;
        }

        // Malsupraj konsonantoj
        const mskLarĝeco = Silabo.konsonantoLarĝeco(s.fino.length, bazo);
        kx = x + (larĝeco / 2) - Silabo.konsonantojLarĝeco(s.fino.length, mskLarĝeco) / 2, ky = y + 20;
        for (const litero of s.fino) {
          const konsonanto = konsonantoj.get(litero);
          if (konsonanto == null) {
            throw `Ne eblas desegni ${litero}`;
          }
          ctx.moveTo(kx, ky);
          konsonanto(ctx, kx, ky, mskLarĝeco, konsonantoAlteco);
          kx += 10 + skLarĝeco;
        }

        x += larĝeco;
      });
      salto = false;
      x += 20;
    });
    ctx.stroke();
  }

  private static silaboLarĝeco(s: Silabo): number {
    const plejLonga = Math.max(s.komenco.length, s.fino.length);
    return Silabo.konsonantojLarĝeco(plejLonga, Silabo.konsonantoLarĝeco(plejLonga, bazo)) + spaco * 2;
  }
}

export default App;
