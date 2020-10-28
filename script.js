buttonElement.onclick = function(event){
  event.preventDefault();
  const value = inputValue.value;
  const url = 'https://api.spotify.com/v1/search?q=';
  const newUrl = url + value +'&type=track';


  $.ajax ({
        url: newUrl,
        type: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + accessToken
        },
        success: function(data) {
          console.log(' ');
          console.log(' ');
          console.log('Got data back');
          // Let's console what gets returned for our search
          console.log(JSON.stringify(data));

          document.write(data);
          // Example: Extract the id of the song from the data object
          let src = data.tracks.items.[0].[1].id;
          let id = data.tracks.items[0].id;
          console.log(' ');
          console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
          // Constructing a iframe to embed a song
          let src_str = `https://open.spotify.com/embed/track/${src}`;
          console.log(`src_str ${src_str}`);
          let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
          let parent_div = $('#content');
          parent_div.append(iframe);
        }
    });
   
}
