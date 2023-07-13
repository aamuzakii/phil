
$(document).ready(function(){
  //Insider Script
  window.insider_object = {
    "user": {
      "gdpr_optin": true,
      "email": window.userEmail,
      "name": window.userName,
      "email_optin": true,
      "list_id": [1],
      "custom": {
        "user_type": window.userRole
      }
    }
  }
  //End Insider

  $(".cancelByAdmin").click(function(e){
    e.preventDefault();
    var id = $('#requestID').val();
    $('#btnActionCADetail').addClass('disabled');
    $.ajax({
      type: 'POST',
      url : $('#cancelEssRequest').val(),
      data: {id:id},
      dataType:'JSON',
      success: function (data)
      {
        if(data == "success")
        {
            alertToastDisplay('You have Canceled this Request', 'success', 3000);
            setTimeout(function() {
              location.reload();
            }, 3000);
        }
        else
        {
            alertToastDisplay('Request can not be canceled', 'danger', 3000);
        }
      }
    });
  });

  $(".approveByAdmin").click(function(e){
    e.preventDefault();
    alertToastDisplay('Please wait...', 'warning', 3000);
    $('#btnActionCADetail').addClass('disabled');
    $(".ca-confirm-request").modal('hide');

    const header = { id: $('#requestID').val()} ; // assumed requestID won't be null nor undefined
    var temp = {};
    temp['expense_approved'] = [];
    $('#expenseApprovedTable tbody tr').each(function(key, value){
        var id = $(this).find('td input[name="id[]"]').val();
        var approved_amount = $(this).find('td input[name="amount[]"]').val();

        var x = {
            'id' : id,
            'approved_amount' : approved_amount
        }
        temp['expense_approved'][key] = x;
    });
    var total_approved_amount = $('#total_approved_amount').text();
    total_approved_amount = total_approved_amount.replace(/[.*+?^${}()|[\]\\]/g, '');
    header.total_approved_amount = parseInt(total_approved_amount, 10);

    const data = {...header, ...temp };
    resetInvalidFeedback();
    $.ajax({
      type: 'POST',
      url : $('#urlApproveByAdmin').val(),
      data: data,
      dataType:'JSON',
      success: function (response)
      {
        if(response.status == 'success')
        {
          alertToastDisplay(response.message, 'success', 3000);
          setTimeout(function() {
            location.reload();
          }, 3000);
        }
        else if (response.status == 'error')
        {
            $.each(response.error, function(key, value){
                if(response.row) { // custom error on table
                    $('#expenseApprovedTable').each(function(){
                        $(this).find('tr:nth-child('+response.row+')')
                                    .find('[name*='+key+']')
                                    .nextAll('.invalid-feedback')
                                    .text(value)
                                    .css({"display" : "block"})
                        $(this).find('tr:nth-child('+response.row+')')
                                    .find('[name*='+key+']')
                                    .addClass("is-invalid")
                        $(this).find('tr:nth-child('+response.row+')')
                                    .find('[name*='+key+']')
                                    .nextAll('input.form-control')
                                    .addClass("is-invalid")
                    })
                } else{
                    showFormError(form, key, value)
                }

            });
            $('#btnActionCADetail').removeClass('disabled');
        }
      },
      error: function (response) {}
    });
  });

  $("*[data-target='.ca-request-reject']").on('click', function() {
    if ($(this).closest('.dropdown-item').hasClass('reject-settlement'))
    {
      $('#requestRejectLabel').text('Reject Settlement');
    }
    $(".ca-request-reject").modal('show');

    $(".rejectByAdmin").click(function(e){
      e.preventDefault();
      $('.rejectByAdmin').addClass('disabled');
      alertToastDisplay('Please wait...', 'warning', 5000);
      var csrfToken = $('meta[name="csrf-token"]').attr("content");
      var id = $('#requestID').val();
      var reason = $('#requestRejectReason').val();
      $('#btnActionCADetail').addClass('disabled');
      $.ajax({
        type: 'POST',
        url : $('#urlRejectByAdmin').val() ,
        data: {_csrf : csrfToken, id:id, reason:reason},
        dataType:'JSON',
        success: function (response)
        {
          if(response.status ='success')
          {
            alertToastDisplay(response.message, 'success', 3000);
            setTimeout(function() {
              location.reload();
            }, 3000);
          }
          else
          {
            alertToastDisplay('Oops, please refresh this page.', 'error', 3000);
          }
        },
        error: function (response) {}
      });
    });
  });

  
  $('body').on('click', '.openDemoAccount', function() {
    $.ajax({
      type      : 'GET',
      url       : $('#getFreeDemoURL').val(),
      async: false,
      dataType  : 'JSON',
      success: function (data) {
        if(data.status == "success") {
          window.open(data.data, '_blank');
        }
      }
    });
  });

  // Jquery ajax for SSO
  function jqueryAjaxForSSO({isDev, type, url, data, showToastOnError, defaultErrorMessage, isAsync, headers = []}) {
    const ssoIdForLocalDev = '4dfbc22a-3e8c-4fb9-a3d1-90bb67c06589'
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    $.ajax({
      type,
      url,
      beforeSend: function(request) {
        headers.forEach(header => {
          request.setRequestHeader(header.key, header.value);
        })
        if(isDev) {
          request.setRequestHeader("X-SSO-User-ID", ssoIdForLocalDev);
        } else {
          const sessionTokens = decodeURI(getCookie('_session_token')).split('"')
          request.setRequestHeader("Authorization", `Bearer ${sessionTokens[3]}`);
        }
      },
      async: isAsync,
      data: JSON.stringify(data),
      contentType: 'application/json',
      dataType: 'JSON',
      error: function (res) {
        console.error(res)
        if(showToastOnError) alertToastDisplay(res.responseText || defaultErrorMessage, 'error', 3000);
      },
    });
  }

  // Manpower Planning (MPP) mixpanel
  $('body').on('click', '.mppEntryPointNavbar2', function(e) {
    const type = 'POST'
    const isMppToggleOn = e.currentTarget.attributes['data-isMppToggleOn'].value
    const mppBaseUrl = e.currentTarget.attributes['data-mppBaseUrl'].value
    const companyId = e.currentTarget.attributes['data-companyId'].value
    const isDev = mppBaseUrl.includes('talentadev');
    const url = mppBaseUrl + 'v1/mixpanel/track'
    let event = 'MPP - Landing Page Open (when toggle is off)'
    if(isMppToggleOn == 1) {
      event = 'MPP - Entry point (when toggle is on)' 
    }
    const data = { event }
    const showToastOnError = false
    const defaultErrorMessage = 'Error on post mixpanel'
    const isAsync = true
    const headers = [
      { key:'X-Company-ID', value: companyId }
    ]

    jqueryAjaxForSSO({isDev, type, url, data, showToastOnError, defaultErrorMessage, isAsync, headers })
  });

  $('.navbar-right .navbar-nav .dropdown').on('shown.bs.dropdown', function () {
    const isMenuShown = $('.navbar-right .navbar-nav .dropdown-menu-mobile-navbar');
    if (isMenuShown.hasClass('show'))
      $('.tl-stage-is-mobile').addClass('back-drop');
  });
  $('.navbar-right .navbar-nav .dropdown').on('hidden.bs.dropdown', function () {
    const isMenuShown = $('.navbar-right .navbar-nav .dropdown-menu-mobile-navbar');
    if (!isMenuShown.hasClass('show'))
      $('.tl-stage-is-mobile').removeClass('back-drop');
  });
});