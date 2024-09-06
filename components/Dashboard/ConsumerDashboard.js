import React, { useState } from 'react';
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
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function ConsumerDashboard() {
  // const { name, phone, email, address, password } = route.params || {};
  const route = useRoute();
  const { user } = route.params || {};
  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50',
    secondary: '#C8E6C9',
    light: '#E5E5E5',
    grey: '#908e8c',
  };



  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [data, setData] = useState(foods.slice(0, 10));
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMoreData = () => {
    if (loadingMore) return;
    setLoadingMore(true);

    setTimeout(() => {
      const newPage = page + 1;
      const moreData = foods.slice(page * 10, (page + 1) * 10);
      if (moreData.length > 0) {
        setData([...data, ...moreData]);
        setPage(newPage);
      }
      setLoadingMore(false);
    }, 1500);
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
      <View style={style.cardImageContainer}>
        <Image source={food.image} style={style.cardImage} />
      </View>
      <View style={style.cardTextContainer}>
        <Text style={style.foodName}>{food.name}</Text>
        <Text style={style.foodIngredients}>{food.ingredients}</Text>
      </View>
      <View style={style.cardFooter}>
        <Text style={style.foodPrice}>₹{food.price}/kg</Text>
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
        <Text style={style.greetingText}>Hello</Text>
        <Text style={style.greetingTextBold}>!</Text>
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
    overflow: 'hidden',
  },
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  cardImage: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },
  cardTextContainer: {
    marginHorizontal: 20,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodIngredients: {
    fontSize: 14,
    color: '#908e8c',
    marginTop: 2,
  },
  cardFooter: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: 'bold',
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
