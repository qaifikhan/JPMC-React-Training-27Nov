export const DumpLogs = (message) => {
    if(process.env.NODE_ENV === 'production') {
        //Send data to a 3rd Party Tools for logs
    } else {
        console.log(message);
    }
}