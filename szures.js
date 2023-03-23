export function szurNevSzerint(OBJEKTUMLISTA, szuresiFeltétel) {
  /**akiknek  a nevében szerepel a  D betű*/
  let eredmenLista = OBJEKTUMLISTA.filter(function (kutya) {
    console.log(kutya);

    return kutya.név.toUpperCase().includes(szuresiFeltétel.toUpperCase());
  });
  console.log(eredmenLista);
  return eredmenLista;
}

/**KOrszerint Szűrő Pl  12 évnél fiatalabb kutyusok
 * 12 évnél fiatalabb kutyákat listázza ki
 */

export function szuresKorSzerint(OBJEKTUMLISTA, szuresiFeltétel) {
    let eredmenyLista = OBJEKTUMLISTA.filter(function (kutya) {
    //console.log(kutya);
    return eval(kutya.kor + szuresiFeltétel);
  });
  return eredmenyLista;
}

