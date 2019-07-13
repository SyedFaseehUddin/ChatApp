import React, { Component, Fragment } from 'react'

export default class Landing extends Component {
    state = {
        name: '',
        messages: [],
      }
    
    render() {
        return (
            <Fragment>
            <div>
            <div className="chat-body">
              <div className="chat-body-inner">
                <div className="chat-list">
                    {/* Chat List */}
                  <div className="chat-item otheruser">
                    <div className="chat-item-inner">
                      <div className="image"><img src="https://dummyimage.com/31*31/ffffff/00BCD4&text=PIC" alt="" width="30"/></div>
                      <div className="message"><span>Hi</span></div>
                      <div className="message-time"></div>
                    </div>
                  </div>
                  <div className="chat-item otheruser">
                    <div className="chat-item-inner">
                      <div className="image"><img src="https://dummyimage.com/31*31/ffffff/00BCD4&text=PIC" alt="" width="30"/></div>
                      <div className="message"><span>what's up?</span></div>
                      <div className="message-time"></div>
                    </div>
                  </div>
                  <div className="chat-item user">
                    <div className="chat-item-inner">
                      <div className="message"><span>Hello, I'm doing good.</span></div>
                      <div className="message-time"></div>
                    </div>
                  </div>
                  <div className="chat-item otheruser ">
                    <div className="chat-item-inner">
                      <div className="image"><img src="https://dummyimage.com/31*31/ffffff/00BCD4&text=PIC" alt="" width="30"/></div>
                      <div className="message"><span>ok</span></div>
                      <div className="message-time"></div>
                    </div>
                  </div>
                  <div className="chat-item user ">
                    <div className="chat-item-inner">
                      <div className="message"><span>bye!</span></div>
                      <div className="message-time"></div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
            <div className="message-form">
              <form className="message-form-inner" action="">
                <input className="message-input" type="text" placeholder="Type here...."/>
                <button className="message-button" type="submit">
                <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
						</svg>
                </button>
              </form>
            </div>
          </div>
        </Fragment>
          
        )
    }
}
