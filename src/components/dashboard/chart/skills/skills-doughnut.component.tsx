import * as React from 'react';
import {Row, Col, Container} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

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
    
    public componentDidMount() {
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
                    <Row style={{marginTop: "10px"}}>
                        <Col md={6} style={{textAlign: "center"}}>
                            <p style={{color: '#7C7A7A'}}>TOTAL ASSOCIATES</p>
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <p style={{fontWeight: 'bold'}}>{this.state.selectedSkillGroup}</p>
                        </Col>
                    </Row>
                </Container>
        )
    }

}
