import React from 'react'
import { ServiceCard, ServiceContainer, ServiceH1, ServiceH2, ServiceIcon, ServiceP, ServiceWrapper } from './ServiceElement'
import icon1 from '../../images/svg1.svg'

export const Services = () => {
    return (
        <>
           <ServiceContainer>
                <ServiceH1>
                    Services
                </ServiceH1>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceIcon src={icon1} />
                        <ServiceH2>heading</ServiceH2>
                        <ServiceP>lorem lorem lorem</ServiceP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={icon1} />
                        <ServiceH2>heading</ServiceH2>
                        <ServiceP>lorem lorem lorem</ServiceP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={icon1} />
                        <ServiceH2>heading</ServiceH2>
                        <ServiceP>lorem lorem lorem</ServiceP>
                    </ServiceCard>
                </ServiceWrapper>
            </ServiceContainer>  
        </>
    )
}
