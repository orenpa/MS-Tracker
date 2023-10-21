import React, { useEffect } from 'react'
import { Grid } from '@mui/material';
import Boss from './Boss';


function WeeklyBosses({ removeBoss, handleCheck, weeklyBosses, setWeeklyBosses }) {

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const dayOfWeek = now.getUTCDay(); // 0 (Sunday) to 6 (Saturday)
            if (dayOfWeek === 3 && now.getUTCHours() === 0 && now.getUTCMinutes() === 0) { // Check if it's Wednesday
                setWeeklyBosses(weeklyBosses.map(boss => ({ ...boss, done: false })));
            }
        }, 60000); // Check every minute
        return () => clearInterval(interval);
    }, [weeklyBosses,setWeeklyBosses]);

    return (
        <Grid container spacing={1}>
            {weeklyBosses.map((boss) => (
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Boss key={boss.id} boss={boss} removeBoss={removeBoss} handleCheck={() => handleCheck(boss.id, boss.bossType)} />
                </Grid>
            ))}
        </Grid>
    )
}

export default WeeklyBosses;