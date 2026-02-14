import { useEffect, useEffectEvent } from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Online = () => {
    const isOnline = useOnlineStatus();

    const handleStatus = useEffectEvent((status) => {
        console.log(`Status changed: ${status ? "online" : "offline"}`);
    });

    useEffect(() => {
        handleStatus(isOnline);
    }, [isOnline]);

    return (
        <>
            I am {isOnline ? " online" : " offline"}
        </>
    );
};

export default Online;