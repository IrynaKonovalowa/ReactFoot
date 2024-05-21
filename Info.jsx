class Info extends React.Component {
  render() {
      return <div class="divInfoImg">
        <div class="divInfo">
        <p><span>Nom:</span> {this.props.club.name}</p>
        <p><span>Entraîneur:</span> {this.props.club.trainer}</p>
        <p><span>Ville:</span> {this.props.club.city}</p>
        <p><span>Fondation:</span> {this.props.club.year}</p>
        </div>
        <img src={this.props.club.logo} alt="Logo" />
      </div>
  }
}
