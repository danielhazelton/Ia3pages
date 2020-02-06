//Start-up functions run when page is loaded.
//1. Include the HTML snippets:

//2. Define global vars and function bindings
//Set up UI state
var menuOpen = false; //Boolean variable to capture the state of the side menu.
var mode = "loginMode"; //Variable captures current UI mode
var page = "loginModDiv";
//Associative array maps modes to page titles
var modeToTitle = {
    //TO DO: Fill in
	"mode1": "View/Edit Data!",
    "mode2": "Add Data!",
    "loginMode": "Welcome!"
};
//Array of app modes -- useful for iterating through mode pages
var modes = ["loginMode","mode1","mode2"];

//Bind bottomBarBtnClick function to all elements of class bottomBarBtn
var bottomBtns = document.getElementsByClassName("bottomBarBtn");
for (var i = 0; i < bottomBtns.length; ++i) {
    bottomBtns[i].addEventListener("click",bottomBarBtnClick);
}
// bind plusBtnClick
var plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click",plusBtnClick);

//Bind menuItemBtnClick function to all elements of class menuItem
var menuItemBtns = document.getElementsByClassName("menuItem");
for (var i = 0; i < menuItemBtns.length; ++i) {
    menuItemBtns[i].addEventListener("click",menuItemBtnClick);
}
if (mode != "loginMode"){
document.getElementById(mode).classList.add("menuItemSelected");}
//Execute function to set start state of app
startUp();
