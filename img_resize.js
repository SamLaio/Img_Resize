jQuery.fn.extend({
    imgResize: function (settings) {
        var config = {
            'width': 780
        };
		var dim_img = this.find('img');
		var img_arr = new Array();
		var img_boolean = false;
		if (settings){$.extend(config, settings);}
		if(dim_img.length > 0){
			for(var i = 0; i < dim_img.length; i++){
				if(dim_img[i].complete){
					img_arr[i] = new Array();
					img_arr[i][0] = dim_img[i].naturalWidth;
					img_arr[i][1] = dim_img[i].naturalHeight;
				}
			}
			img_resize();
		}
		
		$(window).resize(function(){
			img_resize();
		});
		function img_resize(){
			for(var i = 0; i < dim_img.length; i++){
				var img_w = img_arr[i][0];
				var img_h = img_arr[i][1];
				var re_w = img_w;
				var re_h = img_h;
				
				if(img_w > config.width){
					re_w = config.width * 0.9;
					re_h = parseInt(config.width * img_h / img_w) * 0.9 ;
				}
				
				if(img_w > $(window).width()){
					re_w = $(window).width() * 0.9;
					re_h = parseInt($(window).width() * img_h / img_w) * 0.9 ;
				}else{
					re_w = img_w;
					re_h = img_h;
				}
				
				dim_img[i].style.width = re_w + 'px';
				dim_img[i].style.height = re_h + 'px';
			}
		}
	}
});