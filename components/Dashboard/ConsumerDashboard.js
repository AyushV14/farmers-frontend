import {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import BottomNavigator from './BottomNavigator'; 
import categories from '../consts/categories';
import foods from '../consts/foods';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function ConsumerDashboard() {
  const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50', // Changed to a shade of green
    secondary: '#C8E6C9', // Changed to a light green shade
    light: '#E5E5E5',
    grey: '#908e8c',
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <View style={style.categoriesContainer}>
        <Text style={style.label}>Our features</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.categoriesListContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
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
                  <Image
                    source={category.image}
                    style={style.categoryImage}
                  />
                </View>
                <Text
                  style={[
                    style.categoryName,
                    {
                      color: selectedCategoryIndex === index ? COLORS.white : COLORS.dark,
                    },
                  ]}
                >
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            ₹{food.price}/kg
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 70 }}>
      <View style={style.header}>
        {/* Top Left Section */}
        <View style={style.topLeft}>
          <View style={style.iconContainer}>
            <Icon name="home" size={24} color={COLORS.white} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, color: COLORS.dark}}>Your Location</Text>
            <Text style={{fontSize: 14, color: COLORS.grey}}>City, Country</Text>
          </View>
        </View>
        {/* Top Right Section */}
        <View style={style.iconContainer}>
          <Icon name="notifications" size={24} color={COLORS.white} />
        </View>
      </View>
      
      {/* Main Content Container */}
      <View style={style.mainContainer}>
  <View style={style.greetingContainer}>
    <Text style={style.greetingText}>Hello,</Text>
    <Text style={style.greetingTextBold}>Xyz</Text>
  </View>
  <View
    style={{
      marginTop: 20, // Adjusted margin to give some space between the greeting and search bar
      flexDirection: 'row',
      paddingHorizontal: 20,
    }}>
    <View style={style.inputContainer}>
      <Icon name="search" size={28} />
      <TextInput
        style={{flex: 1, fontSize: 18}}
        placeholder="Search for food"
      />
    </View>
    <View style={style.sortBtn}>
      <Icon name="credit-card" size={28} style={{color: COLORS.white}} />
    </View>
  </View>
      </View>

        <View>
          <ListCategories />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={foods}
          renderItem={({item}) => <Card food={item} />}
        />
        <View style={style.bottomsec}>
          {/* <BottomNavigator style={style.bottomnav} /> */}
        </View>
      
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
    backgroundColor: '#4CAF50', // Changed to green shade
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5', // Adjust background color if needed
    borderRadius: 15, // Add border radius
    marginHorizontal: 10, // Add margin to give some space from the sides
    marginVertical: 20, // Add margin to give some space from the sides
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Center the greeting horizontally
    alignItems: 'center',      // Center the greeting vertically
    marginBottom: 10,          // Add some space between the greeting and the search bar
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
    backgroundColor: '#4CAF50', // Changed to green shade
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor:'#000',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10, // Space between label and category list
  },
  categoriesListContainer: {
    alignItems: 'center',
    
  },
  categoryBtnWrapper: {
    marginRight: 15,
  },
  categoryBtn: {
    width: 90, // Adjust as needed, should be equal to height for circular appearance
    height: 90, // Ensure equal height
    borderRadius: 60, // Half of width/height to make it circular
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // No background color, or set as needed
    flexDirection: 'column',
    padding: 10,
    
  },
  categoryBtnImgCon: {
    width: 40, // Smaller circle for image container
    height: 40,
    borderRadius: 30, // Half of width/height to make it circular
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  categoryImage: {
    width: 40, // Same as container width
    height: 40, // Same as container height
    borderRadius: 30, // Same as container radius
    
  },
  categoryName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
  
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: '#FFF',
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#4CAF50', // Changed to green shade
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomsec: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});
