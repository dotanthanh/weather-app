var React = require('react');
var Header = require('../components/Header');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

function Main(props){
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{margin:20}}>
          Weather App
        </h1>
      <Header />
    </div>
      {props.children}
    </div>
  )
}

module.exports = Main;
