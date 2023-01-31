import './styles/loader.css'

function Loading(props) {

  const {message} = props


  return (
    <div className="loading">
      <h1>{message}</h1>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
