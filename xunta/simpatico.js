var annotatedText = [];
var paragraphs =[];

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {
    console.log("Página cargada");
    // Search for paragraphs
    paragraphs = document.getElementsByClassName("simp-text-paragraph");

}


function checkButtons(name)
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;

  if (simplifyValue == "simplifyOn") {
    simplify(name);
  }

  if(annotateValue == "annotateOn"){
    annotate(name);
  }

  if (citizenPediaValue == 'citizenPediaOn') {
    citizenpedia(name);
  }
}


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

function annotate(name)
{
  console.log("Annotate "+name);

  if (annotatedText[name] == undefined) { annotatedText[name] = "Add note"};

  document.getElementById(name).innerHTML = document.getElementById(name).innerHTML +
  '<span id="annotateGroup'+name+'"><textarea id="annotate" rows="4" cols="50">'+annotatedText[name]+'</textarea><input type="button" value="Send" id="sendAnnotate" onclick="sendAnnotate(\''+name+'\');"></span>';
  document.getElementById("annotateSwitch").value="annotateOff";
}

function citizenpedia(name)
{
  console.log("Citizenpedia "+name);
  window.location.href = 'http://asgard.deusto.es:52180/questions/create';
}
function sendAnnotate(name)
{
  console.log("Send Annotate "+name);
  annotatedText[name] = document.getElementById("annotate").value;

  document.getElementById("annotateGroup"+name).style.display = "none";

}


// Buttons
function switchSimplify()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;

  if (citizenPediaValue == "citizenPediaOn") {
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }

  if (annotateValue == "annotateOn") {
    document.getElementById("annotateSwitch").value="annotateOff";
  }

  if(simplifyValue == "simplifyOff"){
    console.log("OFF->ON");
    document.getElementById("simplifySwitch").value="simplifyOn";
  }else{
    console.log("ON->OFF");
    document.getElementById("simplifySwitch").value="simplifyOff";
  }
}

function switchAnnotate()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;

  if (simplifyValue == "simplifyOn") {
    document.getElementById("simplifySwitch").value="simplifyOff";
  }

  if (citizenPediaValue == "citizenPediaOn") {
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }

  if(annotateValue == "annotateOff"){
    console.log("OFF->ON");
    document.getElementById("annotateSwitch").value="annotateOn";
  }else{
    console.log("ON->OFF");
    document.getElementById("annotateSwitch").value="annotateOff";
  }


}

function switchCitizenPedia()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;


  if (simplifyValue == "simplifyOn") {
    document.getElementById("simplifySwitch").value="simplifyOff";
  }

  if (annotateValue == "annotateOn") {
    document.getElementById("annotateSwitch").value="annotateOff";
  }

  if(citizenPediaValue == "citizenPediaOff"){
    console.log("OFF->ON");
    document.getElementById("citizenPediaSwitch").value="citizenPediaOn";
  }else{
    console.log("ON->OFF");
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }


}
