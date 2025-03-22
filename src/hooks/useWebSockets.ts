import { useState, useEffect, useRef } from "react";

const useWebSocket = (eventId: number) => {
    const [userCount, setUserCount] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/events/${eventId}/`);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("WebSocket connection established.");
            setIsConnected(true);
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log("Message from server:", data);
                if (data.user_count !== undefined) {
                    setUserCount(data.user_count);
                }
            } catch (err) {
                console.error("Error parsing WebSocket message:", err);
            }
        };

        socket.onerror = (error) => {
            // console.error("WebSocket error:", error);
            console.log("WebSocket error:", error);
            setIsConnected(false);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed.");
            setIsConnected(false);
        };

        return () => {
            socket.close();
        };
    }, [eventId]);

    return { userCount, isConnected };
};

export default useWebSocket;