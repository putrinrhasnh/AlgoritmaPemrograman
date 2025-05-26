function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kZCyutVEa4":
        Script1();
        break;
      case "6Ju3WHtQeAs":
        Script2();
        break;
      case "6f1X2T7bnzD":
        Script3();
        break;
      case "5rpVWYUWlVs":
        Script4();
        break;
      case "6Y4GQHqk5xM":
        Script5();
        break;
      case "5i1LQfLielR":
        Script6();
        break;
      case "6f1dmMQJGOp":
        Script7();
        break;
  }
}

function Script1()
{
  window.open("https://www.onlinegdb.com/");

}

function Script2()
{
  window.open("https://www.onlinegdb.com/#");

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

