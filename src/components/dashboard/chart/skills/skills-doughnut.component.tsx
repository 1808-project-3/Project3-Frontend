import * as React from 'react';
import {Row, Col, Container, Card} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import Scrollbars from 'react-custom-scrollbars';

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
                      '#FFCE56', // yellow
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
                        '#FFCE56', // yellow
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
                            fontSize: 14,
                            padding: 30
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
                
        const res = await axios.get('http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/users', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res1 = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/skills', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res2 = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/skill-group', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
          
        // loop through groups
        res2.data.forEach((group:any, i:any) => {
            const listObj = {            
                skillGroupName: "",
                skills: [],
                totalSkillGroup: 0            
            }
            
            list.push(listObj); 
            list[i].skillGroupName = group.groupName;
            
            // loop through skills      
            res1.data.forEach((skill:any, k:any) => { 
                const skillObj = {
                    skillName: "",
                    totalSkill: 0
                }               
                
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

    public padZero(num: any) {
        return (num.toString().length < 2 && num ? "0" + num : num).toString();
    }

    public render() {
        return (
                <Container>
                    <Row style={{height: "27.25vw"}}>
                        <Col md={7}>                        
                            <div className="skill-group-chart">
                                <Doughnut data={this.state.skillGroupChart.data} options={this.state.skillGroupChart.options}/>                              
                            </div>
                        </Col>
                        <Col md={5}>                        
                            <div className="skill-chart">
                                <Doughnut data={this.state.skillChart.data} options={this.state.skillChart.options} />                        
                            </div>
                        </Col>
                    </Row>                                        
                    <Row className="skill-border">
                        <Col md={6} style={{paddingLeft:'16%'}}>
                            <p>TOTAL ASSOCIATES</p>
                        </Col>
                        <Col md={6} style={{paddingLeft: '5%', textAlign: "center"}}>                        
                            <p className="chart-selected-skill-group">{this.state.selectedSkillGroup}</p>
                        </Col>
                    </Row>                                                            
                    <Row style={{marginTop: "2%"}}>
                        <Col md={6}>
                            <p className="cards-selected-skill-group">{this.state.selectedSkillGroup}</p>
                        </Col>
                    </Row>
                    <Scrollbars style={{height: "20vh"}}>
                        <div className="skill-cards-container">                                                
                            <Row>
                            {this.state.skillChart.data.datasets[0].data.map((val:any, index: any) => (
                                <Col sm={3} key={index}>
                                    <Card className="skill-card">
                                        <div className="skill-card-content">
                                            <p className="skill-card-num-associates">{this.padZero(val)}</p>
                                            <div className="skill-card-text">                                            
                                                <p className="skill-card-associates-in">Associates In</p>
                                                <p className="skill-card-skill-name">{this.state.skillChart.data.labels[index]}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}    
                            </Row>                        
                        </div>
                    </Scrollbars>
                </Container>
        )
    }

}
