import React from 'react'
import './styling/mockRegister.css';
import profile from './images/profile.png';

function mockRegister() {
  return (
<body>
    <div class="sidebar">
      <i class="fab fa-twitter"></i>
      <div class="sidebarOption active">
        <span class="material-symbols-outlined">
          home
        </span>
        <h2>Home</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          search
        </span>
        <h2>Explore</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          notifications
        </span>
        <h2>Notifications</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          mail
        </span>
        <h2>Messages</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          bookmark
        </span>
        <h2>Bookmarks</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          list
        </span>
        <h2>Lists</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          person
        </span>
        <h2>Profile</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-symbols-outlined">
          more_horiz
        </span>
        <h2>More</h2>
      </div>
      <button class="sidebar__tweet">Tweet</button>
    </div>


    <div class="feed">
      <div class="feed__header">
        <h2>Home</h2>
      </div>

      <div class="tweetBox">
        <form>
          <div class="tweetbox__input">
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <button class="tweetBox__tweetButton">Tweet</button>
        </form>
      </div>


      <div class="post">
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@somanathg</span
                >
              </h3>
            </div>
            <div class="post__headerDescription">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img
            src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
            alt=""
          />
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>



      <div class="post">
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@somanathg</span
                >
              </h3>
            </div>
            <div class="post__headerDescription">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img
            src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
            alt=""
          />
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
    </div>


    <div class="widgets">
      <div class="widgets__input">
        <span class="material-icons widgets__searchIcon"> search </span>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div class="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Sunsets don&#39;t get much better than this one over
            <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>.
            <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw"
              >#nature</a
            >
            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw"
              >#sunset</a
            >
            <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
          </p>
          &mdash; US Department of the Interior (@Interior)
          <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw"
            >May 5, 2014</a
          >
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  </body>

  )
}
export default mockRegister;