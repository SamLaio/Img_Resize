Img_Resize
==========

If "img size" > "windows size", then img size = windows size.
Or
"img size" > 780px, then img size = 780px.

only in page's HTML add this code:

＜script type="text/javascript" src="img_resize.js"＞＜/script＞

＜script＞
  //#about_right is you want to img resize id
  
	$(window).load(function(){
		$('#about_right').imgResize();
	});
	
＜/script＞

＜div id = 'about_right'＞
  ＜img src = 'my_photo' /＞
＜/div＞
