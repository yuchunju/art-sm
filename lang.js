// JavaScript Document

function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
 
//获取cookie
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}


var LanguageList = {
  "EN" : "English",
  "CN" : "Chinese",
  "IT" : "Italian"
};

//languages Objects
var WORDS_EN = {
  "text1" : "Home",
  "text2" : "Next",
  "text3" : "Click my head, if i block your sight!",
  "text4" : "I am...",


};

var WORDS_CN = {
 "text1" : "主页",
  "text2" : "下一页",
  "text3" : "如果我挡住了你的视线，请点击我的头！",
  "text4" : "我是。。。",

};

var WORDS_IT = {
 "text1" : "Home",
  "text2" : "prossimo",
  "text3" : "Fai clic sulla mia testa, se ti blocco la vista!",
  "text4" : "Io sono...",

};



window.onload = initialize;

function initialize() {
     var lang = getCookie('LanguageList');
  var $dropdown = $("#country_select");    
  $.each(LanguageList, function(key, value) {
    $dropdown.
      append($("<option/>").
      val(key).
      text(value));
    });
    
  loadsLanguage("EN");

}

function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/ 
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);        
  });
}

