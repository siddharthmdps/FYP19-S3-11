import React, { Component } from 'react'
import { Row, Col, Tab, Nav, Sonnet, Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';





export class Reports extends Component {
	constructor(props, context) {
        super(props, context);
        
        this.state = {
			total : '',
			successful : '',
			shortlisted : '', 
			pending : '', 
        };
	}
	
	getsuccessfulapplications(){
		fetch('https://pegasus-backend.herokuapp.com/admin/getsuccessfulapplications')
            .then(response => response.json())
            .then(data => {
                
                this.setState({
					total : data.total, successful : data.successful, shortlisted : data.shortlisted, pending : data.pending
				});
            });
	}
	componentDidMount(){
		this.getsuccessfulapplications();
	}
	render() {
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
				another:'',
			}]
		};
		// data.labels[0] = ' total:'+this.state.total+' / successful';
		// data.labels[1] = ' total:'+this.state.total+' / shortlisted';
		// data.labels[2] = ' total:'+this.state.total+' / pending';
		data.datasets[0].data[0] = this.state.successful;
		data.datasets[0].data[1] = this.state.shortlisted;
		data.datasets[0].data[2] = this.state.pending;
		data.datasets[0].another = ' out of '+this.state.total;
		const data2 = {
			labels: [
				'successful',
				'shortlisted',
				'pending'
			],
			datasets: [{
				data: [100, 50, 20],
				backgroundColor: [
					'#00c851',
					'#36A2EB',
					'#FFCE56'
				],
				hoverBackgroundColor: [
					'#00c851',
					'#36A2EB',
					'#FFCE56'
				],
				another:'',
			}],
			
		};
		data2.datasets[0].data[0] = this.state.successful;
		data2.datasets[0].data[1] = this.state.shortlisted;
		data2.datasets[0].data[2] = this.state.pending;
		data.datasets[0].another = ' out of '+this.state.total;
		return (
			<div className="container" style={{maxWidth: '1300px'}}>
				
					<h1 className="m-3 d-flex justify-content-center"><b>Reports</b></h1>
					<hr/>
					<br/>
				

				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Job Application Results</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Employibility Rate by Course</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<h3 style={{textAlign:'center'}}><u>Job Application Results</u></h3>
									<br></br>
									<h3 style={{textAlign:'center'}}>
										<abbr style={{color:'red'}}>Total: {this.state.total},</abbr>
										<abbr style={{color:'#00c851'}}> Successful: {this.state.successful}, </abbr>
										<abbr style={{color:'#36A2EB'}}>Shortlisted: {this.state.shortlisted},</abbr>
										<abbr style={{color:'#FFCE56'}}> Pending: {this.state.pending}</abbr>
									</h3>
									<Doughnut data={data} 
										options= {{
											tooltips: {
											  callbacks: {
												label: function(tooltipItem, data) {
												  return data['labels'][tooltipItem['index']]+': '+data['datasets'][0]['data'][tooltipItem['index']]+data['datasets'][0].another;
												},
											  },
											}
										}}
									/>

								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<h2 style={{textAlign:'center'}}>Reports of Successful Applications</h2>
									<br></br>
									<h3 style={{textAlign:'center'}}>
										<abbr style={{color:'red'}}>total: {this.state.total},</abbr>
										<abbr style={{color:'#00c851'}}> successful: {this.state.successful}, </abbr>
										<abbr style={{color:'#36A2EB'}}>shortlisted: {this.state.shortlisted},</abbr>
										<abbr style={{color:'#FFCE56'}}> pending: {this.state.pending}</abbr>
									</h3>
									<Doughnut data={data2} 
										options= {{
											tooltips: {
											  callbacks: {
												label: function(tooltipItem, data) {
												  return data['labels'][tooltipItem['index']]+': '+data['datasets'][0]['data'][tooltipItem['index']]+data['datasets'][0].another;
												},
											  },
											}
										}}
									/>
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
export default Reports;

