import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function BossSelectForm({ bossList, selectedBoss, setSelectedBoss, addBoss }) {
  const handleChange = (event) => {
    setSelectedBoss(event.target.value);
    addBoss(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="boss-select-label">Add a Boss</InputLabel>
      <Select
        labelId="boss-select-label"
        id="boss-select"
        value={selectedBoss}
        label="Add a Boss"
        onChange={handleChange}
      >
        {bossList.map((bossName, index) => (
          <MenuItem key={index} value={bossName}>
            {bossName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BossSelectForm;
