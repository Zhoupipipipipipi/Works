$('.item-btn').click(function(){
	var e = $(this);
	show(e);
});

function show(e){
	$('.item-hover').hide();
	var id = e.attr('data-id');
	$('.item-hover'+id).show();
	if(!e.hasClass('item-btn-active')){
		$('.item-btn-active').removeClass('item-btn-active');
		e.addClass('item-btn-active');
	}
}

show($('.item-btn-active'));

