$(document).ready(function () {
  // escape function for Cross-Site Scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // get whole array of data
  const renderTweets = function (tweets) {
    const $tweetsContainer = $("#tweets-container");
    $tweetsContainer.empty();

    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      console.log($tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").prepend($tweet);
    }
  };
  // create createTweetElement(Markup)
  const createTweetElement = function (tweet) {
    const $tweet = $(`
      <div class="space-div">

      </div>
    <article class="my-article">
      <header class="my-header">
        <div>
          <img ${escape(tweet.user.avatars)}/>
          <span> ${escape(tweet.user.name)} </span>
        </div>
          <span class="email-color"> ${tweet.user.handle} </span>
        </header>
        <div>
          <p> ${escape(tweet.content.text)} </p>
          <hr>
        </div>
        <footer class="my-header">
          <span> ${timeago.format(escape(tweet.created_at))} </span>
          <div class="email-color">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-flag"></i>
            <i class="fas fa-retweet"></i>

          </div>
        </footer>
    </article>
        
         `);
    return $tweet;
  };

  // Using AJAX fetch (GET) data from the server.
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        //console.log("data", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`error: ${err}`);
      },
    });
  };

  loadTweets();

  // Using AJAX send data to the server
  const $form = $("#new-tweet-form");
  $form.on("submit", function (event) {
    event.preventDefault();
    console.log("The form was submitted!");
    const serializedData = $(this).serialize();
    const text = serializedData.replace("text=", "");
    if (text.length > 140) {
      alert("Tweet should not be empty and more than 140 char");
      return;
    }
    if (text === null || text === "") {
      alert("Tweet cannot be empty.please enter data");
      return;
    }
    $.post("/tweets", serializedData, (response) => {
      loadTweets();
    });
  });
});
