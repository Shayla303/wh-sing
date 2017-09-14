var songDisplay =  document.getElementsByClassName('videoArea')
var form = document.getElementById("enterInfo");
var findSong = document.getElementById('searchInput');
var channelName = "whitneyhoustonVEVO";

form.addEventListener('submit',function(event) {
 event.preventDefault();
 findSong.innerText="";
 var searchSong = event.target.elements.search1.value;
 console.log(searchSong) // works
});

 $(document).ready(function() {
  $.get("https://www.googleapis.com/youtube/v3/channels", {
   key:"AIzaSyA8qRL8nR8ce1gJaiFC5LHPBmo--TY5mds",
   part: "contentDetails",
   forUserName: channelName,
    function (data) {
 $.each(data.items, function(i, item){
   var playlist= item.contentDetails.relatedPlayLists.uploads;
 })

  getVids(playList);

  function getVids(playList) {
  $.get("https://www.googleapis.com/youtube/v3/playlists", {
   key:"AIzaSyA8qRL8nR8ce1gJaiFC5LHPBmo--TY5mds",
   part: "snippet",
   playListId: pid,
   maxResults: 10 },
    function (data) {
      var output =
      $.each(data.items, function(i, item){
        console.log(item);
        var videoTitle = item.snippet.title;


output= '<li><iframe height='300' width='300' src =\"//wwww.youtube.com/embed/'+videoId+'\"></iframe><li>';


 })

    }
   })









    //    // execute the request
    //    request.execute(function(response) {
    //       var results = response.result;
    //       $("#results").html("");
    //       $.each(results.items, function(index, item) {
    //         $.get(function(data) {
    //             $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
    //         });
    //       });
    //       resetVideoHeight();
    //    });
    // });
    //
