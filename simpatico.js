var annotatedText = [];
var paragraphs =[];

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {
    // Add Simpatico bar
    document.getElementById("simpatico_top").innerHTML = '<div id="simpatico_bar" style="background-color:yellow"> <img src="logo.png" height="50" width="50" alt="Simpatico" /><i class="fa fa-hand-scissors-o fa-3x"><input type="button" value="simplifyOff" id="simplifySwitch" onclick="switchSimplify();"></i><i class="fa fa-book fa-3x"><input type="button" value="defineOff" id="defineSwitch" onclick="switchDefine();"></i><i class="fa fa-pencil fa-3x"><input type="button" value="annotateOff" id="annotateSwitch" onclick="switchAnnotate();"></i><i class="fa fa-question fa-3x"><input type="button" value="citizenPediaOff" id="citizenPediaSwitch" onclick="switchCitizenPedia();"></i><i class="fa fa-user fa-3x"><input type="button" value="logIn" id="loginButton" onclick="handleAuthClick();"></i><button style="display:none" id="signout-button" onclick="handleSignoutClick()">Sign Out</button></div>';
    document.getElementById("simpatico_top").innerHTML += '<style>.tooltip {position: relative;display: inline-block;border-bottom: 1px dotted black;}.tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;bottom: 125%;left: 50%;margin-left: -60px;opacity: 0;transition: opacity 1s;}.tooltip .tooltiptext::after {content: "";position: absolute;top: 100%;left: 50%;margin-left: -5px;border-width: 5px;border-style: solid;border-color: #555 transparent transparent transparent;}.tooltip:active .tooltiptext {visibility: visible;opacity: 1;}</style>';

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
  simplifyValue = document.getElementById('simplifySwitch').value;

  if (simplifyValue == "simplifyOff") {
    console.log("No simplify");
  }else {
    console.log("simplifying");
    // jQuery.getJSON('http://baconipsum.com/api/?callback=?',
    //   { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'1' },
    //   function(baconGoodness)
    // {
    //   if (baconGoodness && baconGoodness.length > 0)
    //   {
    //     console.log(baconGoodness);
    //     document.getElementById(name).innerHTML = "<p>" + baconGoodness + "</p>";
    //   }
    // });

    switch (name) {
      case "sp0":
        var textReplace = '<li style="font-size: 1em; list-style: circle">a) Copia compulsada do documento nacional de identidade <span class="simp-text-term">(DNI)</span> ou ben do pasaporte ou do número de identificación de estranxeiro <span class="simp-text-term">(NIE)</span>.	</li>';
        break;

      case "sp1":
        var textReplace = '<li style="font-size: 1em; list-style: circle">b) Copia do certificado de empadroamento, emitido polo concello correspondente.</li>';
        break;

      case "sp2":
        var textReplace = '<li style="font-size: 1em; list-style: circle">c) Copia da declaración do imposto da renda das persoas físicas correspondente ao último período en que se presente a solicitude.</li>';
        break;

      case "sp3":
        var textReplace = '<li style="font-size: 1em; list-style: circle">d) Copia do libro de familia da persoa solicitante no caso de queira acudir ao programa.	</li>';
        break;

      case "sp4":
        var textReplace = '<li style="font-size: 1em; list-style: circle">e) Certificado do grao de discapacidade do fillo ou filla da persoa solicitante, de la <span class="simp-text-term">Xunta</span> de Galicia.</li>';
        break;

      default:

    }

    document.getElementById(name).innerHTML = textReplace;

  }



}

function annotate(name)
{

  if (annotatedText[name] == undefined) { annotatedText[name] = "Add note"};

  document.getElementById(name).innerHTML = document.getElementById(name).innerHTML +
  '<span id="annotateGroup'+name+'"><textarea id="annotate" rows="4" cols="50">'+annotatedText[name]+'</textarea><input type="button" value="Send" id="sendAnnotate" onclick="sendAnnotate(\''+name+'\');"></span>';
  document.getElementById("annotateSwitch").value="annotateOff";
}

function citizenpedia(name)
{
  window.location.href = 'http://asgard.deusto.es:52180/questions/create';
}
function sendAnnotate(name)
{
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

  // Search for paragraphs
  paragraphs = document.getElementsByClassName("simp-text-paragraph");

  if(simplifyValue == "simplifyOff"){
    document.getElementById("simplifySwitch").value="simplifyOn";

    //paragraphs.parrafo1.onclick = function() { checkButtons('parrafo1'); };

      for (var i = 0, len = paragraphs.length; i < len; i++) {
        paragraphs[i].setAttribute("id", "sp"+i);
        var paragraph = document.getElementById(paragraphs[i].id);
        var paragraphName = paragraphs[i].id;
        paragraphs[i].setAttribute("onclick", "checkButtons('"+paragraphName+"');");
        paragraphs[i].style.borderLeft = "thick solid #0000FF";
        //paragraph.onclick = function(paragraphName) { checkButtons(paragraphName); };
      }

  }else{
    document.getElementById("simplifySwitch").value="simplifyOff";
    for (var i = 0, len = paragraphs.length; i < len; i++) {
      paragraphs[i].style.borderLeft = "none";
      //paragraph.onclick = function(paragraphName) { checkButtons(paragraphName); };
    }
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
    document.getElementById("annotateSwitch").value="annotateOn";
  }else{
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
    document.getElementById("citizenPediaSwitch").value="citizenPediaOn";
  }else{
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
    document.getElementById("defineSwitch").value="defineOn";
  }else{
    document.getElementById("defineSwitch").value="defineOff";
  }

  terms = document.getElementsByClassName("simp-text-term");

  for (var t = 0, len = terms.length; t < len; t++) {
    terms[t].setAttribute("id", "st"+t);
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
