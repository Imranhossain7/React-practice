export default function Boiling({ temperature, scale }) {
    if (scale === 'c') {
        if (temperature >= 100) {
            return <p>Water Would Boil</p>;
        }
        return <p>Water Would not Boil</p>;
    }
    if (scale === 'f') {
        if (temperature >= 212) {
            return <p>Water Would Boil</p>;
        }
        return <p>Water Would not Boil</p>;
    }
}
