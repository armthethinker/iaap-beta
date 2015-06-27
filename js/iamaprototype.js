var navbarheight = 70;

$(document).ready(function(){
   function navbarAffixLoc(){
      var $secHero = $('.section-hero > .section-overlay');
      var navbarAffixLoc = $secHero.height() - navbarheight;
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