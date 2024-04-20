/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";
import { useAuthContext } from "./AuthContext";
import io, { type Socket } from "socket.io-client";

interface ContextProps {
  socket: Socket | null;
  onlineUsers: string[];
}

const SocketContext = createContext<ContextProps | undefined>(undefined);

export const useSocketContext = (): ContextProps | undefined => {
  return useContext(SocketContext);
};

interface Props {
  children: ReactNode;
}

export const SocketContextProvider = ({ children }: Props) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:3000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    }
    if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [authUser, socket]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
