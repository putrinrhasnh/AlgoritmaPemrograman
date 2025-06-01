function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sceu4pHclZ":
        Script1();
        break;
      case "5sJzRtfCCf0":
        Script2();
        break;
      case "6iBBXq2GlMB":
        Script3();
        break;
      case "62n6n7W0VDe":
        Script4();
        break;
      case "5mYTSXWt8mG":
        Script5();
        break;
      case "6i4ctolCuhn":
        Script6();
        break;
      case "6OTmo0DIECz":
        Script7();
        break;
      case "69W0ed9cOeU":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  window.open("https://www.onlinegdb.com/");

}

function Script3()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script4()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script5()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script6()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script7()
{
  window.open("https://www.onlinegdb.com/#");

}

function Script8()
{
  var player = GetPlayer();
var nama = player.GetVar("namaSiswa");
var nilai = player.GetVar("Results.ScorePercent");

fetch("https://script.google.com/macros/s/AKfycbxbSf61CsrPMwAtu7Iz-j_Hc_TA2VfA8JAthGHaBcPi-9qlx8x5UIxjKN13lZF5aIQgrA/exec", {
  method: "POST",
  body: JSON.stringify({
    nama: nama,
    nilai: nilai
  }),
  headers: {
    "Content-Type": "application/json"
  }
});

}

