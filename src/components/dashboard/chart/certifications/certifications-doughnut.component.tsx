import * as React from 'react';
import { Col, Table, Row, Card } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
// import { MdCreate } from 'react-icons/md/';
import axios from 'axios';





function getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getState = () => ({

    datasets: [{
        data: [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)],

        backgroundColor: [
            '#FF6384', // red
            '#36A2EB', // blue
            '#FFCE56', // yellow
            '#24e216', // green
            '#3713d6' // purple
        ],
        borderColor: 'rgba(255,255,255,0.54)',

        hoverBackgroundColor: [
            '#FF6384', // red
            '#36A2EB', // blue
            '#FFCE56',// yellow
            '#24e216', // green
            '#3713d6' // purple
        ],
    }],
    labels: [
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
    ],
});


export default class CertificationsDoughnutComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            certification: [{
                certName: "",
                user: [{
                    associateId: 0,
                    associateName: "",
                    certName: "",
                    grade: "",
                    projectDetails: "",

                }]
            }],
            
            data: getState(),
            options: {
                legend: {
                    labels: {
                        boxWidth: 10,
                        padding: 80
                    },
                    position: 'right'
                }
            }

        };
    }


    public handleEdit = (event: any) => {
        event.preventDefault();
        console.log("hello");

    }


    public async componentDidMount() {
        setInterval(() => {
            this.setState({ data: getState() });
        }, 4000);
        // const res = await axios.get('http://localhost:5002/certifications');
        // const res2 = await axios.get('http://localhost:8888/projects');
        // const res = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/certifications',{ headers:{ "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } }); 
        // backup certification
        const res = await axios.get('http://ec2-18-222-202-19.us-east-2.compute.amazonaws.com:5002/certifications',{ headers:{ "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } }); 
        const res1 = await axios.get('http://localhost:8080/users', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } });
        const res2 = await axios.get('http://ec2-18-221-142-75.us-east-2.compute.amazonaws.com:8088/project', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } });
      
       

        // for(const certName of res.data){
        //    console.log(certName);
        // }

        const certification = [{
            certName: "",
            user: [{
                associateId: 0,
                associateName: "",
                certName: "",
                grade: "",
                projectDetails: "",

            }]
        }];
        
        res.data.forEach((certName: any, i: any) => {
             console.log(certName);
             certification[i].certName = certName.certificationName;
             certification.push( {certName: "",
             user: [{
                 associateId: 0,
                 associateName: "",
                 certName: "",
                 grade: "",
                 projectDetails: "",
 
             }]
           });
            //  console.log(certification[i].certName);
            //  console.log(i);

            res2.data.forEach((proj: any) => {

                res1.data.forEach((user: any, j: any) => {
                    
                    // console.log(user);
                    
                    // console.log(this.state.certification[i].user[j]);
                    let userHasCert=[];
                    let filter=[]; 
                    if(user.aupCert){
                        userHasCert = res1.data.filter((hasCert: any) =>
                        hasCert.aupCert === true
                    );
                    
                     // console.log(userHasCert);

                    filter = res1.data.filter((resc: any) => resc.projectId === proj.projectId);
                    // console.log(filter);
                    }
                    
                    if (userHasCert.length > 0 && filter.length > 0) {
                        certification[i].user[j].associateName = user.firstName + " " + user.lastName;
                        certification[i].user[j].associateId = user.associateId;
                        certification[i].user[j].certName = certName.certificationName;
                        certification[i].user[j].projectDetails = proj.name;
                        certification[i].user[j].grade = user.grade;
                    }    
                });
            })
            
        });
    }

    public render() {
        return (
            <Card md={12}>
                <Row>
                    <Col md={12}>
                        <Doughnut data={this.state.data} options={this.state.options} />
                    </Col>
                </Row>

                <Col md={12}>
                    <div>
                        <h4>Selected Certification Name</h4>
                    </div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ASSOCIATE NAME</th>
                                <th>ID</th>
                                <th>CERTIFICATION</th>
                                <th>PROJECT DETAILS</th>
                                <th>GRADE</th>
                                <th>DETAILS</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* <tr>
                                <td>James</td>
                                <td>1234</td>
                                <td>Certification Details</td>
                                <td>Project Name</td>
                                <td>M</td>
                                <td>View/Edit</td>
                                <td onClick={this.handleEdit} style={{ cursor: 'pointer' }}><MdCreate /></td>
                            </tr> */}

                            {
                                // this.state.certification.map((cer: any) => (
                                //     <tr key={cer.user.associateId}>
                                //         <td>{cer.user.associateName}</td>
                                //         <td>{cer.user.associateId}</td>
                                //         <td>{cer.user.certName}</td>
                                //         <td>{cer.user.projectDetails}</td>
                                //         <td>{cer.user.grade}</td>
                                //         <td>View</td>
                                //         <td onClick={this.handleEdit} style={{ cursor: 'pointer' }}><MdCreate /></td>
                                       
                                //     </tr>
                                // ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Card>


        )
    }

}
