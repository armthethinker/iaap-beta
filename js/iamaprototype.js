var navbarheight = 70;

$(document).ready(function(){
   function navbarAffixLoc(){
      var $secTitle = $('.sec-title > .section-overlay');
      var navbarAffixLoc = $secTitle.height() - navbarheight;
      console.log(navbarAffixLoc);
      return navbarAffixLoc;
   }

   $('.navbar-affix').affix({
      offset: {
         top: navbarAffixLoc(),
         bottom: 5
      }
   })
});