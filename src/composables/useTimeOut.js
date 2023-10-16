export const useTimeOut = (delay, callback) => {
    const setTimeOut = () => {
        setTimeout(() => {
            callback()
        }, delay)
    };

    return {
        setTimeOut
    }
}
