import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import {
  rendezesObjektum,
  rendezesSzam,
  rendezesSzoveg,
  veletlenSorrend,
} from "./rendezes.js";
import { szurNevSzerint, szuresKorSzerint } from "./szures.js";

$(function () {
  console.log(SZOVEGLISTA);
  rendezesSzoveg(SZOVEGLISTA); /**lista címét adja át */
  console.log(SZOVEGLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  rendezesSzoveg(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("***************");

  console.log(SZOVEGLISTA);
  veletlenSorrend(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  console.log("***************");

  //KOrszerint növekvő sorrendbe
  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "kor");
  console.log(OBJEKTUMLISTA);
  console.log("***************");

  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "nev");
  console.log(OBJEKTUMLISTA);
  console.log("***************");

  console.log("Szűrés név szerint");
  console.log(OBJEKTUMLISTA);
  console.log("Szűrés után");
  let szuresiFeltétel = "D";
  let szurtLISTA = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltétel);
  console.log(szurtLISTA);
  console.log("***************");

  console.log("Szűrés kor szerint");
  szuresiFeltétel = "<12";
  const szurtLISTAKor = szuresKorSzerint(OBJEKTUMLISTA, szuresiFeltétel);
  console.log(szurtLISTAKor);
  console.log("***************");

  /**A html kódban lévő input mezőbe lévő érték szerint szürjük
   * 1. elérjük az input elemet
   * 2.
   * 3. A szűrési érték elem helyére beírjuk a z input elem value értékét
   * 4. MIkor  kell ennek megtörténnie - Amikor megváltpzik az input elem értéke akkkor 3.
   * 5. Meghívjuk a szűrő függvényt
   *
   */

  /**eseménykezelő a beviteli mezőre
   * vagy change esemény  -> felhasz leüti az entert utána fut
   * keyup
   */
  /**1. */
  console.log("Új feladat: ");
  const nevELEM = $("#nev");
  nevELEM.on("keyup", function () {
    
    /**3. */
    let szuresiFeltetel = nevELEM.val();
    /**4 */
    szurtLISTA = szurNevSzerint(OBJEKTUMLISTA, szuresiFeltetel);
    console.log(szurtLISTA);
  });
});
