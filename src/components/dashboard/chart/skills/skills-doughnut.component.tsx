import * as React from 'react';
import {Row, Col, Container} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min:any, max:any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getState = () => ({
   
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
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
    ],
    
  });

  const getSubState = () => ({
   
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
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
    ]
    

  });


export default class SkillDoughnut extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.state = {
          data: getState(),
          options: {
              legend: {
                display: false,
              }
        },
          subData: getSubState(),
          subOptions: {
            legend: {
                position: 'right'
            }
        }
        };
      }
    
    public componentDidMount() {
        setInterval(() => {
            this.setState({ data: getState(), subData: getSubState() });
          }, 4000);
        
    }
    public render() {
        return (
                <Container>
                    <Row>
                        <Col md={7}>
                            <div style={{ paddingTop: '20%' }}>
                            <Doughnut data={this.state.data} options={this.state.subOptions}/>                              
                            </div>
                        </Col>
                        <Col md={5}>
                            <div style={{ paddingTop: '40%'}}>
                            <Doughnut data={this.state.subData} options={this.state.options} />                        
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '2%'}}>
                        <Col md={7}>
                            <p style={{textAlign: 'center', paddingRight: '30%'}}>TOTAL ASSOCIATES</p>
                        </Col>
                        <Col md={5}>
                            <p style={{textAlign: 'center'}}>SELECTED SKILLGROUP</p>
                        </Col>
                    </Row>
                </Container>
        )
    }

}
