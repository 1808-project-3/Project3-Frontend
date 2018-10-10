import * as React from 'react';
import { Col, Table, Row, Card } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2'
import { MdCreate } from 'react-icons/md/';
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
                        boxWidth: 10,
                        padding: 80
                    },
                    onClick: (e: any, legendItem: any) => {
                        // console.log(legendItem.text);
                        this.getCertName(legendItem.text);
                    },
                    position: 'right'
                }
            },
            selected: false,
            selectedCertName: "",
        };
    }


    public handleEdit = (event: any) => {
        event.preventDefault();
        console.log("hello");

    }

    public getCertName(name: any) {
        // console.log(name);

        if (name === 'OCA: Oracle Certified Associate') {
            this.setState({
                certNameId: 1,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }
        else if (name === 'AWS Certified Developer - Associate Level') {
            this.setState({
                certNameId: 2,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }
        else if (name === 'Scrum Alliance') {
            this.setState({
                certNameId: 3,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }

        else if (name === 'PMI: Project Management Institute') {
            this.setState({
                certNameId: 4,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }

        else if (name === 'Red Hat') {
            this.setState({
                certNameId: 5,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }
        else if (name === 'MCSD: Microsoft') {
            this.setState({
                certNameId: 6,
                selected: true,
                selectedCertName: name,
                userCertName: name,

            })
        }




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


        if (this.state.certification) {
            for (const users of this.state.certification) {
                if (users.certId.length > 0) {
                    console.log(users.user[0].associateName);
                    for (const certId of users.certId) {
                        if (certId === 1 && this.state.certNameId === 1) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: "OCA: Oracle Certified Associate",
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        } // end if
                        else if (certId === 2 && this.state.certNameId === 2) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'AWS Certified Developer - Associate Level',
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 3 && this.state.certNameId === 3) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'Scrum Alliance',
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 4 && this.state.certNameId === 4) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'PMI: Project Management Institute',
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 5 && this.state.certNameId === 5) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'Red Hat',
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                        else if (certId === 6 && this.state.certNameId === 6) {
                            console.log(users);
                            tempCertification.push({
                                certId: [],
                                user: [{
                                    associateId: users.user[0].associateId,
                                    associateName: `${users.user[0].associateName}`,
                                    certName: 'MCSD: Microsoft',
                                    grade: users.user[0].grade,
                                    projectDetails: 'Test',
                                    userCerts: users.user[0].userCerts,
                                }]

                            })
                        }
                    }

                }

            }
        }
        this.setState({
            certification: tempCertification
        })

        console.log(this.state.certification)
    }


    public async componentDidMount() {
        // const res = await axios.get('http://localhost:5002/certifications');
        // const res2 = await axios.get('http://localhost:8888/projects');
        // const res = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/certifications', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MTkzMzAwLCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.qVDbspNmTvomDEyBwpw7ZRLvjRSc1trBcSoyL9nz7I8' } });
        // backup certification
        // const res = await axios.get('http://ec2-18-222-202-19.us-east-2.compute.amazonaws.com:5002/certifications',{ headers:{ "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MDkzNTM2LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.kwAWHSfLYD6esizHno-ba4J3SHa33-nXX_YPnnA4168' } }); 
        const res1 = await axios.get('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5Mjc5OTI0LCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.HxJgOEmMplGHLHjp-I-QpzIX7b5tAXLLxXKMbJ2-mgc' } });
        // const res2 = await axios.get('http://ec2-18-221-142-75.us-east-2.compute.amazonaws.com:8088/project', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjoxNTM5MTkzMzAwLCJ1c2VyaWQiOjEyMzQ1Niwic2NvcGUiOiJzZWxmIGdyb3Vwcy91c2VycyJ9.qVDbspNmTvomDEyBwpw7ZRLvjRSc1trBcSoyL9nz7I8' } });


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

        // let certNumber:any = [];
        // certNumber = [countOne, countTwo, countThree, countFour, countFive, countSix];
        this.setState({
            dataCert: { datasets: [{ data: [countOne, countTwo, countThree, countFour, countFive, countSix] }] }
        })
        // console.log(this.state.dataCert);


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
        console.log(res1.data);
        res1.data.forEach((users: any) => {

            const userCertId: any = [];
            users.userCerts.forEach((cer: any) => {
                userCertId.push(cer.certId);
            })


            if (users.resources[0]) {
                tempCertification.push({
                    certId: userCertId,
                    user: [{
                        associateId: users.associateId,
                        associateName: `${users.firstName} ${users.lastName}`,
                        certName: "Test",
                        grade: users.resources[0].grades.grade,
                        projectDetails: 'Test',
                        userCerts: users.userCerts,

                    }]

                })
            }
        }); // end foreach res1.data

        this.setState({
            certification: tempCertification
        })

        console.log(this.state.certification);
    }



    // for(let i=0; i<res1.data.length; i++){
    //     if(res1.data[i].userCerts){
    //         res1.data[i].userCerts.forEach((cert:any)=>{
    //             if(this.state.userCertName ===cert){
    //                 console.log(`found ${cert}`);
    //             }

    //         })
    //     }
    // }





    // const certification = [{
    //     certName: "",
    //     user: [{
    //         associateId: 0,
    //         associateName: "",
    //         certName: "",
    //         grade: "",
    //         projectDetails: "",

    //     }]
    // }];

    // res.data.forEach((certName: any, i: any) => {
    //     certification[i].certName = certName.certificationName;
    //     certification.push({
    //         certName: "",
    //         user: [{
    //             associateId: 0,
    //             associateName: "",
    //             certName: "",
    //             grade: "",
    //             projectDetails: "",

    //         }]
    //     });
    //  console.log(certification[i].certName);
    //  console.log(i);

    // res2.data.forEach((proj: any) => {

    //     res1.data.forEach((user: any, j: any) => {

    //         // console.log(user);

    //         // console.log(this.state.certification[i].user[j]);
    //         let userHasCert = [];
    //         let filter = [];
    //         if (user.aupCert) {
    //             userHasCert = res1.data.filter((hasCert: any) =>
    //                 hasCert.aupCert === true
    //             );

    //             // console.log(userHasCert);

    //             filter = res1.data.filter((resc: any) => resc.projectId === proj.projectId);
    //             // console.log(filter);
    //         }

    //         if (userHasCert.length > 0 && filter.length > 0) {
    //             certification[i].user[j].associateName = user.firstName + " " + user.lastName;
    //             certification[i].user[j].associateId = user.associateId;
    //             certification[i].user[j].certName = certName.certificationName;
    //             certification[i].user[j].projectDetails = proj.name;
    //             certification[i].user[j].grade = user.grade;
    //         }
    //     });
    // })

    // });


    public render() {

        const selected = this.state.selected;
        const selectedCertName = this.state.selectedCertName;
        return (
            <Card md={12} >
                <Row>
                    <Col md={12}>
                        <Doughnut data={this.state.dataCert} options={this.state.options} />
                    </Col>
                </Row>

                <Col md={12}>
                    <div>
                        <h4>{selectedCertName}</h4>
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
                                        <td>{this.state.userTable.userCert}</td>
                                        <td>Project Name</td>
                                        <td>M</td>
                                        <td>View/Edit</td>
                                        <td onClick={this.handleEdit} style={{ cursor: 'pointer' }}><MdCreate /></td>
                                    </tr> */}

                            {selected ? (

                                this.state.certification.map((cer: any) => (
                                    <tr key={cer.user[0].associateId}>
                                        <td>{cer.user[0].associateName}</td>
                                        <td>{cer.user[0].associateId}</td>
                                        <td>{cer.user[0].certName}</td>
                                        <td>{cer.user[0].projectDetails}</td>
                                        <td>{cer.user[0].grade}</td>
                                        <td>View</td>
                                        <td onClick={this.handleEdit} style={{ cursor: 'pointer' }}><MdCreate /></td>

                                    </tr>
                                ))
                            ) : (<div>no selected</div>)



                            }
                        </tbody>
                    </Table>
                </Col>
            </Card>


        )
    }

}
