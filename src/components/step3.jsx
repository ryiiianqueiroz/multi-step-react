import { Title, SubTitle, Button, GoBack } from '../styled/step'
import { Link } from 'react-router-dom'
import { Step, Steps, StepsActive } from '../styled/sidebar'
import { AnnualPlan, G1, G2, G3 } from './step2'
import { afterA1, afterA2, afterA3 } from './step4'
import { useEffect } from 'react'

let A1 = false
let A2 = false
let A3 = false

let afterG = 1
let APU = false

function Step3() {

    useEffect(() => {
        if ( afterA1 === true ) {
            const checkbox = document.getElementById(`add-checkbox1`)
            checkbox.classList.add('check-active')

            document.getElementById(`1`).checked = true
        }
        
        if ( afterA2 === true ) {
            const checkbox = document.getElementById(`add-checkbox2`)
            checkbox.classList.add('check-active')

            document.getElementById(`2`).checked = true
        }

        if ( afterA3 === true ) {
            const checkbox = document.getElementById(`add-checkbox3`)
            checkbox.classList.add('check-active')

            document.getElementById('3').checked = true
        }
    }, [])

    APU = AnnualPlan

    console.log(AnnualPlan)
    console.log(`G1 = ${G1}`)
    console.log(`G2 = ${G2}`)
    console.log(`G3 = ${G3}`)

    if( G1 === true ){
        afterG = 1
    } else if ( G2 === true ) {
        afterG = 2
    } else {
        afterG = 3
    }

    
    const handleChecked = (event) => {

        let idEvent = event.target.id

        console.log(idEvent)
        
        const checkbox = document.getElementById(`add-checkbox${idEvent}`)

        if (event.target.checked === true) {
            checkbox.classList.add('check-active')

            if ( idEvent == 1 ) {
                A1 = true
            } else if ( idEvent == 2 ) {
                A2 = true
            } else {
                A3 = true
            }

        } else {
            checkbox.classList.remove('check-active')

            if ( idEvent == 1 ) {
                A1 = false
            } else if ( idEvent == 2 ) {
                A2 = false
            } else {
                A3 = false
            }

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
                    <StepsActive>
                        <h2>3</h2>
                    </StepsActive>

                    <div className="s-tep">
                        <p>STEP 3</p>
                        <h3>ADD-ONS</h3>
                    </div>
                </Step>

                <Step>
                    <Steps>
                        <h2>4</h2>
                    </Steps>

                    <div className="s-tep">
                        <p>STEP 4</p>
                        <h3>SUMMARY</h3>
                    </div>
                </Step>

            </div>

            <div className="step-main">
                <Title>Pick add-ons</Title>
                <SubTitle>Add-ons help enhance your gaming experience.</SubTitle>

                <div className="add-ons">
                    <div className="add" id='add-checkbox1'>
                        <div className="add-content">
                            <label className="checkbox">
                                <input 
                                    type="checkbox" 
                                    onChange={handleChecked}
                                    id='1'
                                />
                                <span className='checkmark'></span>
                            </label>

                            <div className="add-p">
                                <h3>Online service</h3>
                                <p>Access to multiplayer games</p>
                            </div>
                        </div>

                        <h3>{AnnualPlan ? '+$10/yr' : '+$1/mo'}</h3>
                    </div>
                    
                    <div className="add" id='add-checkbox2'>
                        <div className="add-content">
                            <label className="checkbox">
                                <input 
                                    type="checkbox" 
                                    onChange={handleChecked}
                                    id='2'
                                />
                                <span className='checkmark'></span>
                            </label>

                            <div className="add-p">
                                <h3>Larger storage</h3>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        
                        <h3>{AnnualPlan ? '+$20/yr' : '+$2/mo'}</h3>
                    </div>
                    
                    <div className="add" id='add-checkbox3'>
                        <div className="add-content">
                            <label className="checkbox">
                                <input 
                                    type="checkbox" 
                                    onChange={handleChecked}
                                    id='3'
                                />
                                <span className='checkmark'></span>
                            </label>

                            <div className="add-p">
                                <h3>Customizable Profile</h3>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>

                        <h3>{AnnualPlan ? '+$20/yr' : '+$2/mo'}</h3>
                    </div>
                </div>

                <div className="next-step">
                    <Link to="/multi-step-react/step2"><GoBack>Go Back</GoBack></Link>

                    <Link to="/multi-step-react/step4"><Button>Next Step</Button></Link>
                </div>
            </div>
        </>
    )
}

export { A1, A2, A3, APU, afterG }
export default Step3;