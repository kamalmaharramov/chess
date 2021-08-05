$(function(){ 
   
    
   let homeselector='<table>'
   for( let i=0;i<8;i++){
       homeselector +='<tr>'
   
   for( let j=0;j<8;j++){
        let className = ((i%2==0) && (j%2!=0)) || ((i%2!=0) && (j%2==0)) ? 'black' : 'white';
       homeselector +=`<td class="${className}">${i}: ${j}</td>`
   }
   homeselector +='</tr>'
   
}
homeselector +='</table>'
$('div').html(homeselector)

 var trchildren=$('tr').find('.black')
 var trchidrenposition=trchildren.offset()
 //alert(trchidrenposition.left)
 var trchidrenpositiontop=trchidrenposition.top
 var trchidrenpositionleft=trchidrenposition.left
 
 $('.black').click(function(){
     $('span').css('display','inline-block')
    $('span').offset({top:trchidrenpositiontop,left:trchidrenposition.left})
   
 })
  $('.btnclick').click(function(){
   var i=$('.i').val()
   var j=$('.j').val()
   if (((i%2==0) && (j%2!=0)) || ((i%2!=0) && (j%2==0))){
    
    $('span').css('display','inline')
    $('span').offset({top:trchidrenpositiontop,left:trchidrenposition.left})


  }
  })
 
})
