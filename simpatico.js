var annotatedText = [];
var paragraphs =[];

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {
    // Add Simpatico bar
    document.getElementById("simpatico_top").innerHTML = '<div id="simpatico_bar" style="background-color:yellow"> <img src="logo.png" height="50" width="50" alt="Simpatico" /><i class="fa fa-hand-scissors-o fa-3x"><input type="button" value="simplifyOff" id="simplifySwitch" onclick="switchSimplify();"></i><i class="fa fa-book fa-3x"><input type="button" value="defineOff" id="defineSwitch" onclick="switchDefine();"></i><i class="fa fa-pencil fa-3x"><input type="button" value="annotateOff" id="annotateSwitch" onclick="switchAnnotate();"></i><i class="fa fa-question fa-3x"><input type="button" value="citizenPediaOff" id="citizenPediaSwitch" onclick="switchCitizenPedia();"></i></div>';
    document.getElementById("simpatico_top").innerHTML += '<style>.tooltip {position: relative;display: inline-block;border-bottom: 1px dotted black;}.tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;bottom: 125%;left: 50%;margin-left: -60px;opacity: 0;transition: opacity 1s;}.tooltip .tooltiptext::after {content: "";position: absolute;top: 100%;left: 50%;margin-left: -5px;border-width: 5px;border-style: solid;border-color: #555 transparent transparent transparent;}.tooltip:active .tooltiptext {visibility: visible;opacity: 1;}</style>';


    // Search for paragraphs
    paragraphs = document.getElementsByClassName("simp-text-paragraph");

    terms = document.getElementsByClassName("simp-text-term");
    //paragraphs.parrafo1.onclick = function() { checkButtons('parrafo1'); };

      for (var i = 0, len = paragraphs.length; i < len; i++) {
        paragraphs[i].setAttribute("id", "sp"+i);
        var paragraph = document.getElementById(paragraphs[i].id);
        var paragraphName = paragraphs[i].id;
        paragraphs[i].setAttribute("onclick", "checkButtons('"+paragraphName+"');");
        //paragraph.onclick = function(paragraphName) { checkButtons(paragraphName); };
      }

      for (var t = 0, len = terms.length; t < len; t++) {
        terms[t].setAttribute("id", "st"+t);
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
    document.getElementById("defineSwitch").value="defineOff";
  }

  for (var t = 0, len = terms.length; t < len; t++) {
    termToChange = document.getElementById(terms[t].id);
    changeTooltip(termToChange);

  }// FOR



}

function changeTooltip(termToChange)
{

  var termHTML = termToChange.innerHTML;
  var term = termToChange.innerText;
  term = term.replace("(","");
  term = term.replace(")","");

  jQuery.getJSON('http://192.168.33.10/interactiveFrontend/wikiproxy.php?',
    { 'term': term },
    function(wikiResponse)
    {

      var firstObject = wikiResponse.query.pages[Object.keys(wikiResponse.query.pages)[0]];
      termToChange.style["text-decoration"] = "underline";
      termToChange.innerHTML = '<div class="tooltip">'+termHTML+'<span class="tooltiptext">'+firstObject.title+'</span></div>';

    });


}
