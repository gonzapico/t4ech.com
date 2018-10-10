const languageStrings = {
    "en": {
        "home-title": "We help you" + "<br>" + "To start" + "<br>" + "Your business",
        "home-description": "If you have an idea to build but you don't have technology," + "<br>" + "we are here to help you build your MVP.",
        "home-cta": "Get Started"
    },
    "es": {
        "home-title": "Te ayudamos" + "<br>" + "A Comenzar" + "<br>" + "Tu Negocio",
        "home-description": "Si tienes una idea pero no dispones de recursos tecnológicos," + "<br>" + "estamos aquí para ayudarte a construir tu MVP.",
        "home-cta": "Comencemos"
    }
};

let lang = "en";
if('localStorage' in window){
    const usrLang = localStorage.getItem('uiLang');
    if(usrLang) {
        lang = usrLang
    }
}

$(document).ready(function() {
    $(".lang").each(function(index, element) {
        $(this).html(languageStrings[lang][$(this).attr("key")]);
    });
    document.getElementById("lan-en").addEventListener("click", function() {
       translate("en")
    }, false);
    document.getElementById("lan-es").addEventListener("click", function() {
       translate("es")
    }, false);
});

function translate(langId) {
    if('localStorage' in window){
        localStorage.setItem('uiLang', langId);
    }
    $(".lang").each(function(index, element) {
        $(this).html(languageStrings[lang][$(this).attr("key")]);
    });
    location.reload();
}