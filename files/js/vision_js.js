/*
* Версия для слабовидящих
*/

/*
* Фиксирование меню в вверху при прокрутке странице
*/
$(window).scroll(function () {
    fixhat();
});
function fixhat() {
    vis = $('#vis').height();
    if ($(this).scrollTop() > 10) {
        $('.hat').css("top", "");
    }
    else {
        if ($('#vis').css("display") == "block") {
            $('.hat,.header').css("top", vis);
            if ($("div").is(".header")) {
                hat_height = $('.header').height();
                hat_top = $('.header').offset().top;
                hat = hat_height + vis;
                $('.content').css("top", hat);
            }
        }
        else { $('.hat').css("top", ""); }
    }
}

/*
* Проверка имеет ли localStorage данные и примение взависимости от имени
*/
$(document).ready(function localstorageload() {
    if (localStorage.vision == "open") { cl(); }
    if (localStorage.color == "white") { clwhite(); }
    if (localStorage.color == "black") { clblack(); }
    if (localStorage.color == "blue") { clblue(); }
    if (localStorage.font == "fonta") { fonta(); }
    if (localStorage.font == "fontaa") { fontaa(); }
    if (localStorage.font == "fontaaa") { fontaaa(); }
    if (localStorage.img == "on") { imgon(); }
    if (localStorage.img == "off") { imgoff(); }
});

/*
* Получение данных в localStorage
*/
function localstoragecolor(color) { localStorage.color = color; }
function localstoragefont(font) { localStorage.font = font; }
function localstoragevision(vision) { localStorage.vision = vision; }
function localstorageimg(img) { localStorage.img = img; }
/*
* Очистка данных в localStorage
*/
function localstorageremove() {
    localStorage.removeItem("color");
    localStorage.removeItem("vision");
    localStorage.removeItem("font");
    localStorage.removeItem("img");
}

/*
* Отображение панели для слабовидящих
*/
function cl() {
    $('#vis').css("display", "block");
    $('.content_index').css("top", "6%");
    $('.up').css("top", "0");
    $('.slides').css("top", "40%");
    $(".vision").css("display", "none")
    $('.fontA').addClass('vis_active');
    $('.imgOn').addClass('vis_active');
	$('.video').css("position","absolute");
    localstoragevision("open");
    fixhat();
}

/*
* Закрытие панели для слабовидящих
*/
function clc() {
    $('*').removeAttr("style");
    $('*').removeClass('vis_active');
    $('.link:contains("Лабораторные")').text("Лабораторные работы");
    localstorageremove();
    if ($('div').is('.slides')){
        showSlides(slideIndex);
    }
}

/*
* Применение бело-черной темы
*/
function clwhite() {
    $('.colorW, .colorBE, .colorBK').removeClass('vis_active');
    $('.colorW').addClass('vis_active');
    $('.content_index').css({ "background": "white", "color": "black", "text-shadow": "none" });
    $('.body').css("background", "white");
    $('.button1, .button2, .buttin').css({ "background": "white", "border-color": "black" });
    $('.content_index .button1 a,.content_index .button2 a, .buttin').css("color", "black");
    $('.header').css("background", "white");
    $('.hat, video').css({ "background": "rgba(255,255,255,0.85)", "border": "1px solid black" });
    $('.name, a.link').css("color", "black");
    $('.content,.next,.next_video,pre,table,tr,td,.test_question,.test_check,.test_rez').css({ "background": "white", "border": "1px solid black" });
    $('.content a,.content .next a,.content .next_video a,.h3_list,.index,ul,.content,pre,code,tr,td').css("color", "black");
    $('.h3_list,.index').css("border", "none");
    $('#vis').css({ "background": "white", "color": "black", "box-shadow": "0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)" });
    localstoragecolor("white");
}

/*
* Применение черно-белой темы
*/
function clblack() {
    $('.colorW, .colorBE, .colorBK').removeClass('vis_active');
    $('.colorBK').addClass('vis_active');
    $('.content_index').css({ "background": "black", "color": "white", "text-shadow": "none" });
    $('.body').css("background", "black");
    $('.button1, .button2, .buttin').css({ "background": "black", "border-color": "white" });
    $('.content_index .button1 a,.content_index .button2 a, .buttin').css("color", "white");
    $('.header').css("background", "black");
    $('.hat, video').css({ "background": "rgba(0,0,0,0.85)", "border": "1px solid white" });
    $('.name, a.link').css("color", "white");
    $('.content,.next,.next_video,pre,table,tr,td,.test_question,.test_check,.test_rez').css({ "background": "black", "border": "1px solid white" });
    $('code').css("background", "black");
    $('.content a,.content .next a,.content .next_video a,.index,ul,.h3_list,.content,pre,code,tr,td').css("color", "white");
    $('.h3_list,.index').css("border", "none");
    $('#vis').css({ "background": "black", "color": "white", "box-shadow": "0 7px 14px rgba(255,255,255,0.25), 0 5px 5px rgba(255,255,255,0.22)" });
    localstoragecolor("black");
}

