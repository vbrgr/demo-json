/* Uplode */
$(function() {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
    });
  
    // We can watch for our custom `fileselect` event like this
    $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {
  
            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;
  
            if( input.length ) {
                input.val(log);
            } else {
                if( log ) alert(log);
            }
  
        });
    });

  });
/* Uplode */	


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
		$(".main-navh").click(function(){
			$("body").removeClass("enlarged");
		});
});

	function activeMenu(e){
            if($("body").hasClass("enlarged")){
                var this1=e;
                setTimeout(function(){
                    console.log($(this1).attr('class'));
                    $(this1).parent().addClass("active"); // add active to li of the current link
                    $(this1).addClass("active");
                    $(this1).attr("aria-expanded",true);
                    $(this1).parent('li').find('.nav').addClass("in");
                    $(this1).parent('li').find('.nav').attr("aria-expanded",true);
                    $(this1).parent('li').find('.nav').removeAttr("style");
                },300);
            }
            $("body").removeClass("enlarged");
	}
	function deActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).removeClass("active");
                $(this).parent().removeClass("active"); // add active to li of the current link
                $(this).parent().parent().removeClass("in");
                $(this).parent().parent().prev().removeClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().removeClass("active");
                $(this).parent().parent().parent().parent().removeClass("in"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().removeClass("active");
            }
        });
    }



