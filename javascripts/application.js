$(function() {
  
  var createIcons = function(iconsNames, iconsContainer, iconsDir, hasBigIcons) {
    var iconsBlock = $('<div class="icons"/>');
    $(iconsNames).each(function(index, iconName) {
      if ('' === iconName) return;

      iconWrapper = $('<div class="icon"/>');
      iconWrapper.append("<img class='lazy " + (hasBigIcons ? 'has-big-icon' : '') + "' src='images/grey.gif' width='16' height='16' data-original='icons/" + iconsDir + "/16x16/" + iconName + ".png'/>");
      iconWrapper.append("<a>" + iconName + "</a>");
      iconsBlock.append(iconWrapper);
    });
    $(iconsContainer).append(iconsBlock);
  }

  createIcons(fatcowIconsNames, '#fatcow-icons', 'fatcow', true);
  createIcons(fugueIconsNames, '#fugue-icons', 'fugue', false);
  createIcons(ledIconsNames, '#led-icons', 'led', false);
  createIcons(famfamfamIconsNames, '#famfamfam-icons', 'famfamfam', false);

  $("img.lazy").lazyload();

  var searchHandler = function() {
    var filterValue = $('#filter').val();

    var lookupIcons = function(index, element) {
      var element = $(element);
      var text = element.text();
      if ('' === filterValue || text.indexOf(filterValue) >= 0) {
        element.show();
      } else {
        element.hide();
      }
    } 

    $('.icons').hide();
    $('.icon').each(lookupIcons);
    $('.icons').show();
    $('.icons').resize();
    $('#progress').hide();
  }

  $('#filter').on('keyup', function() {
    $('#progress').show();
    clearTimeout($(this).data('timeout'));
    $(this).data('timeout', setTimeout(searchHandler, 500));
  });

  $('.icon a').on('click', function() {
    $('#icon-details').html('<p>' + $(this).text() + '</p');

    var smallIcon = $(this).prev().clone();
    smallIcon.removeClass('lazy');
    smallIcon.addClass('icon-details-small');
    $('#icon-details').append(smallIcon);

    if (smallIcon.hasClass('has-big-icon')) {
      var bigIcon = smallIcon.clone().width(32).height(32)[0];
      bigIcon.src = bigIcon.src.replace('16x16', '32x32');
      $('#icon-details').append($(bigIcon).removeClass('icon-details-small').addClass('icon-details-big'));
    }

    $('#icon-details').dialog({ modal: true, width: 250, resizable: false });
  });
});
