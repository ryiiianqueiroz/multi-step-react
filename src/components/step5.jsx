import ThankYou from '../assets/images/icon-thank-you.svg'
import { Step, Steps, StepsActive } from '../styled/sidebar'

function Step5() {
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
                <div className="step-center5">
                    <img src={ThankYou} alt="#"/>
                    <h1>Thank You!</h1>
                    <p>Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.</p>
                </div>
            </div>
        </>
    )
}

export default Step5;