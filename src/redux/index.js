let formatDate = (data) => {
    let day = data.getDate();
    if (day < 10) day = '0' + day;

    let month = data.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = data.getFullYear();

    let hour = data.getHours();
    if (hour < 10) hour = '0' + hour;

    let minutes = data.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = data.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return `${day}.${month}.${year} ${hour}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()))