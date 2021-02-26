$(document).ready(function(){
    //문서가 준비완료되면 함수문의 내부 실행문을 실행하라는 의미

    $("nav li:nth-child(1)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(1)").offset().top}, 1000);

        //문서를 움직인다. animate({스크롤바의 상단위치: 타겟 대상물의 상단 절대위치})

        return false;
    });
    $("nav li:nth-child(2)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(2)").offset().top}, 1000);
        return false;
    });
    $("nav li:nth-child(3)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_03 article:nth-child(1)").offset().top}, 1000);
        return false;
    });
    $("nav li:nth-child(4)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_03 article:nth-child(2)").offset().top}, 1000);
        return false;
    });
})