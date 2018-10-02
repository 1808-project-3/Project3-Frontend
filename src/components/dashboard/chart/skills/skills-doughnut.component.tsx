import * as React from 'react';
import {Row, Col} from 'reactstrap';
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
           
                  <Row>
                    <div className='card__title'>
                        <h5 className='bold-text'>Skills Doughnut</h5>
                    </div>
                        <Col>
                            <div style={{ width: '70vh' }}>
                              <Doughnut data={this.state.data} options={this.state.subOptions}/>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ width: '45vh', paddingTop: '5vh'}}>
                              <Doughnut data={this.state.subData} options={this.state.options} />
                            </div>
                        </Col>
                  </Row>
                
       
        )
    }

}
