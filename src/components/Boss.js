import React from 'react';
import styles from '../styles/BossTable.module.css';
import { AiFillDelete } from 'react-icons/ai';
import { Box, Card, CardContent, CardMedia, Checkbox, Typography } from '@mui/material';

function Boss({ boss, removeBoss, handleCheck }) {
    let bossName = boss.name;
    if (boss.bossType === 'weekly') {
        if (bossName === 'Crimson Queen' || bossName === 'Pink Bean' || bossName === 'Von Bon' || bossName === 'Pierre' || bossName === 'Vellum') {
            bossName = `Chaos ${bossName}`;
        } else if (bossName === 'Hilla' || bossName === 'Magnus') {
            bossName = `Hard ${bossName}`;

        }
    }
    return (
        <>

            <label>

                <Card className={styles.card}>
                    <CardMedia className={styles.cardImage}
                        component="img"
                        image={`${process.env.PUBLIC_URL}/${boss.image}`}
                    />
                    <CardContent className={styles.CardContent}>
                        <Typography variant="overline" noWrap>
                            {bossName}
                        </Typography>
                    </CardContent>
                    <Box sx={{
                        bottom: '0',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <AiFillDelete
                            className={styles.deleteIcon}
                            onClick={(e) => {
                                e.preventDefault();
                                removeBoss(boss.id, boss.bossType);
                            }}
                        />
                        <Checkbox
                            checked={boss.done}
                            onChange={() => handleCheck(boss.id)}
                            style={{ color: 'green' }}
                        />
                    </Box>
                </Card>
            </label >
        </>

    )
}

export default Boss;