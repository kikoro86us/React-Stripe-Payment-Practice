import React, { Component } from 'react'

//add checkout
import Checkout from './StripePay/Checkout'


export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<p>Stripe Pay Practice!</p>
				<Checkout
					name={'Give me the Money'}
					description={'Stripe test haha!'}
					amount={1}
				/>
			</div>
		)
	}
}