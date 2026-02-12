import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Online = () => {
    const isOnline = useOnlineStatus();

    return (
        <>
            I am {isOnline ? " online" : " offline"}
        </>
    );
};

export default Online;