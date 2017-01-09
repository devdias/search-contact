//Data
var contacts = [
  {
    id:"1",
    firstName : "Jane",
    lastName : "Doe",
    phone: "0600000000"
  },
  {
    id:"2",
    firstName : "John",
    lastName : "Marshal",
    phone: "0604440000"
  },
  {
    id:"3",
    firstName : "Emilie",
    lastName : "Emilie2",
    phone: "0600000000"
  },
  {
    id:"4",
    firstName : "Jane",
    lastName : "Jane Two",
    phone: "06XXXXXXXX"
  },
];


//ContactList Component
var ContactList = React.createClass({
  getInitialState: function(){
    return {
      search: ''
    }
  },
  UpdateSearch: function(event){
    this.setState({
      search : event.target.value
    })
  },
  render : function(){
    var that = this;
    
    var filteredContacts = this.props.contacts.filter(function(contact){
      return contact.firstName.indexOf(that.state.search) !== -1;
    });

    var listContact = filteredContacts.map(function(content){
      return (
        <tr key={content.id}>
          <td>{content.id}</td>
          <td>{content.firstName}</td>
          <td>{content.lastName}</td>
          <td>{content.phone}</td>
        </tr>
      )
    });

    return (
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>#ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Phone</th>
            </tr>
            {listContact}
          </tbody>
        </table>
        <div className="row">
          <div className="col-sm-4">
            <h3>Chercher des contacts</h3>
            <input placeholder="Chercher des contacts" className="form-control" type="text" value={this.state.name} onChange={this.UpdateSearch}/>
          </div>
        </div>
        
      </div>
    )
  }
});

//App Component
function App(props){
  return (
      <div className="container">
        <h1>Contact List</h1>
        <ContactList contacts={props.contacts}/>
      </div>
    )
}

//Render The Virtual DOM into Real Dom
ReactDOM.render(<App contacts={contacts}/>, document.getElementById('container'));