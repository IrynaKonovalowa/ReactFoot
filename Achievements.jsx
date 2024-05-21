class Achievements extends React.Component {
    render() {
        console.log(this.props.achs.achievement);
        console.log(this.props.achs.result);
        return <li>{this.props.achs.achievement}
            <ul>                
                {this.props.achs.result.map(function (res) {
                    return <Result ress={res} />; })}                       
            </ul>            
            </li>                 
    }
  }
  
  
