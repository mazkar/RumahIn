import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Touchable, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {ms} from 'react-native-size-matters';
import {Shadow} from 'react-native-shadow-2';

//Action
import {getAllProduct, getProductImage} from './redux/HomeAction';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getProductImage());
  }, [dispatch]);

  const Data = useSelector(state => state.HomeReducer.allProduct);
  const Images = useSelector(state => state.HomeReducer.allProduct.images);
  const Loading = useSelector(state => state.HomeReducer.isLoading);
  return (
    <SafeAreaView style={styles.global}>
      {Loading ? (
        <>
          <View>
            <Text>Loading</Text>
          </View>
        </>
      ) : (
        <ScrollView>
          <View style={styles.mainContainer}>
            {Data ? (
              Data.map((e, i) => (
                <TouchableOpacity>
                  <View style={styles.containerContent}>
                    <View style={styles.containerImage}>
                      {e.images > 0 ? (
                        e.images.map(image => (
                          <Image
                            style={styles.Image}
                            source={{uri: `${image.src}`}}
                          />
                        ))
                      ) : (
                        <Image
                          style={styles.Image}
                          source={require('./../../assets/Images/noImage.png')}
                        />
                      )}
                      <Shadow>
                        <View style={styles.containerDescription}>
                          <View style={styles.title}>
                            <Text style={styles.txtTitle}>{e.name}</Text>
                          </View>
                          <View>
                            <Text></Text>
                            <Text></Text>
                          </View>
                          <View></View>
                        </View>
                      </Shadow>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  global: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: ms(72),
  },
  containerContent: {
    marginBottom: ms(160),
  },
  containerImage: {
    height: ms(240),
    width: ms(330),
  },
  Image: {
    width: ms(330),
    height: ms(240),
    borderRadius: ms(10),
    position: 'absolute',
  },
  containerDescription: {
    marginTop: ms(180),
    backgroundColor: 'white',
    borderRadius: ms(10),
    width: ms(330),
    height: ms(190),
  },
  title: {
    marginTop: ms(8),
  },
  txtTitle: {
    marginLeft: ms(22),
    color: 'black',
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: ms(30),
    lineHeight: ms(35),
  },
});
