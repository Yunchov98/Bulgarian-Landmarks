export default function dateConverter(date) {
    const now = new Date(date);

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const modifiedDate = `${day}.${month}.${year}`;

    return modifiedDate;
}
