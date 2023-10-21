import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Boss from './Boss';

function DailyBosses({ removeBoss, handleCheck, dailyBosses, setDailyBosses }) {


    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            if (now.getUTCHours() === 0 && now.getUTCMinutes() === 0) {
                setDailyBosses(dailyBosses.map(boss => ({ ...boss, done: false })));
            }
        }, 60000); // Check every minute
        return () => clearInterval(interval);
    }, [dailyBosses,setDailyBosses]);


    return (
        <Grid container spacing={1}>
            {dailyBosses.map((boss) => (
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Boss key={boss.id} boss={boss} removeBoss={removeBoss} handleCheck={() => handleCheck(boss.id, boss.bossType)} />
                </Grid>
            ))}
        </Grid>
    )
}

export default DailyBosses;