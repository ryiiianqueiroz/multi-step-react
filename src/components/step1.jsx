import { Title, SubTitle, Button } from '../styled/step'
import { Link } from 'react-router-dom'
import { Step, Steps, StepsActive } from '../styled/sidebar'
import { useState, useEffect } from 'react'


let name
let email
let phone
let n1 = ''
let e1 = ''
let p1 = ''


function Step1 () {

    const [ next, setNext ] = useState()

    useEffect(() => {
        if ( n1 !== '' ) {
            document.getElementById("name-person").value = n1
            document.getElementById("email-person").value = e1
            document.getElementById("phone-person").value = p1
        }
    }, [])

    function nextStepValidation() {
        name = document.getElementById("name-person").value
        email = document.getElementById("email-person").value
        phone = document.getElementById("phone-person").value

        const nameClass = document.querySelector("#name-step")
        const emailClass = document.querySelector("#email-step")
        const phoneClass = document.querySelector("#phone-step")

        if ( name === "" || email === "" || phone === "" ) {
            
            if ( name === "" ) {
                nameClass.classList.add("validate")
            } else {
                nameClass.classList.remove("validate")
            }

            if ( email === "" ) {
                emailClass.classList.add("validate")
            } else {
                emailClass.classList.remove("validate")
            }
            
            if ( phone === "" ) {
                phoneClass.classList.add("validate")
            } else {
                phoneClass.classList.remove("validate")
            }
            
            setNext(false)
        } else {
            setNext(true)
            n1 = name
            e1 = email
            p1 = phone
        }

    }

    return (
        <>
            <div className="sidebar">
                <Step>
                    <StepsActive>
                        <h2>1</h2>
                    </StepsActive>

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
                <Title>Personal Info</Title>
                <SubTitle>Please provide your name, email address, and phone number.</SubTitle>

                <form action="post">
                    <div className="form-step">
                        <div className="step1-validation" id='name-step'>
                            <p>Name</p>
                            <p>This field is required</p>
                        </div>

                        <input 
                            type="text" 
                            id="name-person" 
                            placeholder="e.g. Stephen King"
                        />
                    </div>
                    
                    <div className="form-step">
                        <div className="step1-validation" id='email-step'>
                            <p>Email Address</p>
                            <p>This field is required</p>
                        </div>

                        <input 
                            type="email" 
                            id="email-person" 
                            placeholder="e.g. stephenking@lorem.com" 
                        />

                    </div>
                    <div className="form-step">
                        <div className="step1-validation" id='phone-step'>
                            <p>Phone Number</p>
                            <p>This field is required</p>
                        </div>

                        <input 
                            type="number" 
                            id="phone-person" 
                            placeholder="e.g. +1 234 567 890" 
                        />

                    </div>
                </form>
                
                <div className="next-step" id="next-step1">
                    <Link to={next ? "/multi-step-react/step2" : "/multi-step-react/"} onClick={() => nextStepValidation()}><Button>Next Step</Button></Link>
                </div>
            </div>
        </>
    )
}

export { name, email, phone }
export default Step1;