import * as React from 'react';
import {Row, Col, Container, Card} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getRandomInt(min:any, max:any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getSkillGroupState = () => ({
   
    datasets: [{
      data: [getRandomInt(1,100), getRandomInt(1,100), getRandomInt(1,100),getRandomInt(1,100),getRandomInt(1,100)],

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
        'Mobility',
        'front-end',
        '31~45',
        '46~60',
        'Over 60'
    ],
    
  });

  const getSkillState = () => ({
   
    datasets: [{
      data: [getRandomInt(1,100), getRandomInt(1,100), getRandomInt(1,100),getRandomInt(1,100),getRandomInt(1,100)],

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
        'Mobility',
        'front-end',
        '31~45',
        '46~60',
        'Over 60'
    ]
    

  });


export default class SkillDoughnut extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.state = {
            selectedSkillGroup: 'Mobility',
            skillChart: {
                data: getSkillState(),
                options: {
                    legend: {
                        display: false,
                    }
                }
            },
            skillGroupChart: {
                data: getSkillGroupState(),
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
            skillGroups: [{groupName: 'Mobility', numAssoc: 40, 
                            skills:[{skillName: 'iOS', numAssoc: 24}, 
                                    {skillName: 'Android', numAssoc: 16}]},
                            {groupName: 'front-end', numAssoc: 20,
                            skills: [{skillName: 'JavaScript', numAssoc: 10},
                                    {skillName: 'React', numAssoc: 10}]}]
        };
      }

    public setSkillChart(skillGroup: string) {
        const skillState = getSkillState();
        for (const group of this.state.skillGroups) {
            if (skillGroup === group.groupName) {
                skillState.datasets[0].data = [];
                skillState.labels = [];
                for (const skill of group.skills) {
                    skillState.labels.push(skill.skillName);
                    skillState.datasets[0].data.push(skill.numAssoc);
                }
            }
        }
        console.log(skillState);
        this.setState({selectedSkillGroup: skillGroup});
        this.setState({skillChart: {data: skillState}});
    }
    
    public async componentDidMount() {
        const list: any[] = [];        
        const listObj = {
            skill: [],
            skillGroupName: "",
            totalSkillGroup: 0            
        }
        const skillObj = {
            skillName: "",
            totalSkill: 0
        }
        console.log("before calls");
        const res = await axios.get('http://localhost:8087/users', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res1 = await axios.get('http://localhost:5002/skills', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        const res2 = await axios.get('http://localhost:5002/skill-group', {headers: {"JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' }});
        console.log("after calls")
        console.log(res);
        console.log(res1);
        console.log(res2);
        // loop through groups
        res2.data.forEach((group:any, i:any) => {
            // grabbing group name
            list.push(listObj);
            list[i].skillGroupName = group.groupName;
            // iterating through users
            res.data.forEach((user:any) => {
                let hasGroup = false;
                // filter skills in group
                const skillsInGroup = res1.data.filter((id:any) => 
                    id.groupId === group.id
                )                
                // iterating through skills in group
                skillsInGroup.forEach((skill:any , k: any) => {
                    // adding skill name
                    list[i].skill.push(skillObj);
                    list[i].skill[k].skillName = skill.skillName;
                    // filtering skills
                    console.log(user)
                    const count = user.userSkills.filter((skillId:any) => 
                        skillId.skillId === skill.skillId
                    )
                    // skill count
                    list[i].skill[k].totalSkill += count.length;
                    if (count.length > 0) {
                        hasGroup = true;
                    }
                })
                if (hasGroup) {
                    // skillgroup count
                    list[i].totalSkillGroup++;
                }                
            })
        }) 
        this.setState({skillGroups: list});        
        this.setState({ skillGroupChart: {data: getSkillGroupState()}, skillChart: {data: getSkillState() }});
        
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
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">12</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">13</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">14</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="skillgroup-skill-card">
                                    <div className="skillgroup-skill-card-content">
                                        <p className="skill-card-num-associates">15</p>
                                        <p className="skill-card-name">Associates In <strong>Skill Name</strong></p>
                                    </div>
                                </Card>
                            </Col>
                            
                        </Row>
                    </div>
                </Container>
        )
    }

}
