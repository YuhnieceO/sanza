$("#btn").click(function(){
   var search = $("#input").val();
       $.ajax({
        url: "https://api.genius.com/search?access_token=kTs6tRAp8TarTKxWCFnFxcxPRRaD2L692z9WmtljRT59dsRdXaFIxqokbjiNr0bM&q=" + search.split(" ").join("+"),
        method: "GET",
        success: function(response) {
        
        for(var i = 0; i < response.response.hits.length; i++){
        var image = response.response.hits[i].result.header_image_thumbnail_url;
        var title = response.response.hits[i].result.full_title;
        var artist = response.response.hits[i].result.primary_artist.name;
        var elem = `<div class="row">	<div class="col-xs-2"></div>
			 <div class="col-xs-2">
		    	<span>${title}</span>
		    	<br><span>${artist}</span></br>
				<img src="${image}" class="img-thumbnail"> 
		     </div>
		     </div>
		     `
            $("#list").append(elem);
        }
        },
    });
});





