import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
    /* ↓state変数を定義 */
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
        } catch(error) {
          alert("メールアドレスまたはパスワードが間違っています");
        }
      };
    
      /* ↓ログインを判定する設定 */
      const [user, setUser] = useState();
    
      useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      });
    
    return(
        <>
          {user ? (
            <Navigate to={`/mypage/`} />
          ) : (
        <>
         <h1>ログインページ</h1>
         <form onSubmit={handleSubmit}>
            <div>
                <label>メールアドレス</label>
                <input
                    name="email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
            </div>
            <div>
                <label>パスワード</label>
                <input
                    name="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>
            <button>ログイン</button>
            <p>新規登録は<Link to={`/register/`}>こちら</Link></p>
         </form>
        </>
      )}
    </>
    );
};

export default Login;
