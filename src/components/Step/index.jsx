import React from 'react';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const { Step } = Steps;

const StepBar = ({ currentStep, steps, className, ...props }) => {
  const { t } = useTranslation();
  return (
    <Steps className={clsx('step-bar', [className] && className)} progressDot current={currentStep} {...props}>
      {steps.map(step => (
        <Step key={step} title={t(step)} />
      ))}
    </Steps>
  );
};

export default StepBar;
