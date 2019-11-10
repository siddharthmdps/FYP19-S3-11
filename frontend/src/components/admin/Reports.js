import React, { Component } from 'react'
import { Row, Col, Tab, Nav, Sonnet } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

const data2 = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [100, 50, 20],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

export default class Reports extends Component {
	render() {
		return (
			<div>
				<br />
				<Row>
					<h1>Generate Reports<span style={{ marginLeft: '5px' }}><sub></sub></span></h1>
				</Row>
				<br />

				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Doughnut data={data} />

								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Doughnut data={data2} />

								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
				{/* nav-tabs-custom */}



			</div>




		)
	}
}


