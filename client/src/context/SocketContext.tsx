/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
// @ts-ignore
const SocketContext = createContext();
// @ts-ignore
export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
// @ts-ignore
  useEffect(() => {
    if (authUser) {
      const socket = io("https://mern-chat-orbn.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
// @ts-ignore
      setSocket(socket);
      // @ts-ignore

            socket.on("getOnlineUsers", (users) => {
        // @ts-ignore
        setOnlineUsers(users);
      });

      return () => socket.close();
    }
    if (socket) {
      // @ts-ignore
      socket.close();
      setSocket(null);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
