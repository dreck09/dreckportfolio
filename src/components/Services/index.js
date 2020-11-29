import React from 'react';
import Icon1 from '../../images/maintinance.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-4.svg';

import {ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP} from './ServicesElements';

const Services = () => {
    return (
       <ServicesContainer id='services'>
           <ServicesH1>My Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Not Available</ServicesH2>
                    <ServicesP> </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Not Available</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>  Not Available</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Not Available </ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services;
