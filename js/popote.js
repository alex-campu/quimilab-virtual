var count = 0;
function count_click_add() {
count += 1;
}
var count2 = 0;
function count_click2() {
count2 += 1;
}
$(document).ready(function() {

/* $("img").click(function(){
     $(".big-straw").animate({
        width: '500px',
        height: '300px'
     }, 1000);
     $(".male").fadeOut();
     $(".straw-rule").show().animate({opacity: '1'}, 2000);
 }); */
 $(".straw").click(function(){      
     $(".straw").fadeOut();
     $("#straw-big").show().animate({opacity: '1'}, 2000);
 });
 $(".rule").click(function(){      
     $(".rule").fadeOut();
     $("#straw-rule").show().animate({opacity: '1'}, 200);
     $("#straw-big").hide();
     $("#m1").show().animate({opacity: '1'}, 3000);        
 });
 $("#m1").click(function(){ 
    $("#m1").fadeOut();
    $("#straw-rule").fadeOut();
    $("#m2").show().animate({opacity: '1'}, 3000);
    $("#1").show().animate({opacity: '1'}, 200);
});
$("#m2").click(function(){ 
    $("#m2").fadeOut();
    $("#1").fadeOut();
    $("#m3").show().animate({opacity: '1'}, 3000);
    $("#2").show().animate({opacity: '1'}, 200);
});
$("#m3").click(function(){ 
    $("#m3").fadeOut();
    $("#2").fadeOut();
    $("#m4").show().animate({opacity: '1'}, 3000);
    $("#3").show().animate({opacity: '1'}, 200);
});
$("#m4").click(function(){ 
    $("#m4").fadeOut();
    $("#3").fadeOut();
    $("#m5").show().animate({opacity: '1'}, 3000);
    $("#4").show().animate({opacity: '1'}, 200);
});
$("#m5").click(function(){ 
    $("#m5").fadeOut();
    $("#4").fadeOut();
    $("#m6").show().animate({opacity: '1'}, 3000);
    $("#5").show().animate({opacity: '1'}, 200);
});
$("#m6").click(function(){ 
    $("#m6").fadeOut();
    $("#5").fadeOut();
    $("#m7").show().animate({opacity: '1'}, 3000);
    $("#6").show().animate({opacity: '1'}, 200);
});
$("#m7").click(function(){ 
    $("#m7").fadeOut();
    $("#6").fadeOut();
    $("#m8").show().animate({opacity: '1'}, 3000);
    $("#7").show().animate({opacity: '1'}, 200);
});
$("#m8").click(function(){ 
    $("#m8").fadeOut();
    $("#7").fadeOut();
    $("#m9").show().animate({opacity: '1'}, 3000);
    $("#8").show().animate({opacity: '1'}, 200);
});
$("#m9").click(function(){ 
    $("#m9").fadeOut();
    $("#8").fadeOut();
    $("#m10").show().animate({opacity: '1'}, 3000);
    $("#9").show().animate({opacity: '1'}, 200);
});
$("#m10").click(function(){ 
    $("#m10").fadeOut();
    $("#9").fadeOut();
    $("#10").show().animate({opacity: '1'}, 200);
    count += 1;
});
$("#plas").click(function(){ 
    if(count==1) {
    $("#10").fadeOut();
    $("#11").show().animate({opacity: '1'}, 200);
    $(".rule").show().animate({opacity: '1'}, 3000);
    } else if(count==4) {
    $("#14").fadeOut();
    $("#15").show().animate({opacity: '1'}, 200);
    } 
});
$("#ball").click(function(){ 
    if(count==1) {
    $("#11").fadeOut();
    $("#12").show().animate({opacity: '1'}, 200);
    count += 1;
    } else if (count==2) {
    $("#12").fadeOut();
    $("#13").show().animate({opacity: '1'}, 200);
    count += 1;
    } else if (count==3) {
    $("#13").fadeOut();
    $("#14").show().animate({opacity: '1'}, 200);
    count += 1;
    } 
});
$("#15").click(function(){ 
    $("#15").fadeOut();
    $("#16").show().animate({opacity: '1'}, 200);
});
$("#15").click(function(){ 
    $("#15").fadeOut();
    $("#16").show().animate({opacity: '1'}, 200);
});
$("#16").click(function(){ 
    $("#17").show().animate({opacity: '1'}, 200);
});
$("#17").click(function(){ 
    $("#17").fadeOut();
    $("#18").show().animate({opacity: '1'}, 200);
    $("#go").show().animate({opacity: '1'}, 3000);
});
$("#go").click(function(){ 
    if(count2==0){
    $("#16").animate({top: '+=19.5vw'}, 15000); 
    count2 += 1;
} else if(count2==1){
    $("#16").animate({top: '+=21vw'}, 3000); 
    count2 += 1;
}else if(count2==2){
    $("#16").animate({top: '+=21.7vw'}, 1000); 
    count2 += 1;
} else if(count2==3){
    $("#16").animate({top: '+=19.3vw'}, 40000); 
    count2 += 1;
} else if(count2==4){
    $("#16").animate({top: '+=16.8vw'}, 47000); 
    $("#endP").show().animate({opacity: '1'}, 3000);
}  
    $("#18").animate({opacity: '0.5'}, 2000);
    $("#up").show().animate({opacity: '1'}, 3000);
    $("#go").fadeOut();
});
$("#up").click(function(){ 
    $("#up").fadeOut();
    $("#16").animate({top: '-=20vw'}, 2000); 
   // $("#16").animate({left: '26.5vw'}, 2000); 
   if(count2<5){
   $("#16").animate({left: '+=8vw'}, 2000); 
   }
    $("#go").show().animate({opacity: '1'}, 2000);
    $("#18").animate({opacity: '1'}, 2000);
});

/* $("#go").click(function(){ 
    $("#16").animate({top: '37.3vw'}, 2000); 
    $("#18").animate({opacity: '0.5'}, 2000);
    $("#up").show().animate({opacity: '1'}, 3000);
    $("#go").fadeOut();
}); */

  });

function genCode2(length) {
var result           = '';
var characters       = 'ABCDEFvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}

var codeFin = genCode2(10);
function finalProof2() {
alert("Felicidades, has completado la práctica, tu código de comprobación es: " + codeFin + ", copialo para mostrarlo luego a tu maestra");
}