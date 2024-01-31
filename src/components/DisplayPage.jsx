import React from "react";
import NavBar from "./NavBar.jsx";
import PostingCard from "./PostingCard.jsx";
import bgImage from "../assets/posting_default_1.jpg";

const DisplayPage = () => {
  return (
    <div>
      <main>
        <div>
          <NavBar class="top-0"></NavBar>
          <div class="mt-24 mx-6 grid lg:grid-cols-4 gap-10">
            <PostingCard imgSrc={bgImage}>
              <h3 className="text-xl font-bold mb-2">Teaching Assistent</h3>
              <p>
                You would need to help out with:
                the fact that you can teach
                interact with children
              </p>
              <div className="space-x-4 mt-4">
                <button className="btn">
                    Click Me
                </button>
              </div>
            </PostingCard>
            <PostingCard imgSrc={bgImage}>
              <h3 className="text-xl font-bold mb-2">Helping Elderly</h3>
              <p>
                You would need to help out with:
                the fact that you can teach
                interact with children
              </p>
              <div className="space-x-4 mt-4">
                <button className="btn">
                    Click Me
                </button>
              </div>
            </PostingCard>
            <PostingCard imgSrc={bgImage}>
              <h3 className="text-xl font-bold mb-2">Helping Elderly</h3>
              <p>
                You would need to help out with:
                the fact that you can teach
                interact with children
              </p>
              <div className="space-x-4 mt-4">
                <button className="btn">
                    Click Me
                </button>
              </div>
            </PostingCard>
            <PostingCard imgSrc={bgImage}>
              <h3 className="text-xl font-bold mb-2">Helping Elderly</h3>
              <p>
                You would need to help out with:
                the fact that you can teach
                interact with children
              </p>
              <div className="space-x-4 mt-4">
                <button className="btn">
                    Click Me
                </button>
              </div>
            </PostingCard>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DisplayPage;