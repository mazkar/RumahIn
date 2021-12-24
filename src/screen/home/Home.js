import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {API} from './../../utils/Api';
//Action
import {getAllProduct} from './redux/HomeAction';

export default function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});
  useEffect(() => {
    dispatch(getAllProduct());
    console.log('r');
  }, [dispatch]);
  // let fetchOrders = () => {
  //   API.get('products', {
  //     per_page: 50,
  //   })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.log(error, 'ree');
  //     });
  // };

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
