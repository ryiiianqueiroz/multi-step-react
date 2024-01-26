import { Title, SubTitle, Button, GoBack } from '../styled/step'
import { Link } from 'react-router-dom'
import { Step, Steps, StepsActive } from '../styled/sidebar'
import { AnnualPlan, G1, G2 } from './step2'
import { A1, A2, A3 } from './step3'

let plan = ''
let planValue = ''
let countTotal

let afterA1
let afterA2
let afterA3

function Step4() {

    if ( A1 === true ) {
        afterA1 = true
    } 
    
    if ( A2 === true ) {
        afterA2 = true
    } 
    
    if ( A3 === true) {
        afterA3 = true
    }

    console.log(`A1 = ${A1}`)
    console.log(`A2 = ${A2}`)
    console.log(`A3 = ${A3}`)

    if ( AnnualPlan === false ) {
        
        if ( G1 === true ) {
            plan = 'Arcade (Monthly)'
            planValue = '$9/mo'
            countTotal = 9
        } else if ( G2 === true ) {
            plan = 'Advanced (Monthly)'
            planValue = '$12/mo'
            countTotal = 12
        } else {
            plan = 'Pro (Monthly)'
            planValue = '$15/mo'
            countTotal = 15
        }

        if ( A1 === true ) {
            countTotal = (countTotal + 1)
        }
    
        if ( A2 === true ) {
            countTotal = (countTotal + 2)
        } 
    
        if ( A3 === true ) {
            countTotal = (countTotal + 2) 
        }
    

    } else {
        
        if ( G1 === true ) {
            plan = 'Arcade (Yearly)'
            planValue = '$90/yr'
            countTotal = 90
        } else if ( G2 === true ) {
            plan = 'Advanced (Yearly)'
            planValue = '$120/yr'
            countTotal = 120
        } else {
            plan = 'Pro (Yearly)'
            planValue = '$150/yr'
            countTotal = 150
        }

        if ( A1 === true ) {
            countTotal = (countTotal + 10)
        }
    
        if ( A2 === true ) {
            countTotal = (countTotal + 20)
        } 
    
        if ( A3 === true ) {
            countTotal = (countTotal + 20) 
        }
    
    }

    return(
        <>
            <div className="sidebar">
                <Step>
                    <Steps>
                        <h2>1</h2>
                    </Steps>

                    <div className="s-tep">
                        <p>STEP 1</p>
                        <h3>YOUR INFO</h3>
                    </div>
                </Step>

                <Step>
                    <Steps>
                        <h2>2</h2>
                    </Steps>

                    <div className="s-tep">
                        <p>STEP 2</p>
                        <h3>SELECT PLAN</h3>
                    </div>
                </Step>

                <Step>
                    <Steps>
                        <h2>3</h2>
                    </Steps>

                    <div className="s-tep">
                        <p>STEP 3</p>
                        <h3>ADD-ONS</h3>
                    </div>
                </Step>

                <Step>
                    <StepsActive>
                        <h2>4</h2>
                    </StepsActive>

                    <div className="s-tep">
                        <p>STEP 4</p>
                        <h3>SUMMARY</h3>
                    </div>
                </Step>

            </div>

            <div className="step-main">
                <Title>Finishing up</Title>
                <SubTitle>Double-check everything looks OK before confirming.</SubTitle>

                <div className="choices-plan" id='c-plan'>
                    
                    <div className="sub">
                        <div className="sub-plan">
                            <p>{plan}</p>
                            <Link to='/step2' className='p-change'>Change</Link>
                        </div>

                        <h3>{planValue}</h3>
                    </div>

                    {A1 === true && AnnualPlan === false && (
                        <>
                            <div className="add-ons-step4">
                                <p>Online Service</p>
                                <h3>+$1/mo</h3>
                            </div>
                        </>
                    )}

                    {A1 === true && AnnualPlan === true && (
                        <>
                            <div className="add-ons-step4">
                                <p>Online Service</p>
                                <h3>+$10/yr</h3>
                            </div>
                        </>
                    )}

                    {A2 === true && AnnualPlan === false && (
                        <>
                            <div className="add-ons-step4">
                                <p>Larger Storage</p>
                                <h3>+$2/mo</h3>
                            </div>
                        </>
                    )}

                    {A2 === true && AnnualPlan === true && (
                        <>
                            <div className="add-ons-step4">
                                <p>Larger Storage</p>
                                <h3>+$20/yr</h3>
                            </div>
                        </>
                    )}

                    {A3 === true && AnnualPlan === false && (
                        <>
                            <div className="add-ons-step4">
                                <p>Customizable Profile</p>
                                <h3>+$2/mo</h3>
                            </div>
                        </>
                    )}

                    {A3 === true && AnnualPlan === true && (
                        <>
                            <div className="add-ons-step4">
                                <p>Customizable Profile</p>
                                <h3>+$20/yr</h3>
                            </div>
                        </>
                    )}

                </div>

                <div className="total">
                    <h3>{`Total ${AnnualPlan ? "(per year)" : "(per month)"}`}</h3>
                    <h3>{`+${countTotal}/${AnnualPlan ? "yr" : "mo"}`}</h3>
                </div>

                <div className="next-step">
                    <Link to="/multi-step-react/step3"><GoBack>Go Back</GoBack></Link>

                    <Link to="/multi-step-react/step5"><Button>Confirm</Button></Link>
                </div>
            </div>
        </>
    )
}

export { afterA1, afterA2, afterA3 }
export default Step4;