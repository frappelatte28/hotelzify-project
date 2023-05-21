import React from "react";
import "./news-feed.css";
import NewsFeedCard from "../card-component/card";
export default function NewsFeed() {
  return (
    <div>
      <div className="news-feed-main-container m-5">
        <div class="news-feed-title">
          <span class="news-feed-title-tag">Blog</span>
          <h2>News Feeds</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <NewsFeedCard
              date="May 19, 2023"
              author="By Rosalina D."
              heading="Implementing Pools by the Sea Side This Year"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <NewsFeedCard
              date="May 19, 2023"
              author="By Rosalina D."
              heading="Implementing Pools by the Sea Side This Year"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div className="col-lg-4 col-xs-12">
            <NewsFeedCard
              date="May 19, 2023"
              author="By Rosalina D."
              heading="Implementing Pools by the Sea Side This Year"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
