import * as React from 'react';
<<<<<<< HEAD
import {Col} from 'reactstrap';
=======
import {Card,CardBody} from 'reactstrap';
>>>>>>> a72917c5eda37ecd8a85534907a2519fe3b34e76
import {Doughnut} from 'react-chartjs-2';





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
      
<<<<<<< HEAD
      labels: [
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
    ]
    
=======
    
    
   
      
    }],
    labels: [
      'Under 19',
      '20~30',
      '31~45',
      '46~60',
      'Over 60'
  ],
>>>>>>> a72917c5eda37ecd8a85534907a2519fe3b34e76
  });


export default class CertificationsDoughnutComponent extends React.Component<any,any> {

    constructor(props:any) {
        super(props);
        this.state = {
          data: getState(),
          options: {
              legend: {
                  position: 'right'
              }
          }
        };
      }
    
    public componentDidMount() {
        setInterval(() => {
          this.setState({ data: getState() });
        }, 4000);
      }

    public render() {
        return (
<<<<<<< HEAD
            <Col md={12}>
            <div style={{width: '120vh'}}>
                <Doughnut data={this.state.data} options={this.state.options}/>
            </div>
          </Col>
=======
            <Card>
              <CardBody>
                <div className='card__title'>
                  <h5 className='bold-text'>Certifications Doughnut</h5>
                </div>
                <Doughnut data={this.state.data} />
              </CardBody>
            </Card>
>>>>>>> a72917c5eda37ecd8a85534907a2519fe3b34e76
        )
    }

}
