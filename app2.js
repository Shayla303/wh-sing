// var songDisplay =  document.getElementsByClassName('videoArea')
// var form = document.getElementById("enterInfo");
// var findSong = document.getElementById('searchInput');
// var channelName = "whitneyhoustonVEVO";
//
// form.addEventListener('submit',function(event) {
//  event.preventDefault();
//  findSong.innerText="";
//  var searchSong = event.target.elements.search1.value;
//  console.log(searchSong) // works
// });
//
//  $(document).ready(function() {
  // $.get("https://www.googleapis.com/youtube/v3/channels",
//    key:"AIzaSyA8qRL8nR8ce1gJaiFC5LHPBmo--TY5mds",
//    part: "contentDetails",
//    forUserName: channelName,
//     function (data) {
//  $.each(data.items, function(i, item){
//    var playlist= item.contentDetails.relatedPlayLists.uploads;
//  })

//starts new stuff//

// function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


function init() {
    gapi.client.setApiKey("AIzaSyA8qRL8nR8ce1gJaiFC5LHPBmo--TY5mds");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}

 $(function() {
     $("form").on("submit", function(e) {
        e.preventDefault();
        // prepare the request
        var request = gapi.client.youtube.search.list ({
         part: "snippet",
        type: "video",
         channelId: "whitneyhoustonVEVO",
         q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
        maxResults: 10,
        order:"viewcount"
        });

      })
    })

        // execute the request
        request.execute(function(response) {
           var results = response.results;
           console.log(results)
         });

          //  $("#results").html("");
 //           $.each(results.items, function(index, item) {
 //             $.get("tpl/item.html", function(data) {
 //                 $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
 //             });
 //           });
 //           resetVideoHeight();
 //        });
 //     });
 //
 //     $(window).on("resize", resetVideoHeight);
 // });
 //
 // function resetVideoHeight() {
 //     $(".video").css("height", $("#results").width() * 9/16);
 // }
