import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
import { Title, SubTitle, Button, GoBack } from '../styled/step'
import { APU, afterG } from './step3'
import { Link } from 'react-router-dom'
import { Step, Steps, StepsActive } from '../styled/sidebar'
import { useState, useEffect } from 'react'

let AnnualPlan = false
let G1 = true
let G2 = false
let G3 = false 

function Step2 () {

    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        const Arcade = document.getElementById('g1')
        const Advanced = document.getElementById('g2')
        const Pro = document.getElementById('g3') 

        if ( APU === true ) {
            document.getElementById("btn-monyea").checked = true
        } else if ( APU === false ) {
            document.getElementById("btn-monyea").checked = false
        }

        if ( afterG === 2 ) {
            G1 = false
            G2 = true
            G3 = false

            Arcade.classList.remove('grid-active')
            Advanced.classList.add('grid-active')
            Pro.classList.remove('grid-active')

        } else if ( afterG === 3 ) {
            G1 = false
            G2 = false
            G3 = true

            Arcade.classList.remove('grid-active')
            Advanced.classList.remove('grid-active')
            Pro.classList.add('grid-active')

        }

    }, [])

    const handleChange = (event) => {
        setCheckbox(event.target.checked);
        AnnualPlan = event.target.checked
    }

    const GridPlan = (val) => {
        const grid = document.getElementById(`g${val}`)
        const Arcade = document.getElementById('g1')
        const Advanced = document.getElementById('g2')
        const Pro = document.getElementById('g3') 

        if ( !grid.classList.contains("grid-active") ) {
            grid.classList.add('grid-active')
            
            if (val === 1) {
                G1 = true
                G2 = false
                G3 = false

                Advanced.classList.remove('grid-active')
                Pro.classList.remove('grid-active')

            } else if (val === 2) {
                G2 = true
                G1 = false
                G3 = false

                Arcade.classList.remove('grid-active')
                Pro.classList.remove('grid-active')

            } else {
                G3 = true
                G1 = false
                G2 = false

                Arcade.classList.remove('grid-active')
                Advanced.classList.remove('grid-active')
            }
            
        } else {
            grid.classList.remove('grid-active')

            if (val === 1) {
                G1 = false
            } else if (val === 2) {
                G2 = false
            } else {
                G3 = false
            }
        }
    }

    return (
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
                    <StepsActive>
                        <h2>2</h2>
                    </StepsActive>

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
                <Title>Select your plan</Title>
                <SubTitle>You have the option of monthly or yearly billing.</SubTitle>

                <div className="grid-plan">
                    <div className="grid grid-active" onClick={() => GridPlan(1)} id='g1'>
                        <img src={Arcade} alt="#" />

                        <div className="grid-p">
                            <h4>Arcade</h4>    
                            <p>{checkbox? '$90/yr' : "$9/mo"}</p>
                            <p id='p-yr'>{checkbox? '2 months free' : ''}</p>
                        </div>                                   
                    </div>

                    <div className="grid" onClick={() => GridPlan(2)} id='g2'>
                        <img src={Advanced} alt="#" />
                        
                        <div className="grid-p">
                            <h4>Advanced</h4>    
                            <p>{checkbox? '$120/yr' : "$12/mo"}</p>
                            <p id='p-yr'>{checkbox? '2 months free' : ''}</p>
                        </div>                 
                    </div>

                    <div className="grid" onClick={() => GridPlan(3)} id='g3'>
                        <img src={Pro} alt="#" />
                        
                        <div className="grid-p">
                            <h4>Pro</h4>    
                            <p>{checkbox? '$150/yr' : "$15/mo"}</p>
                            <p id='p-yr'>{checkbox? '2 months free' : ''}</p>
                        </div>  
                    </div>
                </div>

                <div className="btn-circle">
                    <h3 className={checkbox ? "btn-gray" : ""}>Monthly</h3>
                    
                    <input 
                        type="checkbox"
                        id="btn-monyea"
                        onChange={handleChange}
                    />

                    <label htmlFor="btn-monyea" className='btn'/>

                    <h3 className={checkbox ? "" : "btn-gray"}>Yearly</h3>
                </div>

                <div className="next-step">
                    <Link to="/multi-step-react/"><GoBack>Go Back</GoBack></Link>

                    <Link to="/multi-step-react/step3"><Button>Next Step</Button></Link>
                </div>
            </div>
        </>
    )
}

export { AnnualPlan, G1, G2, G3, }

export default Step2;