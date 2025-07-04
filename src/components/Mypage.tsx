import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig.tsx";
import { 
   useNavigate,
   Navigate
} from "react-router-dom";
import NasaData from "./NasaData";  // インポート

const Mypage = () => {
   const [user, setUser] = useState("");
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
   }, []);

   /* ↓「navigate」を定義 */
   const navigate = useNavigate();

   /* ↓関数「logout」を定義 */
   const logout = async () => {
      await signOut(auth);
      navigate("/login/");
   }

   return (
      <>
         {!loading && (
            <>
               {!user ? (
                  <Navigate to={`/login/`} />
               ) : (
                  <>
                     <h1>マイページ</h1>
                     <button onClick={logout}>ログアウト</button>
                     <NasaData /> 
                  </>
               )}
            </>
         )}
      </>
   );
};

export default Mypage;
