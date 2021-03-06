import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Homepage.css';
import mobileApp from '../Assets/img/mobile-app.png';
import payImage from '../Assets/img/payment-image.jpg';

class Homepage extends Component {
	render() {
		return (
			<div>
				<Header />
				<section className="Billing">
					<div className="billing-image">
						<img src={mobileApp} alt="bank app" />
					</div>
					<div className="billing-text">
						<h3>
							<span className="stroke-text">
								Real-time alerts
								<span role="img" aria-label="time-emoji">
									⏰
								</span>
								<br />
								Next day settlement
							</span>
							<p>
								Flexible billing and
								<br />
								payments
							</p>
							<p>
								<span className="stroke-text">
									{' '}
									Banking for all{' '}
									<span role="img" aria-label="time-emoji">
										{' '}
										🎯{' '}
									</span>{' '}
									<br />
									personal, business{' '}
								</span>
							</p>
						</h3>
					</div>
				</section>
				<section className="Payment">
					<div className="payment-image">
						<img src={payImage} alt="" />
					</div>
					<div className="payment-text">
						<h3>
							<span className="bold-text">
								Get Paid Early
								<br />
							</span>
							Your paycheck will be
							<br />
							automatically deposited
							<br />
							up to two days early
						</h3>
						<button type="button">Download</button>
					</div>
				</section>
				<section className="jombotron">
					<span role="img" aria-label="emoji">
						💵
					</span>
					<span role="img" aria-label="emoji">
						💰
					</span>
					<span role="img" aria-label="emoji" className="emoji-overide">
						💲
					</span>
					<h3>
						It's Your Money.
						<br />
						Stop paying fees.
					</h3>
					<span role="img" aria-label="emoji">
						🤑
					</span>
					<span role="img" aria-label="emoji">
						👌
					</span>
					<span role="img" aria-label="emoji" className="emoji-overide">
						🛍
					</span>
				</section>
				<section className="security">
					<span role="img" aria-label="emoji">
						🔑
					</span>
					<span role="img" aria-label="emoji">
						🔐
					</span>
					<span role="img" aria-label="emoji" className="emoji-overide">
						🔫
					</span>
					<h3>Security</h3>
					<span role="img" aria-label="emoji">
						🗝
					</span>
					<span role="img" aria-label="emoji">
						💳
					</span>
					<span role="img" aria-label="emoji" className="emoji-overide">
						🏧
					</span>
				</section>
				<Footer />
			</div>
		);
	}
}

export default Homepage;
