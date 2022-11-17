import ChatUi from "./chat.presenter";
import io from "socket.io-client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";
import { userInfo } from "../../../store";
import { useRouter } from "next/router";

const Chat = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [chatMsg, setChatMsg] = useState("");

  const router = useRouter();

  const name = userDatas?.fetchUser.name;
  const room = router.query.crewId;
  const boardId = router.query.crewId;

  const socket = io("https://develop.wetrekking.kr/wetrekkingchat", {
    transports: ["websocket"],
  });

  console.log(socket);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setChatMsg(event.target.value);
  };

  socket.emit("join", name, room, boardId);

  socket.on("connect", () => {
    // 누군가 채팅침
    socket.on(room, (data) => {
      // $('#chatList').append(`<div>${data[0]} : ${data[1]}</div>`);
      console.log(data);
    });
    // 누군가 입장
    socket.on("welcome", (welcome) => {
      // $('#chatList').append(`<div style="color:blue;">${welcome}</div>`);
      console.log(welcome);
    });
  });
  // console.log(room);
  // console.log(name);
  // console.log(chatMsg);

  const onClickSendBtn = () => {
    const aaa = socket.emit("send-chat", room, name, chatMsg);
    // $("#msg").val("");
    // $("#chatList").append(`<div style="color:red;">나 : ${message}</div>`);
    console.log(aaa);
  };

  return (
    <>
      <div id="asdddd"></div>
      <ChatUi onChangeInput={onChangeInput} onClickSendBtn={onClickSendBtn} />
    </>
  );
};

export default Chat;
