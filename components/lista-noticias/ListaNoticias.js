import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class ListaNoticias extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          noticias: ['noticia 1', 'noticia 2', 'noticia 3', 'noticia 4']
        };
    }


    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                { this.state.noticias.map(
                    noticia => (
                        <Text>{noticia}</Text>
                    ) 
                )}
            </ScrollView>
        );
    }  
}

const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 50
    }
});
