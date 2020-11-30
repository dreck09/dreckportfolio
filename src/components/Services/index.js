import React from 'react';
import Icon1 from '../../images/maintinance.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-4.svg';

import {ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP} from './ServicesElements';

const Services = () => {
    return (
       <ServicesContainer id='portfolio'>
           <ServicesH1>My Work</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Web-base system</ServicesH2>
                    <ServicesP> Sorry not available.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Web-base system</ServicesH2>
                    <ServicesP> Sorry not available.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>  Web-base system</ServicesH2>
                    <ServicesP> Sorry not available.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Web-base system </ServicesH2>
                    <ServicesP> Sorry not available.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services;
