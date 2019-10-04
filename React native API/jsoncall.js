componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((responseJson)=> {
        this,setState({
            loading:false,
            dataSource: responseJson
        })
    })
    .catch(error=>console.log(error)) //to catch  the errors
}
