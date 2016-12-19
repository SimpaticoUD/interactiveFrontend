var proxyURL = 'http://asgard.deusto.es:52080/';

var annotatedText = [];
var paragraphs =[];

var buttons = ["simplify", "forms", "citizenpedia","login"];

document.addEventListener('DOMContentLoaded', pageLoaded);

function pageLoaded() {
    // Add Simpatico bar
    //document.getElementById("simpatico_top").innerHTML = '<div id="simpatico_bar" style="background-color:yellow"> <img src="logo.png" height="50" width="50" alt="Simpatico" /><i class="fa fa-hand-scissors-o fa-3x"><input type="button" value="simplifyOff" id="simplifySwitch" onclick="switchSimplify();"></i><i class="fa fa-book fa-3x"><input type="button" value="defineOff" id="defineSwitch" onclick="switchDefine();"></i><i class="fa fa-pencil fa-3x"><input type="button" value="annotateOff" id="annotateSwitch" onclick="switchAnnotate();"></i><i class="fa fa-question fa-3x"><input type="button" value="citizenPediaOff" id="citizenPediaSwitch" onclick="switchCitizenPedia();"></i><i class="fa fa-user fa-3x"><input type="button" value="logIn" id="loginButton" onclick="handleAuthClick();"></i><button style="display:none" id="signout-button" onclick="handleSignoutClick()">Sign Out</button></div>';
    //document.getElementById("simpatico_top").innerHTML += '<style>.tooltip {position: relative;display: inline-block;border-bottom: 1px dotted black;}.tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;bottom: 125%;left: 50%;margin-left: -60px;opacity: 0;transition: opacity 1s;}.tooltip .tooltiptext::after {content: "";position: absolute;top: 100%;left: 50%;margin-left: -5px;border-width: 5px;border-style: solid;border-color: #555 transparent transparent transparent;}.tooltip:active .tooltiptext {visibility: visible;opacity: 1;}</style>';

    simpaticoBarHtml = '<div id="simpatico_bar" style="background-color:#d3d3d6; position: fixed; top:0; width: 100%; z-index: 999;"> <img src="logo.png" height="50" width="50" alt="Simpatico" />';
    //'<i class="fa fa-hand-scissors-o fa-3x"><input type="button" value="simplifyOff" id="simplifySwitch" onclick="switchSimplify();"></i><i class="fa fa-book fa-3x"><input type="button" value="defineOff" id="defineSwitch" onclick="switchDefine();"></i><i class="fa fa-pencil fa-3x"><input type="button" value="annotateOff" id="annotateSwitch" onclick="switchAnnotate();"></i><i class="fa fa-question fa-3x"><input type="button" value="citizenPediaOff" id="citizenPediaSwitch" onclick="switchCitizenPedia();"></i><i class="fa fa-user fa-3x"><input type="button" value="logIn" id="loginButton" onclick="handleAuthClick();"></i><button style="display:none" id="signout-button" onclick="handleSignoutClick()">Sign Out</button></div>';

    for (var i = 0; i < buttons.length; i++) {
      console.log(buttons[i]);
      //simpaticoBarHtml += '<input style="bgcolor:white;" src="img/simplify.png" type="button" value="'+ buttons[i]+'Off" id="'+buttons[i]+'Switch" onclick="switchFunction(\''+buttons[i]+'\');">'
      simpaticoBarHtml += '<button type="submit" id="'+buttons[i]+'Switch" value="'+ buttons[i]+'Off" style="border: 0; background: transparent" onclick="switchFunction(\''+buttons[i]+'\');"><img src="img/'+ buttons[i]+'.png" width="50" height="50" alt="submit" /></button>';
    }

    simpaticoBarHtml += '</div>';

    document.getElementById("simpatico_top").innerHTML = simpaticoBarHtml;
    document.getElementById("simpatico_top").innerHTML += '<style>.tooltip {position: relative;display: inline-block;border-bottom: 1px dotted black;}.tooltip .tooltiptext {visibility: hidden;width: 120px;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 5px 0;position: absolute;z-index: 1;bottom: 125%;left: 50%;margin-left: -60px;opacity: 0;transition: opacity 1s;}.tooltip .tooltiptext::after {content: "";position: absolute;top: 100%;left: 50%;margin-left: -5px;border-width: 5px;border-style: solid;border-color: #555 transparent transparent transparent;}.tooltip:active .tooltiptext {visibility: visible;opacity: 1;}</style>';
    document.getElementById("loginSwitch").style.float = "right";

}


