var annotatedText = [];
var paragraphs =[];

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {
    console.log("Página cargada");


    // Search for paragraphs
    paragraphs = document.getElementsByClassName("simp-text-paragraph");

    terms = document.getElementsByClassName("simp-text-term");
    //paragraphs.parrafo1.onclick = function() { checkButtons('parrafo1'); };

      for (var i = 0, len = paragraphs.length; i < len; i++) {
        var paragraph = document.getElementById(paragraphs[i].id);
        var paragraphName = paragraphs[i].id;
        paragraph.onclick = function(paragraphName) { checkButtons(paragraphName); };
      }

      for (var t = 0, len = terms.length; t < len; t++) {
        terms[t].setAttribute("id", "t"+t);
        // var paragraph = document.getElementById(paragraphs[i].id);
        // var paragraphName = paragraphs[i].id;
        // paragraph.onclick = function(paragraphName) { checkButtons(paragraphName); };
      }




}


function checkButtons(name)
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;

  if (simplifyValue == "simplifyOn") {
    simplify(name.currentTarget.id);
  }

  if(annotateValue == "annotateOn"){
    annotate(name.currentTarget.id);
  }

  if (citizenPediaValue == 'citizenPediaOn') {
    citizenpedia(name.currentTarget.id);
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
  defineValue = document.getElementById('defineSwitch').value;

  if (citizenPediaValue == "citizenPediaOn") {
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }

  if (annotateValue == "annotateOn") {
    document.getElementById("annotateSwitch").value="annotateOff";
  }

  if (defineValue == "defineOn") {
    document.getElementById("defineSwitch").value="defineOff";
  }

  if(simplifyValue == "simplifyOff"){
    console.log("Switch OFF->ON");
    document.getElementById("simplifySwitch").value="simplifyOn";
  }else{
    console.log("Switch ON->OFF");
    document.getElementById("simplifySwitch").value="simplifyOff";
  }
}

function switchAnnotate()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;
  defineValue = document.getElementById('defineSwitch').value;

  if (simplifyValue == "simplifyOn") {
    document.getElementById("simplifySwitch").value="simplifyOff";
  }

  if (citizenPediaValue == "citizenPediaOn") {
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }

  if (defineValue == "defineOn") {
    document.getElementById("defineSwitch").value="defineOff";
  }

  if(annotateValue == "annotateOff"){
    console.log("Switch OFF->ON");
    document.getElementById("annotateSwitch").value="annotateOn";
  }else{
    console.log("Switch ON->OFF");
    document.getElementById("annotateSwitch").value="annotateOff";
  }


}

function switchCitizenPedia()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;
  defineValue = document.getElementById('defineSwitch').value;


  if (simplifyValue == "simplifyOn") {
    document.getElementById("simplifySwitch").value="simplifyOff";
  }

  if (annotateValue == "annotateOn") {
    document.getElementById("annotateSwitch").value="annotateOff";
  }

  if (defineValue == "defineOn") {
    document.getElementById("defineSwitch").value="defineOff";
  }

  if(citizenPediaValue == "citizenPediaOff"){
    console.log("Citizenpedia OFF->ON");
    document.getElementById("citizenPediaSwitch").value="citizenPediaOn";
  }else{
    console.log("Citizenpedia ON->OFF");
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }


}

function switchDefine()
{
  simplifyValue = document.getElementById('simplifySwitch').value;
  annotateValue = document.getElementById('annotateSwitch').value;
  citizenPediaValue = document.getElementById('citizenPediaSwitch').value;
  defineValue = document.getElementById('defineSwitch').value;

  if (simplifyValue == "simplifyOn") {
    document.getElementById("simplifySwitch").value="simplifyOff";
  }

  if (annotateValue == "annotateOn") {
    document.getElementById("annotateSwitch").value="annotateOff";
  }

  if (citizenPediaValue == "citizenPediaOn") {
    document.getElementById("citizenPediaSwitch").value="citizenPediaOff";
  }

  if(defineValue == "defineOff"){
    console.log("Define OFF->ON");
    document.getElementById("defineSwitch").value="defineOn";
  }else{
    console.log("Define ON->OFF");
    document.getElementById("deineSwitch").value="defineOff";
  }

  for (var t = 0, len = terms.length; t < len; t++) {
    termToChange = document.getElementById(terms[t].id);
    var termHTML = termToChange.innerHTML;

    //https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=DNI&srwhat=text&srlimit=2
    jQuery.getJSON('http://baconipsum.com/api/?callback=?',
      { 'type':'meat-and-filler', 'start-with-lorem':'1', 'sentences':'1' },
      function(baconGoodness)
    {
      if (baconGoodness && baconGoodness.length > 0)
      {
        console.log(baconGoodness);
        termToChange.style["text-decoration"] = "underline";
        termToChange.innerHTML = '<div class="tooltip">'+termHTML+'<span class="tooltiptext">'+baconGoodness+'</span></div>';
      }
    });
  }



}
