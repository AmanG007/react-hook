import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return(
                      <div>
                        User Context Value {user}, and Channel Context value {channel}
                      </div>
                    )
                  }
                }
                
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF