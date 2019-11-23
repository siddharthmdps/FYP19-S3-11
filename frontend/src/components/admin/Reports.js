import React, { Component } from 'react'
import { Row, Col, Nav, Sonnet, Card } from 'react-bootstrap';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class Reports extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			deps: [],
			total: '',
			successful: '',
			shortlisted: '',
			pending: '',
		};
	}

	getsuccessfulapplications() {
		fetch('https://pegasus-backend.herokuapp.com/admin/getsuccessfulapplications')
			.then(response => response.json())
			.then(data => {

				this.setState({
					total: data.total, successful: data.successful, shortlisted: data.shortlisted, pending: data.pending
				});
			});
	}

	getemployability() {
		fetch('https://pegasus-backend.herokuapp.com/employer/getemployability')
			.then(response => response.json())
			.then(data => {
				this.setState({ deps: data });
			});
	}

	componentDidMount() {
		this.getsuccessfulapplications();
		this.getemployability();
	}
	render() {
		const { deps, fieldofstudy, succcesscount } = this.state;
		const data = {
			labels: [
				'successful',
				'shortlisted',
				'pending',
			],
			datasets: [{
				data: [12, 5, 2],
				backgroundColor: [
					'#00c851',
					'#36A2EB',
					'#FFCE56',
				],
				hoverBackgroundColor: [
					'#00c851',
					'#36A2EB',
					'#FFCE56',
				],
				another: '',
			}]
		};
		// data.labels[0] = ' total:'+this.state.total+' / successful';
		// data.labels[1] = ' total:'+this.state.total+' / shortlisted';
		// data.labels[2] = ' total:'+this.state.total+' / pending';
		data.datasets[0].data[0] = this.state.successful;
		data.datasets[0].data[1] = this.state.shortlisted;
		data.datasets[0].data[2] = this.state.pending;
		data.datasets[0].another = ' out of ' + this.state.total;

		const fieldofstudylabel = deps.map(dep => dep.fieldofstudy)
		const successcounter = deps.map(dep => dep.succcesscount)

		const data2 = {
			labels: fieldofstudylabel,
			datasets: [
				{
					label: 'Successful Applications',
					backgroundColor: 'rgba(97,208,97,0.2)',
					borderColor: 'rgba(97,208,97,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(97,208,97,0.4)',
					hoverBorderColor: 'rgba(97,208,97,1)',
					data: successcounter
				}
			]
		};
		return (
			<div className="container" style={{ maxWidth: '700px' }}>

				<h1 className="m-3 d-flex justify-content-center"><b>Reports</b></h1>
				<hr />
				<br />
				<Tabs>
					<TabList>
						<Tab>Total Job Application Results</Tab>
						<Tab>Successful Applications by Field of Study</Tab>
					</TabList>

					<TabPanel><br></br>
						<h3 style={{ textAlign: 'center' }}><u>Total Job Application Results</u></h3>
						<br></br>
						<h3 style={{ textAlign: 'center' }}>
							<abbr style={{ color: 'red' }}>Total: {this.state.total},</abbr>
							<abbr style={{ color: '#00c851' }}> Successful: {this.state.successful}, </abbr>
							<abbr style={{ color: '#36A2EB' }}>Shortlisted: {this.state.shortlisted},</abbr>
							<abbr style={{ color: '#FFCE56' }}> Pending: {this.state.pending}</abbr>
						</h3>
						<Doughnut data={data}
							options={{
								tooltips: {
									callbacks: {
										label: function (tooltipItem, data) {
											return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + data['datasets'][0].another;
										},
									},
								}
							}}
						/>

					</TabPanel>
					<TabPanel><br></br>
						<h3 style={{ textAlign: 'center' }}><u>Successful Applications by Field of Study</u></h3>
						<br></br>
						<Bar
							data={data2}
							width={100}
							height={50}
							options={{
								scales: {
									yAxes: [{
										ticks: {
											beginAtZero: true,
											userCallback: function (label, index, labels) {
												if (Math.floor(label) === label) {
													return label;
												}

											},
										}
									}],
								},

							}}></Bar>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default Reports;

