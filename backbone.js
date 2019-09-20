function connectToBackbone(WrappedComponenet){
return class BackboneComponent extends React.Component{
constructor(props) {
super(props);
this.state = Object.assign({}, props.model.attributes);
this.state.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
 this.props.model.on('change', this.handleChange);
    }

    componentWillReceiveProps(nextProps){
       this.setstate(Object.assign({}, nextProps.model.attributes));
       if (nextProps.model !==this.props.model){
       this.props.model.off('change',this.handleChange);
       nextProps.model.on('change', this.handleChange);
       }
    }
      componentWillUnmount(){
          this.props.model.off('change', this.handleChange);
      }
      handleChange(model){
               this.setState(model.changeAttributes());
     }
   
     render() {
         const propsExceptModel = Object.assign({}, this.props);
         delete propsExceptModel.model;
         return<WrappedComponenet {...propsExceptModel}  {...this.state}/>

     }
   
    }
}


