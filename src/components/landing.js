import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from './footer'

export const Landing = () => (
    <main>
        <div className="landing__signin">
            <section className="landing__hero">
                <h1>Keep your team <em>happy and engaged</em></h1>
                <p>Automate <em>check-ins</em> with your team in Slack.</p>
                <a href="https://www.slack.com/oauth/authorize?scope=users.profile:read,users:read,chat:write:user,channels:read,im:read,team:read,im:history&client_id=143457452320.144253511221">
                    <img alt="Add to Slack" 
                         height="80"
                         width="268"
                         src={require('../images/btn-add-to-slack.svg')} /> 
                </a>
            </section>
        </div>
        <div className="landing__how">
            <h1>Automatically send <em>scheduled messages</em> to your team in <em>Slack</em>!</h1>
            <div>
                <img className="how__slackimage" src={require('../images/iphone_template.png')} />
                <div>
                    <p className="how__left">Use our suggested messages, or create your own. Select which team members to send them to.</p>
                    <p className="get__started">Get started in <em>60 seconds</em>!</p>
                    <img className="how__onboardimage" src={require('../images/desktop_landing_example.png')} />
                </div>
            </div>
        </div>

        <div className="landing__how__mobile">
            <h1>Automatically send <em>scheduled messages</em> to your team in <em>Slack</em>!</h1>
            <img className="how__slackimage" src={require('../images/mobile_template.png')} />
            <p>Use our suggested messages, or create your own. Select which team members to send them to.</p>
            <p>Get started in <em>60 seconds</em>!</p>
            <img className="how__onboardimage" src={require('../images/mobile_landing_example.png')} />
        </div>
        <div className="landing__signinbottom">
            <h1>Get started with your<br/>manager one on ones</h1>
            <Link to="https://www.slack.com/oauth/authorize?scope=users.profile:read,users:read,chat:write:user,channels:read,im:read,team:read,im:history&client_id=143457452320.144253511221">Sign Up Free</Link>
        </div>
        <Footer />
    </main>
)
