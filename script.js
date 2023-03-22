import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum, rendezesSzam, rendezesSzoveg, veletlenSorrend } from "./rendezes.js";

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
  console.log(SZAMLISTA)
  console.log("***************");

  
  console.log(SZOVEGLISTA);
  (veletlenSorrend(SZOVEGLISTA));
  console.log(SZOVEGLISTA);
  console.log("***************");

  //KOrszerint növekvő sorrendbe
  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "kor");
  console.log(OBJEKTUMLISTA);

  console.log(OBJEKTUMLISTA);
  rendezesObjektum(OBJEKTUMLISTA, "nev");
  console.log(OBJEKTUMLISTA);
});
