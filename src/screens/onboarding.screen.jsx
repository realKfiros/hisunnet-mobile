import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import Wizard from 'react-native-wizard';
import OnboardingAsset from '../../assets/svg/onboarding.asset';
import MinusBorderRadius from '../../assets/svg/minus-border-radius';
import styled from 'styled-components';

const WizardStep = styled(View)`
  justify-content: center;
  text-align: center;
  padding: 15px;
  margin: 15px 60px;
`;

const WizardStepTitle = styled(Text)`
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;
  line-height: 41px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const WizardStepText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const stepList = [
  {
    content: (
      <WizardStep>
        <WizardStepTitle>שלום</WizardStepTitle>
        <WizardStepText>
          אנחנו פה להציג עבורך מתחמי חיסונים עם זמינות מנות שנשארו, ולאפשר זימון
          תור לקבלת מנה ראשונה באותו היום. המידע יוצג באזורך או באזור לבחירתך
        </WizardStepText>
      </WizardStep>
    ),
  },
  {
    content: (
      <WizardStep>
        <WizardStepTitle>חשוב לדעת</WizardStepTitle>
        <WizardStepText>
          התור שייקבע יהיה עבור מנת החיסון הראשונה בלבד. את התור השני יהיה עלייך
          לבצע באותו מתחם חיסונים בו ניתנה המנה הראשונה
        </WizardStepText>
      </WizardStep>
    ),
  },
];

const OnboardingScreen = ({navigation}) => {
  const wizard = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <SafeAreaView />
      <OnboardingImage />
      <PageBottom>
        <LeftBorderRadius
          color="#0d47a1"
          width={80}
          height={160}
          style={{
            transform: [{rotate: '180deg'}],
          }}
        />
        <WizardParent>
          <Wizard
            ref={wizard}
            steps={stepList}
            activeStep={currentStep}
            currentStep={({currentStep}) => {
              setCurrentStep(currentStep);
            }}
            style={{flex: 1}}
          />
          <StepIndicatorParent>
            {stepList.map((step, index) => (
              <StepIndicator
                key={'step-' + index}
                isCurrentStep={currentStep === index}
              />
            ))}
          </StepIndicatorParent>
          <WizardButton
            onPress={() => {
              if (currentStep === 0) {
                wizard.current.next();
              } else {
                navigation.push('Home');
              }
            }}>
            <ButtonText>המשך</ButtonText>
          </WizardButton>
        </WizardParent>
      </PageBottom>
    </>
  );
};

const OnboardingImage = styled(OnboardingAsset)`
  margin: 80px auto;
`;

const StepIndicatorParent = styled(View)`
  margin: 18px;
  flex-direction: row;
  justify-content: center;
`;

const StepIndicator = styled(View)`
  height: 3px;
  width: 30px;
  opacity: 0.3;
  border-radius: 1.5px;
  margin: 5px;
  background-color: ${(props) => (props.isCurrentStep ? '#fff' : '#000')};
`;

const PageBottom = styled(View)`
  display: flex;
  flex-direction: row;
`;

const LeftBorderRadius = styled(MinusBorderRadius)`
  position: absolute;
  left: 0;
  top: 0;
  height: 160px;
`;

const WizardParent = styled(View)`
  flex: 1;
  height: 100%;
  margin-top: 80px;
  background-color: #0d47a1;
  border-top-right-radius: 80px;
`;

const WizardButton = styled(TouchableOpacity)`
  width: 180px;
  height: 48px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  height: 14px;
  width: 37px;
  color: #1a51a6;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

export {OnboardingScreen};
