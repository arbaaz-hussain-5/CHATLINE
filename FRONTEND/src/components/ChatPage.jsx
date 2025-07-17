import { useParams } from "react-router";
import ChatBoard from "./chat_board/ChatBoard";
import { isUser } from "../isUser";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Login from "../Login";
function ChatPage() {
  let navigate = useNavigate();
  const isauth = useContext(isUser);
  let params = useParams();
  // if (isauth.auth_token !== undefined) {
    return (
      <div>
        <ChatBoard current_user={params.id} />
      </div>
    );
  // }
  // else{
  //   return(
  //     <div onClick={() => {
  //      navigate("/login");
  //     }}>please login</div>
  //   )
  // }
}

export default ChatPage;
