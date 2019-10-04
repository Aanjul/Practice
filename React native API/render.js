render(){
    if(this.state.loading){
        return(
            <View style={styles.loader}>
             <ActivityIndicator  size="large" color="#0c9"/>
             </View>

             
        )}
    return(
        <View  style={styles.container}>
            <FailList
            data={this.state.dataSource}
            ItemSeparatorComponent =   {this.FailListItemsSeparator}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item.id.toString()}
            />
        </View>

    )
}

}

