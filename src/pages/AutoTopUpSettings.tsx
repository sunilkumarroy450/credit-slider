// src/components/AutoTopUpSettings.tsx
import React, { useState } from "react";
import { Typography, Switch, Slider, Button, Grid } from "@mui/material";

const AutoTopUpSettings: React.FC = () => {
  // State management
  const [autoTopUpEnabled, setAutoTopUpEnabled] = useState<boolean>(true);
  const [creditAmount, setCreditAmount] = useState<number>(1200);

  // Slider marks
  const marks = [
    {
      value: 600,
      label: `$600`,
    },
    {
      value: 1200,
      label: `$1200`,
    },
    {
      value: 1800,
      label: `$1800`,
    },
    {
      value: 2400,
      label: `$2400`,
    },
  ];

  // Handler for slider change
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setCreditAmount(newValue as number);
  };

  // Handler for switch toggle
  const handleAutoTopUpToggle = () => {
    setAutoTopUpEnabled(!autoTopUpEnabled);
  };

  // Handler for confirm button click
  const handleConfirmClick = () => {
    console.log(`Selected credit amount: ${creditAmount}`);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h6">Auto Top-up</Typography>
      </Grid>
      <Grid item xs={12}>
        <Switch checked={autoTopUpEnabled} onChange={handleAutoTopUpToggle} />
      </Grid>
      {autoTopUpEnabled && (
        <>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Select Amount:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider
              value={creditAmount}
              onChange={handleSliderChange}
              step={600}
              min={600}
              max={2400}
              marks={marks}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Credits: {creditAmount}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleConfirmClick}>
              Confirm auto-purchase
            </Button>
            <Typography variant="subtitle1">
              Selected credit amount: {creditAmount}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AutoTopUpSettings;
