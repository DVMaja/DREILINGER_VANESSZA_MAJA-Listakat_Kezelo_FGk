export function rendezesSzoveg(lista) {
  // rendezzük a listát
  //https://www.w3schools.com/jsref/jsref_sort.asp
  lista.sort();
}

export function rendezesSzam(lista) {
  lista.sort(function (x, y) {
    //console.log(x, y, x - y);
    return x - y;
    //ha ez a érték negatív , akkor megcseréli a két elemet, de ha pozitív, akkor nem cserél
  });
}

export function veletlenSorrend(lista) {
  lista.sort(function (a, b) {
    return Math.random() * 20 - 10; //-0.5
    //ha ez a érték negatív , akkor megcseréli a két elemet, de ha pozitív, akkor nem cserél
  });
}

function rendezesSzamSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    //console.log(a, b);
    return a[kulcs] - b[kulcs];
  });
}
/**írjuk át ezt a metódust ugy hogy paramérezerni lehessen */

function rendezesSzovegSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    //onsole.log(a, b);
    if (a[kulcs] - b[kulcs]) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function rendezesObjektum(lista, kulcs) {
  if (typeof kulcs == "number") {
    rendezesSzamSzerint(lista, kulcs);
  } else {
    rendezesSzovegSzerint(lista, kulcs);
  }
}
