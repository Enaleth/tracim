$(document).ready(function () {

  // toggle sidebar-left width to fixed or auto
  $('#toggle-left-sidebar-width').click( function() {
    sidebar = $('#sidebar-left')
    buttonIcon = $('> i', this)

    if (sidebar.hasClass('fixed-width-sidebar')) {
      sidebar.removeClass('fixed-width-sidebar')
      buttonIcon.removeClass('fa-angle-double-left').addClass('fa-angle-double-right')
    } else {
      sidebar.addClass('fixed-width-sidebar')
      buttonIcon.removeClass('fa-angle-double-right').addClass('fa-angle-double-left')
    }
  })

  var homeTabList = ['#unread-content-panel', '#recent-activity-panel', '#workspaces-panel']
  // toggle the active tab in home page
  $('.content__home__tab__item.unread, .content__home__tab__item.recent_activity, .content__home__tab__item.workspace').click(function () {
    $('.content__home__tab__item.unread, .content__home__tab__item.recent_activity, .content__home__tab__item.workspace').removeClass('active')
    homeTabList.forEach(function (item) { $(item).css('display', 'none') })
  })
  $('.content__home__tab__item.unread').click(function () {
    $(this).addClass('active')
    $('#unread-content-panel').css('display', 'block') })
  $('.content__home__tab__item.recent_activity').click(function () {
    $(this).addClass('active')
    $('#recent-activity-panel').css('display', 'block')
  })
  $('.content__home__tab__item.workspace').click(function () {
    $(this).addClass('active')
    $('#workspaces-panel').css('display', 'block')
  })

  // Côme - 2017-01-06 - is the code bellow usefull ?
  // $('#current-page-breadcrumb-toggle-button').click( function() {
  //   $('#current-page-breadcrumb').toggle();
  // });

  // switch btn read/work btn
  $('.header__navbar').on('click', '.header__navbar__switch-mode.switch-read-mode', function () {
    $(this).removeClass('switch-read-mode').addClass('switch-work-mode').html('<i class="fa fa-edit fa-fw"></i> ' + __('btnWorkMode'))
    $('#sidebar-left, #sidebar-right').hide()
    $('.content__wrapper').css({margin: '0'})
  })
  $('.header__navbar').on('click', '.header__navbar__switch-mode.switch-work-mode', function () {
    $(this).removeClass('switch-work-mode').addClass('switch-read-mode').html('<i class="fa fa-eye fa-fw"></i> ' + __('btnReadMode'))
    $('#sidebar-left, #sidebar-right').show()
    $('.content__wrapper').css({margin: '0 260px'})
  })

  // add select2 for admin/workspace/<id> for user selection
  if ($('#add-role-from-existing-user-form').length > 0) {
    $('#user_id').select2({
      "language": {
        "noResults": function () {
          return __('select2EmptyResult')
        }
      },
      escapeMarkup: function (markup) {
        return markup
      }
    })
  }

  // btn to display the workspace manager in template/workspace/get_one.mak
  $('.workspace__detail__sidebar-right__btnadministrate').click(function () {
    $('#workspace_manager').css('display', 'block')
  })

  $('#modalWorkspaceManagerBtnClose').click(function () {
    $('#workspace_manager').css('display', 'none')
  })

})
