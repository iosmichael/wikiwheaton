$(document).ready(function(){
    $(".push_menu").click(function(){
         $(".wrapper").toggleClass("active");
    });
	setupMasonry();
	setupListeners();
    setupToggleMenu();
});

function setupMasonry(){
	var grid = $('.grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  grid.masonry({
	  	itemSelector: '.grid-item'
	  });
	});
}

function setupListeners(){
	$(".post").click(function(){
		$('#postModal').modal('show');
	});
	$("#toggleLoadButton").click(function(){
		$(".spinner").toggleClass("hide");
	});
    $("#toggleListButton").click(function(){
        $(".grid-item").toggleClass("grid-sys");
        var grid = $('.grid').imagesLoaded( function() {
      // init Masonry after all images have loaded
          grid.masonry({
            itemSelector: '.grid-item'
          });
        });

    });

    

	$(".search-box").click(function() {
		var search = $('#search');
        $('#search').addClass('open');
        $('#search input[type="search"]').focus();
        $('#search input[type="search"]').keypress(function (e) {
		 var key = e.which;
		 if(key == 13) {  // enter key
		     $("#search").removeClass('open');
		     $(".search-box").focus();
		  }
		});  
    });

    $("#search > .tip").click(function(){
    	console.log("cool");
    	$(this).animate({opacity:0},200,"linear");
    });
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

}

function setupToggleMenu(){
    $("#toggleMenuButton").click(function() {
        console.log("cool");
        $("#wrapper").toggleClass("toggled");
    });
}


/*$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
*/