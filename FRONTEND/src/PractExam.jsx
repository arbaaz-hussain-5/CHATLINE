import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
function PractExam() {
  
  const [user, setUser] = useState("ram@1234");
  const [reciever, setReciever] = useState("null")
  useEffect(() =>{
 const k = io("http://localhost:3000/", {
      extraHeaders: {
        "user_id": user,
      },
    });
    

    console.log(k);
    
    return () => {
        k.disconnect()
    }

},[user])

  return (
    <div>
      <button >click</button>
    </div>
  );
}

export default PractExam;
