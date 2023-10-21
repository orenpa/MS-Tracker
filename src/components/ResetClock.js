import React, { useState, useEffect } from 'react';

function ResetClock() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        let now = new Date();
        let targetTime = new Date();

        // Set the target time to midnight UTC
        targetTime.setUTCHours(0);
        targetTime.setUTCMinutes(0);
        targetTime.setUTCSeconds(0);
        targetTime.setUTCMilliseconds(0);

        // If the target time has already passed today, set it to tomorrow
        if (now > targetTime) {
            targetTime.setUTCDate(targetTime.getUTCDate() + 1);
        }

        // Calculate the difference between the target time and the current time
        let timeLeft = targetTime - now;

        return timeLeft;
    }

    useEffect(() => {
        // Update the time left every second
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []);

    // Convert the time left from milliseconds to hours, minutes, and seconds
    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div>
            Reset in: {hours}:{minutes}:{seconds}
        </div>
    );
}

export default ResetClock;
