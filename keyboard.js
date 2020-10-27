$(function(){
	var $write = $('#write');
	
	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html(); 

		if ($this.hasClass('delete')) {
			var html = $write.html();
			
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		
		// Add the character
		$write.html($write.html() + character);
	});
});
