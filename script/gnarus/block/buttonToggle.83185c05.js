var gnarus=gnarus||{};gnarus.buttonToggle={},gnarus.buttonToggle.init=function(a){void 0===a&&(a=document);for(var b=a.querySelectorAll("[data-js-toggle]"),c=0;c<b.length;c++)b[c].addEventListener("click",function(){gnarus.buttonToggle.toggle(this)})},gnarus.buttonToggle.toggle=function(a){var b=a.getAttribute("data-js-toggle");a.classList.toggle("isToggled"),document.querySelector(b).classList.toggle("isToggled")},gnarus.buttonToggle.init();