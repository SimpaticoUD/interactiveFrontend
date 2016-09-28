function simplify(name)
{
  console.log("Desde dentro:"+name);

  //var changedText = "Texto Simplificado para "+name;

  jQuery.getJSON('http://baconipsum.com/api/?callback=?',
    { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' },
    function(baconGoodness)
  {
    if (baconGoodness && baconGoodness.length > 0)
    {
      console.log(baconGoodness);
      //jQuery('#'+name+'').html(baconGoodness);
      document.getElementById(name).innerHTML = "<p>" + baconGoodness + "</p>";
    }
  });


  //$('#'+name+'').html(changedText);
}
