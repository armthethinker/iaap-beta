var navbarheight = 70;

$(document).ready(function(){

   // Navbar affix
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
   });

   // Hero header sizing
   var hero = $('.section-hero');
   var fitTextRatio_1_2 = 1.4;
   var fitTextRatio_1_3 = 140/38;
   var h1Min = 40;
   var h1Max = 190;
   var h2Min = h1Min/fitTextRatio_1_2;
   var h2Max = h1Max/fitTextRatio_1_2;
   var h3Min = h1Min/fitTextRatio_1_3;
   var h3Max = h1Max/fitTextRatio_1_3;

   hero.find('h1').fitText(0.65, {minFontSize: h1Min + 'px', maxFontSize: h1Max + 'px'});
   hero.find('h2').fitText(1, {minFontSize: h2Min + 'px', maxFontSize: h2Max + 'px'});
   hero.find('h3').fitText(1.4, {minFontSize: h3Min + 'px', maxFontSize: h3Max + 'px'});

   // Modal testing
   //$('#m-prototype-fund').modal('show');
});