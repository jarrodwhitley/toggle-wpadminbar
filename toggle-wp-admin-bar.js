jQuery(document).ready(function($) {
	
  $(function(toggleAdminBar) {
    $('#wp-admin-bar-root-default').append('<li id="show-hide-btn-container"><span>Hide Adminbar</span></li><svg class="fa-eye-slash" color="#fff" background-color="#fff" width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M555 1335l78-141q-87-63-136-159t-49-203q0-121 61-225-229 117-381 353 167 258 427 375zm389-759q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm363-191q0 7-1 9-106 189-316 567t-315 566l-49 89q-10 16-28 16-12 0-134-70-16-10-16-28 0-12 44-87-143-65-263.5-173t-208.5-245q-20-31-20-69t20-69q153-235 380-371t496-136q89 0 180 17l54-97q10-16 28-16 5 0 18 6t31 15.5 33 18.5 31.5 18.5 19.5 11.5q16 10 16 27zm37 447q0 139-79 253.5t-209 164.5l280-502q8 45 8 84zm448 128q0 35-20 69-39 64-109 145-150 172-347.5 267t-419.5 95l74-132q212-18 392.5-137t301.5-307q-115-179-282-294l63-112q95 64 182.5 153t144.5 184q20 34 20 69z"/></svg>');

    var adminbar = $('#wpadminbar');
    var btn = $('#show-hide-btn-container');
    var text = $('#show-hide-btn-container>span');
	var icon = $('.fa-eye-slash');
	var secondary = $('#wp-admin-bar-top-secondary');
	var profileBtn = $('#wpadminbar .ab-top-menu>.menupop>.ab-sub-wrapper');
	
    //Intial Style
    btn.css({
      'display': 'grid',
      'text-align': 'center',
      'cursor': 'pointer'
    });
    text.css({
      'align-self': 'center',
      'color': '#eee',
      'font-size': '14px',
      'font-weight': '400',
      'font-family': 'inherit'
    });
    text.hover(function() {
      text.css({
        'color': '#00b9eb',
        'transition': 'all ease .3s'
      });
    }, function() {
      text.css({
        'color': '#eee',
      });
    });
    icon.css({
    	'fill':'#82878c',
    	'margin-top': '4px',
    	'margin-left': '12px',
    	'cursor':'pointer'
    });
    secondary.css({
	'position':'absolute',
    'top': '0',
    'right': '0'
    });
    profileBtn.css('right','0');
    
    // Screen width toggle
    function buttonToggle() {
	    if ($(window).width() <= 782) {
	    		btn.hide();
	    		icon.show();
	    		secondary.css('margin-top','-55px;');
	    	} else {
	    		btn.show();
	    		icon.hide();
	    	}
	    }
    buttonToggle();

    // Text Button click function
    btn.click(function() {
      if (btn.hasClass('hidden')) {

        // Show
        text.text('Hide Adminbar').css('background-color', 'none');
        btn.css({
          'margin-top': '0',
          'position': 'relative',
          'margin-left': '0',
          'border-radius': '0'
        });
        btn.toggleClass('hidden');
        adminbar.animate({
          marginTop: '0'
        });
        $('body').animate({
          marginTop: '0'
        });
        $('body').off('mouseleave');

      } else {

        // Hide
        $.when(adminbar.animate({
            marginTop: '-60px'
          }))
          .then(function() {
            btn.css({
              'position': 'absolute',
              'margin-left': '480px', // Change this value to shift the x position of the "Show Adminbar" button
            });
            text.text('Show Adminbar');
            btn.animate({
              marginTop: '-60px'
            });
            text.css({
              'border-radius': '0 0 5px 5px',
              'background-color': '#23282d',
              'padding': '0 10px'
            });
            btn.toggleClass('hidden');
          });
	    $('body').animate({marginTop: '-32px'});

        // Peek
        $('body').on('mouseleave', function() {
          btn.animate({
            marginTop: '60px'
          });
          setTimeout(function() {
            if (btn.hasClass('hidden')) {
              btn.animate({
                marginTop: '-60px'
              });
            }
          }, 3000);
        });
      }
    });
    
    // Icon click function
    icon.click(function() {
    	if (btn.hasClass('hidden')) {

        // Show
    	text.text('Hide Adminbar').css('background-color','none');
        btn.css({
          'margin-top': '0',
          'position': 'relative',
          'margin-left': '0',
          'border-radius': '0'
        });
        btn.toggleClass('hidden');
        adminbar.animate({
          marginTop: '0'
        });
        $('body').animate({
          marginTop: '0'
        });
        $('body').off('mouseleave');

      } else {

        // Hide
        $.when(adminbar.animate({marginTop: '-60px'}))
          .then(function() {
            btn.css({
              'position': 'absolute',
              'margin-left': '480px', // Change this value to shift the x position of the "Show Adminbar" button
            });
            text.text('Show Adminbar');
            btn.animate({
              marginTop: '-60px'
            });
            text.css({
              'border-radius': '0 0 5px 5px',
              'background-color': '#23282d',
              'padding': '0 10px'
            });
            btn.toggleClass('hidden');
          });
        $('body').animate({
          marginTop: '-46px'
        });
      }
    });
    
    // Screen width listener
    $(window).resize(function() {
    	buttonToggle();
    });
  });
});
