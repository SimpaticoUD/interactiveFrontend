function simplify(name)
{
  console.log("Desde dentro:"+name);

  //var changedText = "Texto Simplificado para "+name;

  simplifyValue = document.getElementById('simplifySwitch').value;

  console.log(simplifyValue);

  if (simplifyValue == "simplifyOff") {
    console.log("No simplify");
  }else {
    console.log("simplifying");
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

  }



}

function switchSimplify()
{
  currentvalue = document.getElementById('simplifySwitch').value;
  if(currentvalue == "simplifyOff"){
    console.log("OFF->ON");
    document.getElementById("simplifySwitch").value="simplifyOn";
  }else{
    console.log("ON->OFF");
    document.getElementById("simplifySwitch").value="simplifyOff";
  }
}
