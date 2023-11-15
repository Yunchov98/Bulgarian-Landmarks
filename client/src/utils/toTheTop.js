export default function toTheTop(data) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: data,
    });
}
