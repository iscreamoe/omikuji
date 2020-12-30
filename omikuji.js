$(function () {
  // おみくじの結果を配列に格納
  const omikuji = [
    $("#result-1"),
    $("#result-2"),
    $("#result-3"),
    $("#result-4"),
    $("#result-5"),
    $("#result-6")
  ];
  // クリックでイベントを実行
  $("#start-btn").on("click",function(){
    // スライドアニメーションを開始
    $("#slide").addClass("open"),
    setTimeout(function(){
      $("#app").append("<div id='loading' class='layer wf-nicomoji'>あなたのことしのうんせいは？</div > ")
      $("#logo,#start-btn,#mary-top").hide();
      $("#slide").addClass("close");
    },1000)
    // スライドアニメーションを終了
    setTimeout(function(){
      $("#loading").addClass("animate__animated animate__fadeOutUp");
    }, 3000)
    // 結果を表示
setTimeout(function(){
  const random = Math.floor(Math.random() * 6);
  $(".result-screen").show();
  omikuji[random].show();
  omikuji[random].addClass("animate__animated animate__bounceIn");
}, 4000)
    // 戻る
setTimeout(function(){
  $("#btn-back").show();
  $("#btn-back").addClass("animate__animated animate__slideInUp faster");
},5000)
  })
  $("#btn-back").on("click",function(){
    location.reload();
  })
})