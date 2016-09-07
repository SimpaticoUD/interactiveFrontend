  var i = document.getElementById("menu").style;
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
    }, false);
    document.addEventListener('click', function(e) {
      i.opacity = "0";
      setTimeout(function() {
        i.visibility = "hidden";
      }, 501);
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function(e) {
      console.log("Aquí");
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
    });
    document.attachEvent('onclick', function(e) {
      i.opacity = "0";
      setTimeout(function() {
        i.visibility = "hidden";
      }, 501);
    });
  }

  function menu(x, y) {
    i.top = y + "px";
    i.left = x + "px";
    i.visibility = "visible";
    i.opacity = "1";
  }

  function simplify(name)
  {
    console.log("Desde dentro:"+name);

    //var changedText = "Texto Simplificado para "+name;

    $.getJSON('http://baconipsum.com/api/?callback=?',
      { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' },
      function(baconGoodness)
    {
      if (baconGoodness && baconGoodness.length > 0)
      {
        $('#'+name+'').html(baconGoodness);
      }
    });


    //$('#'+name+'').html(changedText);
  }

  function sendToCitizenPedia()
  {
    alert ("Citizenpedia");
  }



  $(document).ready(function(){
      $("#simplify").on('click',function(){
          simplify(name);
          //parameter value
      });

      $("#citizenpedia").on('click',function(){
          sendToCitizenPedia();
          //parameter value
      });

  });


  $(document).ready(function()
  {
  	$("#baconButton").click(function()
  	{
  		$.getJSON('http://baconipsum.com/api/?callback=?',
  			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' },
  			function(baconGoodness)
  		{
  			if (baconGoodness && baconGoodness.length > 0)
  			{
  				$("#baconIpsumOutput").html('');
  				for (var i = 0; i < baconGoodness.length; i++)
  					$("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
  				$("#baconIpsumOutput").show();
  			}
  		});
  	});
  });
