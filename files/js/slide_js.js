function OpenMenu(){
if ($('.sandwich').text() == ">>>"){
$('.hat, .header').css("width","28%");
$('.links').css("display","block")
$('.content').css({"width":"72%", "left":"28%"})
$('.sandwich').text("<<<");
$('.sandwich').css("height","10%");
}
else
if ($('.sandwich').text() == "<<<"){
$('*').removeAttr("style");
$('.sandwich').text(">>>");
}
}
