import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum, rendezesSzam, rendezesSzoveg, veletlenSorrend } from "./rendezes.js";

$(function () {
  console.log(SZOVEGLISTA);
  rendezesObjektum(rendezesSzoveg(SZOVEGLISTA)); /**lista címét adja át */
  console.log(SZOVEGLISTA);
  console.log("***************");

  console.log(SZAMLISTA);
  rendezesObjektum(rendezesSzoveg(SZAMLISTA));
  console.log(SZAMLISTA);  
  console.log("***************");
  
  console.log(SZAMLISTA);
  rendezesObjektum(veletlenSorrend(SZAMLISTA));
  console.log(SZAMLISTA)
  console.log("***************");

  
  console.log(SZOVEGLISTA);
  rendezesObjektum(veletlenSorrend(SZOVEGLISTA));
  console.log(SZOVEGLISTA);
  console.log("***************");

  //KOrszerint növekvő sorrendbe
  console.log(OBJEKTUMLISTA);
  rendezesObjektum(rendezesSzamSzerint(OBJEKTUMLISTA, "kor"));
  console.log(OBJEKTUMLISTA);

  console.log(OBJEKTUMLISTA);
  rendezesObjektum(rendezesSzovegSzerint(OBJEKTUMLISTA, "nev"));
  console.log(OBJEKTUMLISTA);
});
