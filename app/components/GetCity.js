var React = require('react');

function GetCity(props){
  var styles = {
    display: 'flex',
    flexDirection: props.direction ||'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  };
  return (
    <div style={styles} >
      <Input
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        margin={props.margin}
        onSubmitCity={props.onSubmitCity} />
    </div>
  )
}

function Input(props){
  return (
    <input
      className='form-control'
      type='text'
      placeholder = 'Example: Hanoi'
      onChange={props.onUpdateCity}
      value={props.city} />
  )
}

function Button(props){
  return (
    <button
      style={props.margin}
      className="btn btn-block btn-success"
      onClick={props.onSubmitCity} >
       Get Weather
     </button>
   )
}

module.exports = GetCity;
