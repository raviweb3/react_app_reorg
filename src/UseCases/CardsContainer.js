import React, {useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import {useReadCategoriesQuery} from '../Adapters/queries';

const CardsContainer = () => {
  const categoryParams = useReadCategoriesQuery();
  useEffect(() => {
    if (categoryParams.response && categoryParams.response.data) {
      categoryParams.startApi();
    }
  }, [categoryParams.response]);

  return <View></View>;
};

export default CardsContainer;
