import * as React from 'react';
import {Col,Card,CardBody,Table} from 'reactstrap';
import {Doughnut} from 'react-chartjs-2';
import {MdCreate} from 'react-icons/md/'





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


export default class CertificationsDoughnutComponent extends React.Component<any,any> {

    constructor(props:any) {
        super(props);
        this.state = {
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
    public handleEdit =(event:any)=>{
        event.preventDefault();
        console.log("hello");

    }
    
    public componentDidMount() {
        setInterval(() => {
          this.setState({ data: getState() });
        }, 4000);
      }

    public render() {
        return (
        <div>
          <Col md={12}>
              <Doughnut data={this.state.data} options={this.state.options}/>
          </Col>


          <Card>
          <CardBody>
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
                  <tr>
                      <td>James</td>
                      <td>1234</td>
                      <td>Certification Details</td>
                      <td>Project Name</td>
                      <td>M</td>
                      <td>View/Edit</td>
                      <td onClick={this.handleEdit} style={{cursor:'pointer'}}><MdCreate/></td>
                  </tr>
                  <tr>
                      <td>Chase</td>
                      <td>1234</td>
                      <td>Certification Details</td>
                      <td>Project Name</td>
                      <td>M</td>
                      <td>View/Edit</td>
                      <td onClick={this.handleEdit} style={{cursor:'pointer'}}><MdCreate/></td>
                  </tr>
                  <tr>
                      <td>Maya</td>
                      <td>1234</td>
                      <td>Certification Details</td>
                      <td>Project Name</td>
                      <td>M</td>
                      <td>View/Edit</td>
                      <td onClick={this.handleEdit} style={{cursor:'pointer'}}><MdCreate/></td>
                  </tr>
              </tbody>
          </Table>
          </CardBody>
      </Card>
      </div>

          
        )
    }

}
