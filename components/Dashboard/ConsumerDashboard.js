import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../consts/categories';
import foods from '../consts/foods';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function ConsumerDashboard({ route }) {
  const { name, phone, email, address, password } = route.params || {};
  // console.log(route.params);


  // const { my_data } = route.params || {}; // Default to empty object if route.params is undefined
  const [my_data, setmy_data] = useState({})
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://aaa3-152-52-34-131.ngrok-free.app/consumer/signup', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           name,
  //           phone,
  //           email,
  //           address,
  //           password,
  //         }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log('User registered:', data.data);
  //         setmy_data(data); // Pass userData to ConsumerDashboard
  //       } else {
  //         console.error('Failed to sign up');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50',
    secondary: '#C8E6C9',
    light: '#E5E5E5',
    grey: '#908e8c',
  };

  // Ensure userData is not undefined



  // State for categories and selected category
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  // State for foods (pagination)
  const [data, setData] = useState(foods.slice(0, 10)); // Initially load only 10 items
  const [page, setPage] = useState(1); // Current page number
  const [loadingMore, setLoadingMore] = useState(false); // Loading state

  // Simulate loading more data
  const loadMoreData = () => {
    if (loadingMore) return; // Prevent multiple calls

    setLoadingMore(true);

    setTimeout(() => {
      const newPage = page + 1;
      const moreData = foods.slice(page * 10, (page + 1) * 10); // Fetch next 10 items
      if (moreData.length > 0) {
        setData([...data, ...moreData]); // Append new data to current list
        setPage(newPage); // Update page number
      }
      setLoadingMore(false); // Stop loading
    }, 1500); // Simulate network delay
  };

  const ListCategories = () => (
    <View style={style.categoriesContainer}>
      <Text style={style.label}>Our Features</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
            style={style.categoryBtnWrapper}
          >
            <View
              style={[
                style.categoryBtn,
                {
                  backgroundColor: selectedCategoryIndex === index ? COLORS.primary : COLORS.white,
                },
              ]}
            >
              <View style={style.categoryBtnImgCon}>
                <Image source={item.image} style={style.categoryImage} />
              </View>
              <Text
                style={[
                  style.categoryName,
                  {
                    color: selectedCategoryIndex === index ? COLORS.white : COLORS.dark,
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  const Card = ({ food }) => (
    <TouchableOpacity style={style.card}>
      <View style={{ alignItems: 'center', top: -40 }}>
        <Image source={food.image} style={{ height: 120, width: 120 }} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
        <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>{food.ingredients}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>₹{food.price}/kg</Text>
        <View style={style.addToCartBtn}>
          <Icon name="add" size={20} color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={style.mainContainer}>
      <View style={style.header}>
        <View style={style.topLeft}>
          <View style={style.iconContainer}>
            <Icon name="home" size={24} color={COLORS.white} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, color: COLORS.dark }}>Your Location</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey }}>City, Country</Text>
          </View>
        </View>
        <View style={style.iconContainer}>
          <Icon name="notifications" size={24} color={COLORS.white} />
        </View>
      </View>

      <View style={style.greetingContainer}>
        <Text style={style.greetingText}>Hello,</Text>
        <Text style={style.greetingTextBold}>Ayush!</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}
      >
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search for food" />
        </View>
        <View style={style.sortBtn}>
          <Icon name="credit-card" size={28} style={{ color: COLORS.white }} />
        </View>
      </View>

      <ListCategories />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <Card food={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore && <ActivityIndicator size="large" color={COLORS.primary} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 28,
    color: '#000',
  },
  greetingTextBold: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginTop: 20,
  },
  categoriesListContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryBtnWrapper: {
    marginRight: 15,
  },
  categoryBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  categoryBtnImgCon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  categoryImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  categoryName: {
    fontSize: 14,
    marginTop: 5,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    marginHorizontal: 10,
  },
  addToCartBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
