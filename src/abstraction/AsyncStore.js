import AsyncStorage from '@react-native-community/async-storage';

export const asyncStoreGet = async key => {
  let data = '';
  try {
    data = await AsyncStorage.getItem(key);
  } catch (error) {
    // Error getting data
    data = '';
    console.log('AsyncStoreGet error:', error.message);
  }
  return data;
};

export const asyncStoreSave = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log('AsyncStoreSave error:', error.message);
  }
};

export const asyncStoreDelete = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error deleting data
    console.log('AsyncStoreDelete error:', error.message);
  }
};

export const asyncStoreGetAllKeys = async () => {
  let data = '';
  try {
    data = await AsyncStorage.getAllKeys();
  } catch (error) {
    // Error getting data
    data = '';
    console.log('AsyncStoreGetAllKeys error:', error.message);
  }
  return data;
};

export const asyncStoreDeleteAllKeys = async () => {
  try {
    AsyncStorage.getAllKeys()
      .then(keys => {
        console.log(keys);
        AsyncStorage.multiRemove(keys)
          .then(res => console.log('keys removed: '))
          .catch(err => {
            throw err;
          });
      })
      .catch(err => {
        throw err;
      });
  } catch (error) {
    // Error getting data
    data = '';
    console.log('AsyncStoreDeleteAllKeys error:', error.message);
  }
};
