import ChatUi from "./chat.presenter";
// import io from "socket.io-client";
// import { ChangeEvent, useState } from "react";

const Chat = () => {
  // const [chatMsg, setChatMsg] = useState("");

  // const socket = io.connect("http://localhost:3001");

  // const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChatMsg(event.target.value);
  // };

  // const onClickChatBtn = () => {
  //   socket.emit("send_message", chatMsg);

  //   const aaa = socket.on("msg", (msg: any) => {
  //     console.log(msg);
  //   });
  //   console.log(aaa);
  // };

  return <ChatUi />;
};

export default Chat;
