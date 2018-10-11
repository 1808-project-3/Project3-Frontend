import * as React from 'react';
import { Col, Table, Row, Card } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2'
// import { MdCreate } from 'react-icons/md/';
import axios from 'axios';
// import { Certification } from 'src/models/Certification';



export default class CertificationsDoughnutComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            certNameId: 0,
            certification: [{
                certId: 0,
                user: [{
                    associateId: 0,
                    associateName: "",
                    certName: "",
                    grade: "",
                    projectDetails: "",
                    userCerts: [],

                }]
            }],
            certificationConst: [{
                certId: 0,
                user: [{
                    associateId: 0,
                    associateName: "",
                    certName: "",
                    grade: "",
                    projectDetails: "",
                    userCerts: [],

                }]
            }],
          
            dataCert: {
                datasets: [{
                    backgroundColor: [
                        '#FF6384', // red
                        '#36A2EB', // blue
                        '#FFCE56', // yellow
                        '#24e216', // green
                        '#3713d6', // purple
                        '#0c0c0c' // black
                    ],
                    borderColor: 'rgba(255,255,255,0.54)',

                    data: [],
                    hoverBackgroundColor: [
                        '#FF6384', // red
                        '#36A2EB', // blue
                        '#FFCE56',// yellow
                        '#24e216', // green
                        '#3713d6', // purple
                        '#0c0c0c' // black
                    ],
                }],
                labels: [
                    'OCA: Oracle Certified Associate',
                    'AWS Certified Developer - Associate Level',
                    'Scrum Alliance',
                    'PMI: Project Management Institute',
                    'Red Hat',
                    'MCSD: Microsoft'
                ],
            },
           

            options: {
                
                legend: {
                    labels: {
                        boxWidth: 5,
                        fontSize:14,
                        padding: 50,
                    },
                    onClick: (e: any, legendItem: any) => {
                        this.getCertName(legendItem.text);
                    },
                    position: 'right'
                },
                responsive:true,
            },

            projects:[{
                projectId:0,
                projectName:"",
            }],

            selected: false,
            selectedCertName: "",
        };
    }


    // public handleView = (event: any) => {
    //     event.preventDefault();
    //     console.log("hello");

    // }

    public getCertName(name: any) {
        if (name === 'OCA: Oracle Certified Associate') {
            this.setState({
                
                certNameId: 1,
                selected: true,
                selectedCertName: name,

               
            })
        }
        else if (name === 'AWS Certified Developer - Associate Level') {
            this.setState({
                certNameId: 2,
                selected: true,
                selectedCertName: name,
            })
        }
        else if (name === 'Scrum Alliance') {
            this.setState({
                certNameId: 3,
                selected: true,
                selectedCertName: name,
                
            })
        }

        else if (name === 'PMI: Project Management Institute') {
            this.setState({
                certNameId: 4,
                selected: true,
                selectedCertName: name,
            })
        }

        else if (name === 'Red Hat') {
            this.setState({
                certNameId: 5,
                selected: true,
                selectedCertName: name,
            })
        }
        else if (name === 'MCSD: Microsoft') {
            this.setState({
                certNameId: 6,
                selected: true,
                selectedCertName: name,
            })
        }

        this.setState({
            certification: this.state.certificationConst
        })
       

        const tempCertification = [];

        if (this.state.certification) {
            for (const users of this.state.certification) {
                if (users.certId.length > 0) {
                  
                    for (const certId of users.certId) {
                        if (certId === 1 && this.state.certNameId === 1) {
                            tempCertification.push({
                               
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: "OCA: Oracle Certified Associate",
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        } // end if
                        else if (certId === 2 && this.state.certNameId === 2) {
                           
                            tempCertification.push({
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'AWS Certified Developer - Associate Level',
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 3 && this.state.certNameId === 3) {
                            tempCertification.push({
                              
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'Scrum Alliance',
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 4 && this.state.certNameId === 4) {
                            tempCertification.push({
                                
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'PMI: Project Management Institute',
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 5 && this.state.certNameId === 5) {
                            tempCertification.push({
                                
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'Red Hat',
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 6 && this.state.certNameId === 6) {
                            tempCertification.push({
                                
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'MCSD: Microsoft',
                                    grade: users.user[0].grade,
                                    projectDetails: users.user[0].projectDetails,
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                    }
                }
            }
        }// end if
        this.setState({
            certification: tempCertification
        })
    }



    public async componentDidMount() {
        // const res = await axios.get('http://localhost:5002/certifications');
        // const res2 = await axios.get('http://localhost:8888/projects');
        // const res = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/certifications', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MTkzMzAwLCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.qVDbspNmTvomDEyBwpw7ZRLvjRSc1trBcSoyL9nz7I8' } });
        // backup certification
        // const res = await axios.get('http://ec2-18-222-202-19.us-east-2.compute.amazonaws.com:5002/certifications',{ headers:{ "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } }); 
        const res1 = await axios.get('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5Mjc5OTI0LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.HxJgOEmMplGHLHjp-I-QpzIX7b5tAXLLxXKMbJ2-mgc' } });
        const res2 = await axios.get('http://ec2-18-221-142-75.us-east-2.compute.amazonaws.com:8088/project', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5Mjc5OTI0LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.HxJgOEmMplGHLHjp-I-QpzIX7b5tAXLLxXKMbJ2-mgc' } });

        let countOne = 0;
        let countTwo = 0;
        let countThree = 0;
        let countFour = 0;
        let countFive = 0;
        let countSix = 0;
        res1.data.forEach((user: any, i: any) => {
            if (user.userCerts.length > 0) {
                user.userCerts.forEach((certs: any, j: any) => {
                    if (certs.certId === 1) {
                        countOne++;
                    }
                    else if (certs.certId === 2) {
                        countTwo++;
                    }
                    else if (certs.certId === 3) {
                        countThree++;
                    }
                    else if (certs.certId === 4) {
                        countFour++;
                    }
                    else if (certs.certId === 5) {
                        countFive++;
                    }
                    else {
                        countSix++;
                    }

                })
            }
        });// end of foreach res1

     
        this.setState({
            dataCert: { datasets: [{ data: [countOne, countTwo, countThree, countFour, countFive, countSix] }] }
        })
      


        const tempCertification = [{
            certId: [],
            user: [{
                associateId: 0,
                associateName: "",
                certName: "",
                grade: "",
                projectDetails: "",
                userCerts: []

            }]
        }];
        const tempProjects:any =[];
        res2.data.forEach((projects:any)=>{
            tempProjects.push(projects);
        });
      

        res1.data.forEach((users: any) => {
            const userCertId: any = [];
            users.userCerts.forEach((cer: any) => {
                userCertId.push(cer.certId);
            })

            let projectName:any = "";
            if (users.resources[0]) {
                if(users.resources[0].projectId){
                    tempProjects.forEach((pro:any)=>{
                        if(pro.projectId===users.resources[0].projectId){
                             projectName = pro.name;
                        }

                    })
                }
                tempCertification.push({
                    certId: userCertId,
                    user: [{
                        associateId: users.associateId,
                        associateName: `${users.firstName} ${users.lastName}`,
                        certName: "Test",
                        grade: users.resources[0].grades.grade,
                        projectDetails: projectName,
                        userCerts: users.userCerts,

                    }]

                })
                
            }
        }); // end foreach res1.data

        this.setState({
            certification: tempCertification,
            certificationConst: tempCertification,
        })

    }



    public render() {
        const selected = this.state.selected;
        const selectedCertName = this.state.selectedCertName;
        return (
            <Card md={12} >
                <Row>
                   
                    <Col md={12}>
                        <div className="certi-chart">
                        <Doughnut data={this.state.dataCert} options={this.state.options} />
                        </div>
                    </Col>
                   
                </Row>

                <Col md={12}>
                    <Row>
                        <Col md={10}>
                        <h4>{selectedCertName}</h4>
                        </Col>
                        <Col md={2}>
                        {/* <Button className="certi-button">VIEW ALL</Button> */}
                        </Col>
                        
                    </Row>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ASSOCIATE NAME</th>
                                <th>ID</th>
                                <th>CERTIFICATION</th>
                                <th>PROJECT DETAILS</th>
                                <th>GRADE</th>
                                {/* <th>DETAILS</th> */}
                                {/* <th></th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {selected ? (

                                this.state.certification.map((cer: any) => (
                                    <tr key={cer.user[0].associateId}>
                                        <td>{cer.user[0].associateName}</td>
                                        <td>{cer.user[0].associateId}</td>
                                        <td>{cer.user[0].certName}</td>
                                        <td>{cer.user[0].projectDetails}</td>
                                        <td>{cer.user[0].grade}</td>
                                        {/* <td onClick={this.handleView} style={{cursor:'pointer', color:'blue'}}>View</td> */}
                                        {/* <td onClick={this.handleEdit} style={{ cursor: 'pointer' }}><MdCreate /></td> */}

                                    </tr>
                                ))
                            ) : (<div>not selected</div>)



                            }
                        </tbody>
                    </Table>
                </Col>
            </Card>


        )
    }

}