function switchFunction(functionName)
{

  for (var i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]+"Switch").style.borderLeft = "none";
    if (buttons[i] === functionName) {
        document.getElementById(functionName+"Switch").style.borderLeft = "thick solid #0000FF";
    }

  }

  console.log("Calling "+"switch"+functionName);
  window["switch"+functionName]();
}


///////// OLD


function simplify(name)
{

    switch (name) {
      case "sp0":
        var textReplace = '<li style="font-size: 1em; list-style: circle;">a) Copia compulsada do documento nacional de identidade <span class="simp-text-term">(DNI)</span> ou ben do pasaporte ou do número de identificación de estranxeiro <span class="simp-text-term">(NIE)</span>.	</li>';
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

    // var clonedDiv = document.getElementById(name).cloneNode(true);
    // clonedDiv.id=name+"_simplified";
    // clonedDiv.setAttribute("onclick", "closeSimp()");
    // clonedDiv.innerHTML = textReplace;
    // clonedDiv.style.position='absolute';


    //document.getElementById(name).style.visibility='hidden';
    fade(document.getElementById(name), textReplace, unfade);

    //document.getElementById(name).parentNode.appendChild(clonedDiv);
    //document.getElementById(name).parentNode.replaceChild(clonedDiv, document.getElementById(name));


    //termsGetDefinition();

}

function fade(element, text, callback) {
  console.log("fade");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            callback(element,text);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);



}

function unfade(element,text) {
  console.log("unfade");
    element.innerHTML = text;
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function closeSimp()
{
  console.log("cerrando");
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
function switchsimplify()
{
  console.log("inside switchsimplify");
  simplifyValue = document.getElementById('simplifySwitch').value;

  // Search for paragraphs
  paragraphs = document.getElementsByClassName("simp-text-paragraph");

  if(simplifyValue == "simplifyOff"){
    document.getElementById("simplifySwitch").value="simplifyOn";

    //paragraphs.parrafo1.onclick = function() { checkButtons('parrafo1'); };

      for (var i = 0, len = paragraphs.length; i < len; i++) {
        paragraphs[i].setAttribute("id", "sp"+i);
        var paragraph = document.getElementById(paragraphs[i].id);
        var paragraphName = paragraphs[i].id;
        paragraphs[i].style.position='relative';
        paragraphs[i].setAttribute("onclick", "simplify('"+paragraphName+"');");
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
  termsGetDefinition();
}

function switchforms()
{
  console.log("switchforms");
}

function switchcitizenpedia()
{
  console.log("switchcitizenpedia");
}

function termsGetDefinition()
{
  console.log("inside termsGetDefinition");
  terms = document.getElementsByClassName("simp-text-term");

  for (var t = 0, len = terms.length; t < len; t++) {
    terms[t].setAttribute("id", "st"+t);
  }

  for (var t = 0, len = terms.length; t < len; t++) {
    termToChange = document.getElementById(terms[t].id);
    changeTooltip(termToChange);
  }
}


function changeTooltip(termToChange)
{

  var termHTML = termToChange.innerHTML;
  var term = termToChange.innerText;
  term = term.replace("(","");
  term = term.replace(")","");

  jQuery.getJSON(proxyURL+'/interactiveFrontend/wikiproxy.php?',
    { 'term': term },
    function(wikiResponse)
    {

      var firstObject = wikiResponse.query.pages[Object.keys(wikiResponse.query.pages)[0]];
      termToChange.style["text-decoration"] = "underline";
      termToChange.innerHTML = '<div class="tooltip">'+termHTML+'<span class="tooltiptext">'+firstObject.title+'</span></div>';

    });


}
