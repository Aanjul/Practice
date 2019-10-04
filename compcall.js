import React from 'react';
import HeaderContainer from './HeaderContainer';
import Page from  '/Page/Page';
import  Footer from  './Footer/Footer';

const  App = (props) => (
    <div>
    <HeaderContainer/>

    <Page  data={props.pageStuff}/>

    <Footer{...props.propsRelevantToFooter}/>
    </div>
);

export default App;