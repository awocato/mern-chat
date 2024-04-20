/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "@/store/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	// @ts-ignore
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		// @ts-ignore
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;