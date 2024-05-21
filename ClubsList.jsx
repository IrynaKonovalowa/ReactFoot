class ClubsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.data.title, clubDefault: this.props.data.clubDefault, clubs: this.props.data.clubs, players: this.props.data.clubDefault.players, achievements: this.props.data.clubDefault.achievements };
    this.onChanged = this.onChanged.bind(this);    
  }
 
  onChanged(e) {
    let nameClub = e.target.value;
    console.log(nameClub);
    
    for (const club of this.state.clubs)
      {
        if (club.name === nameClub)
          {
              let selectedClub = club;
              console.log(selectedClub);
              console.log(selectedClub.players);
              console.log(selectedClub.achievements);
              this.setState({ clubDefault: selectedClub, players: selectedClub.players, achievements: selectedClub.achievements });
          }
      }
  }
  render() {
       return (
      <div class="back">
        <div class="divSelect">
        <h2>{this.state.title}</h2>
        <select onChange={this.onChanged}>
           {this.state.clubs.map(function(club){
            return <option>{club.name}</option>
           })}
        </select>
      </div>
      <div>
        <Info club ={this.state.clubDefault} />        
         <div class="divPlayersAch">
         <ul><span>Joueurs:</span>
          {this.state.players.map(function (player) {
            return <Players name={player} />;
          })}
          </ul>
          </div>
          <div class="divPlayersAch">
          <ul><span>Compétitions:</span>
          {this.state.achievements.map(function (ach) {
            return <Achievements achs={ach} />;
          })}
         </ul> 
         </div>
         </div> 
      </div>
    );
  }
}
