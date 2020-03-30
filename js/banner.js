// JavaScript Document
$('#ban li').eq(0).show();
$('#number li:eq(0)').addClass('active');
var n = 0;
function showImg(){
	if(n < $('#ban li').length-1){n++;}else{n=0;}
	changeImg();
	}
var timer = setInterval(showImg,1000);
$('.banner').hover(function(){
	clearInterval(timer);
	$('.banner div').show();
	},function(){
	timer = setInterval(showImg,1000);	
	$('.banner div').hide();
	});
$('#left').click(function(){
	if(n>0){n--;}else{n=$('#ban li').length-1;}
	changeImg();
	});
$('#right').click(function(){
	showImg();
	});
$('#number li').mouseover(function(){
	n = $(this).index(); 
	changeImg();
	});
function changeImg(){
	$('#ban li').hide();
	$('#ban li').eq(n).show();
	$('#number li').removeClass('active');
	$('#number li').eq(n).addClass('active');
	}