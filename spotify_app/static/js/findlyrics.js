const lyricload = async () => {
  try {
    const response = await fetch("/findlyrics_api");
    const data = await response.json();
    console.log(data);
    const track_name = data.track_name;
    const artist_name = data.artist_name;
    let lyrics = data.lyrics;
    lyrics = lyrics.replace(/\n/g, "<br>");
    console.log(lyrics);
    if (data.error) {
      document.querySelector(
        "#lyrics-Container"
      ).innerHTML = `Error: ${data.error}`;
    } else {
      document.querySelector(
        "#lyrics-Container"
      ).innerHTML = `<h1 class="song-details">You are currently listening to:<br> 
      <span class = "track-name">${track_name}</span> <br>
      by<br>
      <span class = "artist-name"> ${artist_name}</spam> </h1>
        <p>${lyrics}</p>
      `;
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    document.querySelector("#lyrics-Container").innerHTML =
      "Error loading results.";
  }
};

window.onload = lyricload();

document.getElementById("Reset-Button").addEventListener("click", () => {
  lyricload();
});
