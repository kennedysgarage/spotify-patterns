$(document).ready(function() {
	$('#html textarea').live('keyup', function(e) {
		$('#preview').html($(this).val());
	});
	$('#css textarea').live('keyup', function(e) {
		$('#pattern style').html($(this).val());
	});
});