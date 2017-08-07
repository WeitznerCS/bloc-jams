var buildCollectionItemTemplate = function() {
    var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="album.html"> Pablo Picasso </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
   return $(template);
};

$(window).load(function() {
    //shorter jquery alternative, prefix the collectionContainer with $
     var $collectionContainer = $('.album-covers');
     //replace innerHTML with the jQuery empty() method.  This method literally empties.
     $collectionContainer.empty();

     for (var i = 0; i < 12; i++) {
       var $newThumbnail = buildCollectionItemTemplate();
        // replace += with append()
        $collectionContainer.append($newThumbnail);
     }
   });
