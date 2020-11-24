import React from 'react'

// Fn component with inline styles
const Subscription = (props) => {

  // inline styles 
  let subscriptionCompStyles = {
    subscriptionStyle: {
      backgroundColor: 'yellow',
      padding: '10px',
      fontSize: '20px'
    },
    renewStyle: {
      backgroundColor: 'green',
      padding: '10px',
      color: '#fff',
      fontSize: '12px'
    }
  }

  return (
    <div className='container text-left'>
      <h2>Subscription | Inline Styles Demo</h2>
      <div>
        <p style={subscriptionCompStyles.subscriptionStyle}>
          Subscription Ends: {props.endsOn}
        </p>

        <p style={subscriptionCompStyles.renewStyle}>
          Please renew with 50% discount
        </p>
      </div>
    </div>
  )
}

export default Subscription;
