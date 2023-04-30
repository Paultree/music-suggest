## music-suggest

A simple application that recommends music to a user based on filters/genres they are able to select + music based on songs they like.

# Demo & Snippets

# Link

# Requirement/Purpose

Purpose of project is to learn how to use Spotify Web API and learn machine learning as well as reinforcing web design via front-end development.

- user can click button that suggests them a song
  - user can also click filteer/genre buttons that will recommend them a song based on selections
  - user can also like a suggested song which
    1. will show on a favourites page
  - link/preview of song will be on result.

# Build Steps

# Design Goals/Approach

- To get a random song, I am using a database from musicbrainz which houses 300,000,000 songs.
  - First, I used a function that generates a random string which will be used to search every song title that contains the string which is a letter.
  - Second, I used the song title to put in the Spotify API query function and will search for as many results as possible using the song title.
  - If the return value is undefined (due to song not existing on spotify API), we will use recursion to re-run the function until it returns a result.
- On the return result, we will have song title, artist, album, year released, song duration and a link that re-directs user to song. I will also use the song ID for storing into our backend server.
  - There will be a like button that allows user to like song. This button will do a POST method to our database and store the song information into our database.
- There will be buttons underneath the random song generator that will act as our genre filters to specify a song. This will use a different query to our main one.
- There will be another button which will be our recommendation button.
  - This will use all the genres that the user has liked
  - Will use all the artists the user has liked
  - A function that randomises between artist and genre will be used.
  - Search query that searches songs based on artist or genre.
- To make react-query work with my button, used these parameters in order to disable the automatic fetching: staleTime: Infinity, cacheTime: Infinity, enabled: false

# Features

- Can search a random song
- Can see song image, track name, artist name, album and release date, duration.
  - Can press a button that plays a preview of track
  - Can press a button that redirects user to spotify page of track for full listen.
- filter genres:
  - pop
  - rock
  - rap
  - hip hop
  - edm
  - k-pop
  - r & b
  - jazz
  - indie
- can reset filter

# Known Issues

- 400 error thrown when data can't be fetched from Spotify. To overcome this, put in a catch block that hides the console log message.
  - Logic of query function keeps trying different queries until a 200 response is made.

# Future Goals

# Change Logs

# What did you struggle with?

# Licencing Details

# Further Details
