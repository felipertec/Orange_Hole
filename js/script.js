$(document).ready(function(){
    $("#bt").click(function(){
      var msg = $('textarea[name=message]').val();
      $('textarea[name=message]').val(null);

      var container = `
        <div class="user-msg">
         <img class="M" src="img/mister-m.jpg" width="80px" height="100px">
          <p class="name" style="font-size: 15px; color: rgba(121,125,232);">Nome: Mister M</p>
          <p class="date" style="font-size: 10px; color: rgba(121,125,232);">Data: 20/06/2017</p>
          <p class="teste">`+msg+`</p>
        </div>`;

      $(".msg").prepend(container);

    });
});
