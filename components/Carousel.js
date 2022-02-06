import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import styles from '../styles/Svg.module.css'
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Carousel({hidden=false,array}) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [productReturned, setProductReturned]= useState()
  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  return (
    <div className={"w-full relative flex flex-col justify-center "+ (hidden ? "sm:hidden": "")}>
                  <div className="flex w-full justify-between absolute ">
                <Button  
                    sx={{zIndex:10}}
                    onClick={handleBack}
                    disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <ArrowForwardIosIcon/>
                    ) : (
                    <ArrowBackIosIcon  />
                    )}
                </Button>
                <Button
                    sx={{zIndex:10}}
                    onClick={handleNext}
                    disabled={activeStep === array?.length - 1}
                >
                    {theme.direction === 'rtl' ? (
                    <ArrowBackIosIcon />
                    ) : (
                    <ArrowForwardIosIcon />
                    )}
                </Button>
            </div>
          <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents 
          resistance
          slideStyle={
              {
                // zIndex:20,
              overflow:"hidden",
              width:"100%",
              display:"flex",
              justifyContent: 'center',
              // backgroundColor:'black'
              }}
          >
              {array.map(({name,component},index)=>{
                return(
                  <div key={index} className={` w-full flex flex-col text-3xl justify-center py-5 items-center gap-y-4`}>
                    <h3>{name}</h3>
                    <div className={styles.svg_big}>
                    {component}

                    </div>
                  </div>
                )
              })}

          </SwipeableViews>
          <div className="w-full flex justify-center ">
              <MobileStepper
              sx={{  background:  'transparent'}}
              steps={array?.length}
              position="static"
              activeStep={activeStep} />
          </div>
        </div>
  );
}
