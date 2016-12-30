	jQuery(function(){
		var table_descriptions_exist = false;
		jQuery('div[id$="-tile"] .panel-body-description').each(function(){
			if(jQuery.trim(jQuery(this).html()).length) table_descriptions_exist = true;
		});
		
		if(!table_descriptions_exist){
			jQuery('div[id$="-tile"] .panel-body-description').css({height: 'auto'});
		}
		
		jQuery('.panel-body .btn').height(32);
	});

	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

		elems.forEach(function(html) {
			var switchery = new Switchery(html);
});
