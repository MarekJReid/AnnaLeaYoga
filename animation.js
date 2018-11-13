$('div.animalcontent').hide();

$('p.animal').bind('mouseover', function() {
    
    $('#'+$(this).attr('id')+'content').fadeIn();
});  