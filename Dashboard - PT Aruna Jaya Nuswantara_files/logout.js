$(document).ready(function(){
  $("#siteSignOut").click(function(e){
      Moengage.destroy_session();
  });
});