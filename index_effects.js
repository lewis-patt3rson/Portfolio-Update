//Updates the about details, depending on the tab clicked by the user - Setting the tab to active, giving it the underline styling
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tab){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tab).classList.add("active-tab");
    }

