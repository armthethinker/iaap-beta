<section class="section-manifesto" id="section-manifesto" style="background-image: url('img/artist-blur.jpg')">
   <div class="row">
      <div class="col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1">
         <div class="manifesto-container">
            <div class="row">
               <div class="col-xs-8 col-xs-offset-2">
                  <h3>
                     Manifesto
                     <div class="underline"></div>
                  </h3>
               </div>
               <div class="col-xs-2 text-right">
                  <span class="badge">v1</span>
               </div>
            </div>
            <?php
               $hasVideo = false;

               if($hasVideo == true){
                  ?>
                     <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8rwsuXHA7RA?rel=0" allowfullscreen></iframe>
                     </div>
                     <button class="btn btn-default center-block" type="button" data-toggle="collapse" data-target=".manifesto-text" aria-expanded="false" aria-controls="manifestoText">Read the Manifesto</button>
                     <div class="manifesto-text collapse p-t-sm">
                        <?php include('includes/md/MANIFESTO.html') ?>
                     </div>
                  <?php
               }
               else{
                  ?>
                     <div class="manifesto-text p-t-sm">
                        <?php include('includes/md/MANIFESTO.html') ?>
                     </div>
                  <?php
               }
            ?>
         </div>
      </div>
   </div>
</section>