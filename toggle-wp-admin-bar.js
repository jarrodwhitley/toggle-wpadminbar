jQuery(document).ready(function($) {

  $(function(toggleAdminBar) {
    $('#wp-admin-bar-root-default').append('<li id="show-hide-btn-container"><span>Hide Adminbar</span></li>');

    var adminbar = $('#wpadminbar');
    var btn = $('#show-hide-btn-container');
    var text = $('#show-hide-btn-container>span');

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
      })
    });

    // Click function
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
              'margin-left': '480px',
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
          marginTop: '-32px'
        });

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
  });
});
