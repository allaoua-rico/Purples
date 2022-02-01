import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import styles from '../styles/Svg.module.css'

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
    <div className={"w-96  "+ (hidden ? "sm:hidden": "")}>
          <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents 
          resistance
          slideStyle={
              {
              overflow:'hidden',
              width:"100%",
              display:"flex",
              justifyContent: 'center'
              }}
          >
              {array.map(({name,component},index)=>{
                return(
                  <div key={index} className='flex flex-col text-3xl justify-center p-5 items-center gap-y-4'>
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
