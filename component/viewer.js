import React from 'react';
import {View, Text, StyleSheet, ViewComponent, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function Viewer(props) {
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counter}>{count}</Text>
        </View>
    )
};

export default Viewer;