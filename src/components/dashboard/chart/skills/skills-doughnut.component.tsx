import * as React from 'react';
import {Row, Col, Container, Card} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SkillDoughnut extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.state = {
            selectedSkillGroup: '',
            skillChart: {
                data: {
                    datasets: [{                                  
                    backgroundColor: [
                      '#FF6384', // red
                      '#36A2EB', // blue
                      '#FFCE56', // yellow
                      '#24e216', // green
                      '#3713d6' // purple
                    ],
                    borderColor: 'rgba(255,255,255,0.54)',
                    data: [],                  
                    hoverBackgroundColor: [
                      '#FF6384', // red
                      '#36A2EB', // blue
                      '#FFCE56',// yellow
                      '#24e216', // green
                      '#3713d6' // purple
                    ],
                  }],              
                  labels: []                              
                },
                options: {
                    legend: {
                        display: false,
                    }
                }
            },
            skillGroupChart: {
                data: {   
                    datasets: [{                                      
                      backgroundColor: [
                        '#FF6384', // red
                        '#36A2EB', // blue
                        '#FFCE56', // yellow
                        '#24e216', // green
                        '#3713d6' // purple
                      ],
                      borderColor: 'rgba(255,255,255,0.54)',
                      data: [],                    
                      hoverBackgroundColor: [
                        '#FF6384', // red
                        '#36A2EB', // blue
                        '#FFCE56',// yellow
                        '#24e216', // green
                        '#3713d6' // purple
                      ],
                    }],                      
                      labels: [],                    
                  },
                options: {
                    legend: {
                        labels: {
                            boxWidth: 10,
                            padding: 20
                        },
                        onClick: (e:any, legendItem:any) => {
                            console.log(legendItem.text);
                            this.setSkillChart(legendItem.text);
                        },
                        position: 'right'
                    }
                }
            },
            skillGroups: []
        };
      }

    public setSkillChart(skillGroup: string) { 
        // get the data from the state and place the labels/values into the sub chart of skills for the selected skill group
        const selectedSkillGroup = this.state.skillGroups.filter((group:any) => group.skillGroupName === skillGroup);        

        const skillLabels = selectedSkillGroup[0].skills.map((val:any) => val.skillName);
        const skillValues = selectedSkillGroup[0].skills.map((val:any) => val.totalSkill);
        
        this.setState({selectedSkillGroup: skillGroup});        
        this.setState({skillChart: {data: {datasets: [{data: skillValues}], labels: skillLabels}}});
    }
    
    public async componentDidMount() {
        const list: any[] = [];        
                
        const res = await axios.get('http://localhost:8087/users', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res1 = await axios.get('http://localhost:5002/skills', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res2 = await axios.get('http://localhost:5002/skill-group', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
          
        // loop through groups
        res2.data.forEach((group:any, i:any) => {
            const listObj = {            
                skillGroupName: "",
                skills: [],
                totalSkillGroup: 0            
            }
            // grabbing group name
            list.push(listObj); 
            list[i].skillGroupName = group.groupName;
            
            // loop through skills      
            res1.data.forEach((skill:any, k:any) => { 
                const skillObj = {
                    skillName: "",
                    totalSkill: 0
                }               

                // add skill name
                if (skill.groupId === group.id) {
                    skillObj.skillName = skill.skillName;                                        

                    // loop through users to check if they have that skill
                    res.data.forEach((user:any) => {
                        user.userSkills.forEach((userSkill:any) => {
                            if (userSkill.skillId === skill.id) {
                                skillObj.totalSkill++
                                list[i].totalSkillGroup++
                            }
                        })   
                    })
                    list[i].skills.push(skillObj);
                }
            })
        })
        // place the list into the state for a ref to the data when another skill group is selected
        this.setState({skillGroups: list});

        // get skill group labels and values
        const skillGroupLabels = list.map(val => val.skillGroupName);
        const skillGroupValues = list.map(val => val.totalSkillGroup);

        // put data into skill group chart                               
        this.setState({ skillGroupChart: {data: {datasets: [{data: skillGroupValues}], labels: skillGroupLabels}}});

        // get skill group with highest num of associates and set the subchart
        const max = list.reduce((prev:any, current:any) => 
            prev.totalSkillGroup > current.totalSkillGroup ? prev : current)

        // call method to set the sub chart of skills
        this.setSkillChart(max.skillGroupName);        
    }

    public render() {
        return (
                <Container>
                    <Row>
                        <Col md={7}>
                            <div style={{ paddingLeft:'5%', paddingTop: '20%' }}>
                            <Doughnut data={this.state.skillGroupChart.data} options={this.state.skillGroupChart.options}/>                              
                            </div>
                        </Col>
                        <Col md={5}>
                            <div style={{ paddingRight: '10%', paddingTop: '40%'}}>
                            <Doughnut data={this.state.skillChart.data} options={this.state.skillChart.options} />                        
                            </div>
                        </Col>
                    </Row>                                        
                    <Row style={{marginTop: "10px", borderBottom: '1px solid #E3E2E2'}}>
                        <Col md={6} style={{paddingLeft:'12%'}}>
                            <p style={{color: '#7C7A7A'}}>TOTAL ASSOCIATES</p>
                        </Col>
                        <Col md={6} style={{paddingLeft: '6%', textAlign: "center"}}>
                            <p style={{fontWeight: 'bold'}}>{this.state.selectedSkillGroup}</p>
                        </Col>
                    </Row>                                                            
                    <Row style={{marginTop: "2%"}}>
                        <Col md={6}>
                            <p style={{marginLeft: "10px"}}>{this.state.selectedSkillGroup}</p>
                        </Col>
                        <Col md={6} style={{display: "flex", justifyContent: "flex-end"}}>
                            <Link to="" style={{marginRight: "30px"}}>View All</Link>
                        </Col>
                    </Row>                    
                    <div className="skillgroup-cards-container">

                        <Row style={{overflowY: 'scroll', overflowX: 'hidden', height: '10%'}}>
                        {this.state.skillChart.data.datasets[0].data.map((val:any, index: any) => (
                            <Col sm="3" key={index}>
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">{val}</p>
                                        <p className="skill-card-name">Associates In <strong>{this.state.skillChart.data.labels[index]}</strong></p>
                                    </div>
                                </Card>
                            </Col>
                        ))}    
                        </Row>
                    </div>
                </Container>
        )
    }

}
