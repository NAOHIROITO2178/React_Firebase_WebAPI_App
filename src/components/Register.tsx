import React, { useState, useEffect } from "react";
/* ↓「createUserWithEmailAndPassword」と「auth」をimport */
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged
 } from "firebase/auth";
import { auth } from "./FirebaseConfig.tsx";
import { Navigate, Link } from "react-router-dom";

const Register = () => {
    /* ↓state変数を定義 */
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        } catch(error) {
          alert("正しく入力してください");
        }
    };

    const [user, setUser] = useState("");

    useEffect(() => {
       onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
       });
    }, []);
    
    return (
      <>
       {user ? (
        <Navigate to={`/mypage/`} />
      ) : (
        <>
       <h1>新規登録</h1>
       <form onSubmit={handleSubmit}>
        <div>
            <label>メールアドレス</label>
            <input
             name="email"
             type="email"
             value={registerEmail}
             onChange={(e) => setRegisterEmail(e.target.value)}
            />
        </div>
        <div>
            <label>パスワード</label>
            <input
             name="password"
             type="password"
             value={registerPassword}
             onChange={(e) => setRegisterPassword(e.target.value)}
            />
        </div>
        <button>登録する</button>
        <p>ログインは<Link to={`/login/`}>こちら</Link></p>
       </form>
      </>
    )}
    </>
  );
};

export default Register;
