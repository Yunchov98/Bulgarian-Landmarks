export default function dateToYears(date) {
    const userBirthDate = new Date(date);
    const today = new Date();

    const [thisDay, thisMonth, thisYear] = [
        today.getDate(),
        today.getMonth(),
        today.getFullYear(),
    ];

    const [bornDay, bornMonth, bornYear] = [
        userBirthDate.getDate(),
        userBirthDate.getMonth(),
        userBirthDate.getFullYear(),
    ];

    const hasBirthdayPassed =
        thisMonth > bornMonth ||
        (thisMonth === bornMonth && thisDay >= bornDay);

    return hasBirthdayPassed ? thisYear - bornYear : thisYear - bornYear - 1;
}
