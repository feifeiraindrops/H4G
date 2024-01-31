import React, { Component, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase.js";
import PostingCard from "./components/PostingCard.jsx";
import bgImage from "./assets/posting_default_1.jpg";

const LogIn = () => {
  //const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };


  return (
    <div >
      <main>
        <div>
          <form>
            <h2>Login</h2>
            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p></p>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p></p>

            <button
              role="button"
              type="submit"
              onClick={signIn}
            >
              submit
            </button>
          </form>
          
          <PostingCard imgSrc={bgImage}>
            <h3 className="text-xl font-bold mb-2">Teaching Assistent</h3>
            <p>
              You would need to help out with:
              the fact that you can teach
              interact with children
            </p>
            <div className="space-x-4 mt-4">
              <button className="btn">
                <Heart />
              </button>
              <button className="btn">
                <Bookmark />
              </button>
              <button className="btn">
                <Share2 />
              </button>
            </div>
          </PostingCard>

        </div>
      </main>
    </div>
  );
};

export default LogIn;