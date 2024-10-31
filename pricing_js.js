//Mobile navigation dropdown
let menu_press = true

//Navigation Button
function navigation_button() {
    const web_element = document.getElementsByClassName("web_page_content");
    const mobile_element = document.getElementsByClassName("mobile_page_content");
    const image_element = document.getElementById("menu_hamburger");

    if (menu_press == true) {

        for (var i = 0; i < web_element.length; i = i + 1) {
            web_element[i].style.display = "none";
            web_element[i].style.visibility = "hidden";

            mobile_element[i].style.display = "";
            mobile_element[i].style.visibility = "visible";

            image_element.src = "assets/close_menu.svg";
            document.body.style.backgroundColor = "white";
        }
        menu_press = false;

    } else {
        for (var i = 0; i < web_element.length; i = i + 1) {
            web_element[i].style.display = "";
            web_element[i].style.visibility = "visible";

            mobile_element[i].style.display = "none";
            mobile_element[i].style.visibility = "hidden";

            image_element.src = "assets/hamburger_menu.svg";
            document.body.style.backgroundColor = "var(--bg_color)";
        }
        menu_press = true;
    }

}

//Monthly plan
function monthly_plan_button() {
    //Price change
    document.getElementById("gold_cost").innerText = "$3";
    document.getElementById("executive_cost").innerText = "$9";

    const rate_element = document.querySelectorAll("#rate_plan");
    for (var i = 0; i < rate_element.length; i = i + 1) {
        rate_element[i].textContent = "/month"
    }
}

//Yearly plan
function yearly_plan_button() {
    //Price change
    document.getElementById("gold_cost").innerText = "$39";
    document.getElementById("executive_cost").innerText = "$99";

    const rate_element = document.querySelectorAll("#rate_plan");
    for (var i = 0; i < rate_element.length; i = i + 1) {
        rate_element[i].textContent = "/year"
    }
    
    
    //Button change
    var button_disabled = document.querySelectorAll("#disabled_button");
    var button_enabled = document.querySelectorAll("#enabled_button");

    var element_disabled = document.getElementById("disabled_button");
    var element_enabled = document.getElementById("enabled_button");

    for (var i = 0; i < button_enabled.length; i = i + 1) {
        button_enabled[i].id = element_disabled.id;
    }

    var button_disabled = document.querySelectorAll("#disabled_button");
}

//Lifetime plan
function lifetime_plan_button() {
    //Price change
    document.getElementById("gold_cost").innerText = "$99";
    document.getElementById("executive_cost").innerText = "$249";
    
    const rate_element = document.querySelectorAll("#rate_plan");
    for (var i = 0; i < rate_element.length; i = i + 1) {
        rate_element[i].textContent = "/account"
    }
}