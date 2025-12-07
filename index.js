function update_similar() {
  const firstKanji = document.getElementById("input_box").value[0];
  document.getElementById("query").innerHTML = firstKanji ?? "";
  document.getElementById("keisei").innerHTML = keisei[firstKanji] ?? "";
  document.getElementById("manual").innerHTML = manual[firstKanji] ?? "";
  document.getElementById("old_script").innerHTML = old_script[firstKanji] ?? "";
  document.getElementById("stroke_edit").innerHTML = stroke_edit[firstKanji] ?? "";
  document.getElementById("wk_niai_hira").innerHTML = wk_niai_hira[firstKanji] ?? "";
  document.getElementById("wk_niai_noto").innerHTML = wk_niai_noto[firstKanji] ?? "";
  document.getElementById("yl_radical").innerHTML = yl_radical[firstKanji] ?? "";

  document.getElementById("jitenon").href =
    "https://kanji.jitenon.jp/cat/search?how=%E6%BC%A2%E5%AD%97&getdata=" +
    firstKanji.charCodeAt(0).toString(16) +
    "#m_kousei";
  document.getElementById("jpdb").href = "http://jpdb.io/kanji/" + firstKanji;
  document.getElementById("wiktionary").href = "https://en.wiktionary.org/wiki/" + firstKanji + "#Han_character";
  document.getElementById("kanjimap").href = "https://thekanjimap.com/" + firstKanji;
  document.getElementById("kanshudo").href = "https://www.kanshudo.com/search?q=" + firstKanji;
}

const input_box = document.getElementById("input_box");
input_box.addEventListener("input", update_similar);
