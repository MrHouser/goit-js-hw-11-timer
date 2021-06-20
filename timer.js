export default function CountdownTimer({ selector, targetDate }) {
    
    const refs = {
        timerRef: document.querySelector(`${selector}`),
        daysValue: document.querySelector(`${selector} [data-value=days]`),
        hoursValue: document.querySelector(`${selector} [data-value=hours]`),
        minsValue: document.querySelector(`${selector} [data-value=mins]`),
        secsValue: document.querySelector(`${selector} [data-value=secs]`),
    }

    const updateValue = (days, hours, mins, secs) => {
        refs.daysValue.textContent = days;
        refs.hoursValue.textContent = hours;
        refs.minsValue.textContent = mins;
        refs.secsValue.textContent = secs;
    }

    function pad (value) {
        return String(value).padStart(2, '0');
    }

    window.onload = function () {
        setInterval(() => {
        const time = targetDate - Date.now();
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        updateValue(days,hours,mins,secs);
        }, 1000);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        refs.timerRef.insertAdjacentHTML('afterend', `<div class='until'><p>Until ${targetDate.toLocaleString('en-Gb', )}</p></div>`)
    }
};