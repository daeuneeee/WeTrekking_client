import ChatUi from "./chat.presenter";
import io from "socket.io-client";
import { ChangeEvent, useState } from "react";

const Chat = () => {
  const [chatMsg, setChatMsg] = useState("");

  const socket = io("https://develop.wetrekking.kr/wetrekkingchat", {
    transports: ["WebSocket"],
  });

  console.log(socket);

  // const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChatMsg(event.target.value);
  // };

  // const onClickChatBtn = () => {
  //   socket.emit("send_message", chatMsg);

  //   const aaa = socket.on("msg", (msg: any) => {
  //     console.log(msg);
  //   });
  // };

  return <ChatUi />;
};

export default Chat;
