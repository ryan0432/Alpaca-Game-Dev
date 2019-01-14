////////////////////////
//! Global Variables !//
////////////////////////

// Get computed value
const navBarHeight_String = getComputedStyle(document.documentElement, null).getPropertyValue('--nav-bar-height');

// Get only number from value
var navBarHeight_Num = navBarHeight_String.replace(/[^0-9\.]+/g, '');

// Convert string to number
navBarHeight_Num = Number(navBarHeight_Num);

// Define suffix
const unitSuffix = 'rem';

// Array of buttons
const navButtonList = document.getElementsByClassName("dropdown-content");

// Validate if  Nav bar is opened
var isNavbarOpened = false;


////////////////////////
//! Public Functions !//
////////////////////////

// Fade In
function fadeIn(el, time)
{
    console.log("hover");
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }
  // Fade Out
  function fadeOut(el, time)
  {
    el.style.opacity = 1;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity - (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }

  // Open Dropdown Menu
  function openDropdown()
  {
    if(!isNavbarOpened)
    {
      isNavbarOpened = true;
      
      let navBarHeight_NumToString = `${navBarHeight_Num * navButtonList.length}${unitSuffix}`;

      document.getElementById("dropdownNav").style.height = navBarHeight_NumToString;
      document.getElementById("dropdownNav").style.pointerEvents = "auto";

      for(var i = 0; i < navButtonList.length; ++i)
      {
        navButtonList[i].style.opacity = "1";
      }
    }
    else
    {
      closeDropdown();
    }
  }
  
  // Close Dropdown Menu
  function closeDropdown()
  {
    isNavbarOpened = false;

    document.getElementById("dropdownNav").style.height = "0%";
    document.getElementById("dropdownNav").style.pointerEvents = "none";
    
    for(var i = 0; i < navButtonList.length; ++i)
    {
      navButtonList[i].style.opacity = "0";
    }
  }