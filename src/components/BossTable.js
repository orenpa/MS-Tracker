import React, { useState, useEffect } from 'react'
import DailyBosses from './DailyBosses';
import WeeklyBosses from './WeeklyBosses';
import { Box, Container } from '@mui/material';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import styles from '../styles/BossTable.module.css';
import BossSelectForm from '../Forms/BossSelectForm';


function BossTable1() {
    const dailyBossNames = ["Zakum", "Pink Bean", "Magnus", "Arkarium", "Von Bon",
        'Vellum', 'Pierre', 'Crimson Queen', 'Hilla', 'Ranmaru', 'Gollux', 'Omni CLN'];

    const [selectedBoss, setSelectedBoss] = useState("");

    const weeklyBossNames = ['Will', 'Lucid', 'Princess No', 'Pink Bean', 'Papulatus',
        'Hilla', 'Damien', 'Lotus', 'Cygnus',
        'Von Bon', 'Crimson Queen', 'Vellum', 'Pierre',
        'Akechi Mitsuhide', 'Gloom', 'Darknell', 'Magnus']

    const [dailyBosses, setDailyBosses] = useState(
        dailyBossNames.map((bossName, index) => ({
            id: index + 1,
            name: bossName,
            done: false,
            image: `${bossName.toLowerCase().replace(' ', '_')}.webp`,
            bossType: 'daily'
        }))
    );

    const [weeklyBosses, setWeeklyBosses] = useState(
        weeklyBossNames.map((bossName, index) => {
            let imageName = bossName.toLowerCase().replace(' ', '_');
            return {
                id: index + 1,
                name: bossName,
                done: false,
                image: `${imageName}.webp`,
                bossType: 'weekly'
            };
        })
    );



    const [dailyProgress, setDailyProgress] = useState(0);
    const [weeklyProgress, setWeeklyProgress] = useState(0);

    useEffect(() => {
        const doneDailyBosses = dailyBosses.filter(boss => boss.done).length;
        const totalDailyBosses = dailyBosses.length;
        const progress = totalDailyBosses > 0 ? Math.floor((doneDailyBosses / totalDailyBosses) * 100) : 0;
        setDailyProgress(progress);
    }, [dailyBosses]);

    useEffect(() => {
        const doneWeeklyBosses = weeklyBosses.filter(boss => boss.done).length;
        const totalWeeklyBosses = weeklyBosses.length;
        const progress = totalWeeklyBosses > 0 ? Math.floor((doneWeeklyBosses / totalWeeklyBosses) * 100) : 0;
        setWeeklyProgress(progress);
    }, [weeklyBosses]);


    const handleCheck = (id, bossType) => {
        if (bossType === 'daily') {
            setDailyBosses(dailyBosses.map(boss => boss.id === id ? { ...boss, done: !boss.done } : boss));
        } else if (bossType === 'weekly') {
            setWeeklyBosses(weeklyBosses.map(boss => boss.id === id ? { ...boss, done: !boss.done } : boss));
        }
    };


    const addDailyBoss = bossName => {
        if (!bossName) return;
        const newBoss = {
            id: Math.floor(Math.random() * 1000000),
            name: bossName,
            done: false,
            image: `${bossName.toLowerCase().replace(' ', '_')}.webp`,
            bossType: 'daily'
        };
        setDailyBosses([...dailyBosses, newBoss]);
        setSelectedBoss("");

    };



    const removeDailyBoss = bossId => {
        setDailyBosses(dailyBosses.filter(boss => boss.id !== bossId));
    };


    const addWeeklyBoss = bossName => {
        if (!bossName) return;
        let imageName = bossName.toLowerCase().replace(' ', '_');
        const newBoss = {
            id: Math.floor(Math.random() * 1000000),
            name: bossName,
            done: false,
            image: `${imageName}.webp`,
            bossType: 'weekly'
        };
        setWeeklyBosses([...weeklyBosses, newBoss]);
        setSelectedBoss("");
    };

    const removeWeeklyBoss = bossId => {
        setWeeklyBosses(weeklyBosses.filter(boss => boss.id !== bossId));
    };
    const removeBoss = (bossId, bossType) => {
        if (bossType === 'daily') {
            setDailyBosses(dailyBosses.filter(boss => boss.id !== bossId));
        } else if (bossType === 'weekly') {
            setWeeklyBosses(weeklyBosses.filter(boss => boss.id !== bossId));
        }
    };

    return (
        <>
            <Container sx={{
                maxWidth: 500,
                border: '1.5px solid #000',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box alignSelf='center' sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ProgressBar
                        now={dailyProgress}
                        label={`${dailyProgress}%`}
                        className={styles.progressBar}
                        variant={dailyProgress === 100 ? 'warning' : 'info'} // Change variant to 'warning' when progress is 100%
                        animated={dailyProgress === 100} // Animate when progress is 100%
                    />
                    <BossSelectForm
                        bossList={dailyBossNames}
                        selectedBoss={selectedBoss}
                        setSelectedBoss={setSelectedBoss}
                        addBoss={addDailyBoss}
                        className={styles.bossSelectForm}
                    />
                </Box>
                <br/>
                <DailyBosses
                    dailyBosses={dailyBosses}
                    setDailyBosses={setDailyBosses}
                    removeBoss={removeBoss}
                    handleCheck={handleCheck}
                />
            </Container>
            <br />
            <Container sx={{
                maxWidth: 500,
                border: '1.5px solid #000',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box alignSelf='center' sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ProgressBar
                        now={weeklyProgress}
                        label={`${weeklyProgress}%`}
                        className={styles.progressBar}
                        variant={weeklyProgress === 100 ? 'warning' : 'info'} // Change variant to 'warning' when progress is 100%
                        animated={weeklyProgress === 100} // Animate when progress is 100%
                    />
                    <BossSelectForm
                    bossList={weeklyBossNames}
                    selectedBoss={selectedBoss}
                    setSelectedBoss={setSelectedBoss}
                    addBoss={addWeeklyBoss}
                    className={styles.bossSelectForm}
                />
                </Box>
                <br/>
                <WeeklyBosses
                    weeklyBosses={weeklyBosses}
                    setWeeklyBosses={setWeeklyBosses}
                    removeBoss={removeBoss}
                    handleCheck={handleCheck}
                />
            </Container>
        </>
    )
}
export default BossTable1;