/*
* Применение голубо-синей темы
*/

function clblue() {
    $('.colorW, .colorBE, .colorBK').removeClass('vis_active');
    $('.colorBE').addClass('vis_active');
    $('.content_index').css({ "background": "lightblue", "color": "blue", "text-shadow": "none" });
    $('.body').css("background", "lightblue");
    $('.button1, .button2, .buttin').css({ "background": "lightblue", "border-color": "blue" });
    $('.content_index .button1 a,.content_index .button2 a, .buttin').css("color", "blue");
    $('.header').css("background", "lightblue");
    $('.hat, video').css({ "background": "rgba(173,216,230,0.85)", "border": "1px solid blue" });
    $('.name, a.link').css("color", "blue");
    $('.content,.next,.next_video,pre,table,tr,td,.test_question,.test_check,.test_rez').css({ "background": "lightblue", "border": "1px solid blue" });
    $('code').css("background", "lightblue");
    $('.content a,.content .next a,.content .next_video a,.index,ul,.h3_list,.content,pre,code,tr,td').css("color", "blue");
    $('.h3_list,.index').css("border", "none");
    $('#vis').css({ "background": "lightblue", "color": "blue", "box-shadow": "0 7px 14px rgba(0,0,255,0.25), 0 5px 5px rgba(0,0,255,0.22)" });
    localstoragecolor("blue");
}

/*
* Отключение картинок
*/
function imgoff() {
    $('.imgOn, .imgOff').removeClass('vis_active');
    $('.imgOff').addClass('vis_active');
    $('.slides,.img,.video').css("display", "none");
    localstorageimg("off");
}

/*
* Включение картинок
*/
function imgon() {
    $('.imgOn, .imgOff').removeClass('vis_active');
    $('.imgOn').addClass('vis_active');
    $('.slides,.img,.video').css("display", "block");
    localstorageimg("on");
}

/*
* Установка стандартного шрифта
*/
function fonta() {
    $('.fontA, .fontAA, .fontAAA').removeClass('vis_active');
    $('.fontA').addClass('vis_active');
    $('*').css("font-size", "");
    $('.button1, .button2').css({ "width": "", "top": "" });
    $('.next').css("max-width", "12%");
    $('.hat,.header').css("height", "7%")
    vis = $('#vis').height();
    height = $('.hat,.header').height();
    top = height + vis;
    $('.link:contains("Лабораторные")').text("Лабораторные работы");
    $('.content').css("top", top);
    $('.button1').css("left", "30%");
    $('.button2').css("right", "30%");
    $('.slides').css("top", "42%");
    $('#down').css("top", "101%");
    $('.dots').css("top", "93%");
    localstoragefont("fonta");
}

/*
* Установка шрифта увеличенного в полраза
*/
function fontaa() {
    $('.fontA, .fontAA, .fontAAA').removeClass('vis_active');
    $('.fontAA').addClass('vis_active');
    $('.content_index,.content,.name,table,.next,.up,.link').css({ "font-size": "16pt" });
    $('.next').css("max-width", "15%");
    $('.hat,.header').css("height", "8%");
    vis = $('#vis').height();
    height = $('.hat,.header').height();
    top = height + vis;
    $('.link:contains("Лабораторные")').text("Лабораторные работы");
    $('.content').css("top", top);
    $('.button1, .button2').css({ "top": "22%" });
    $(".slides").css("top", "45%");
    $('.button1, .button2').css({ "font-size": "16pt", "width": "15%" });
    $('.button1').css("left", "30%");
    $('.button2').css("right", "30%");
    $('#down').css("top", "110%");
    $('.dots').css("top", "91%");
    localstoragefont("fontaa");
}

/*
* Установка шрифта увеличенного в два раза
*/
function fontaaa() {
    $('.fontA, .fontAA, .fontAAA').removeClass('vis_active');
    $('.fontAAA').addClass('vis_active');
    $('.content_index,.content,.name,table,.next,.up,.link').css({ "font-size": "18pt" });
    $('.hat,.header').css("height", "9%");
    $('.link:contains("Лабораторные работы")').text("Лабораторные");
    vis = $('#vis').height();
    height = $('.hat,.header').height();
    top = height + vis;
    $('.content').css("top", top);
    $('.button1, .button2').css({ "top": "30%" });
    $(".slides").css("top", "60%");
    $('.button1, .button2').css({ "font-size": "18pt" });
    $('.button1').css("left", "30%");
    $('.button2').css("right", "30%");
    $('#down').css("top", "120%");
    $('.dots').css("top", "89%");
    localstoragefont("fontaaa");
}