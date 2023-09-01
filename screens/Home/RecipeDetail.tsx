import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../theme/theme";

// 👇 styles
import { recipeDetailStyles } from "../../styles/RecipeDetail";

// 👇 components
import MyText from "../../components/MyText";

// 👇 utilities
import { common_icon_props } from "../../utilities/props.utility";

export default function RecipeDetail() {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <>
      {/* 👇 watch video button */}
      <TouchableOpacity
        activeOpacity={theme.sizes.touchableOpacity_high}
        onPress={() => {}}
        style={recipeDetailStyles.watchVideoBtn}
      >
        <>
          <MaterialCommunityIcons
            {...common_icon_props}
            name="play-circle"
            color={theme.colors.white}
          />

          <MyText
            fontWeight="bold"
            style={recipeDetailStyles.watchVideoBtnText}
          >
            Watch Video
          </MyText>
        </>
      </TouchableOpacity>
      <ScrollView
        style={recipeDetailStyles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* 👇 top */}
        <View style={recipeDetailStyles.top}>
          {/* 👇 left icon */}
          <MaterialCommunityIcons
            {...common_icon_props}
            name="chevron-left"
            color={theme.colors.black}
          />

          {/* 👇 heart icon */}
          <TouchableOpacity
            activeOpacity={theme.sizes.touchableOpacity_medium}
            onPress={() => {
              setLiked(!liked);
            }}
          >
            <MaterialCommunityIcons
              {...common_icon_props}
              name={liked ? "heart" : "heart-outline"}
            />
          </TouchableOpacity>
        </View>

        {/* 👇 top title */}
        <View style={recipeDetailStyles.topTitleContainer}>
          <MyText fontWeight="bold" style={recipeDetailStyles.topTitle}>
            Watercress salad
          </MyText>
          <MyText fontWeight="semi-bold" style={recipeDetailStyles.topSubTitle}>
            White Onion, Fennel, and watercress Salad
          </MyText>
        </View>

        {/* 👇 nutrition container */}
        <View style={recipeDetailStyles.nutritionContainer}>
          {/* 👇 left */}
          <View style={recipeDetailStyles.nutritionLeft}>
            {/* 👇 title */}
            <MyText fontWeight="bold" style={recipeDetailStyles.nutritionTitle}>
              Nutritions
            </MyText>

            {/* 👇 nutrition items */}
            <View style={recipeDetailStyles.nutritionItems}>
              {/*  👇 nutrition item*/}
              <View style={recipeDetailStyles.nutritionItem}>
                <MyText
                  fontWeight="bold"
                  style={recipeDetailStyles.nutritionItem_value}
                >
                  250
                </MyText>

                <View style={recipeDetailStyles.nutritionItem_right}>
                  <MyText
                    fontWeight="bold"
                    style={recipeDetailStyles.nutritionItem_rightText}
                  >
                    Calories
                  </MyText>
                  <MyText style={recipeDetailStyles.nutritionItem_rightWeight}>
                    Kcal
                  </MyText>
                </View>
              </View>

              {/*  👇 nutrition item*/}
              <View style={recipeDetailStyles.nutritionItem}>
                <MyText
                  fontWeight="bold"
                  style={recipeDetailStyles.nutritionItem_value}
                >
                  35
                </MyText>

                <View style={recipeDetailStyles.nutritionItem_right}>
                  <MyText
                    fontWeight="bold"
                    style={recipeDetailStyles.nutritionItem_rightText}
                  >
                    Carbo
                  </MyText>
                  <MyText style={recipeDetailStyles.nutritionItem_rightWeight}>
                    g
                  </MyText>
                </View>
              </View>

              {/*  👇 nutrition item*/}
              <View style={recipeDetailStyles.nutritionItem}>
                <MyText
                  fontWeight="bold"
                  style={recipeDetailStyles.nutritionItem_value}
                >
                  6.8
                </MyText>

                <View style={recipeDetailStyles.nutritionItem_right}>
                  <MyText
                    fontWeight="bold"
                    style={recipeDetailStyles.nutritionItem_rightText}
                  >
                    Protein
                  </MyText>
                  <MyText style={recipeDetailStyles.nutritionItem_rightWeight}>
                    g
                  </MyText>
                </View>
              </View>
            </View>
          </View>

          {/* 👇 right avatar */}
          <Avatar
            source={require("../../assets/images/showcase/showcase_image1.jpg")}
            rounded
            avatarStyle={recipeDetailStyles.nutrition_avatar}
            containerStyle={recipeDetailStyles.nutrition_avatarContainer}
          />
        </View>

        {/* 👇 ingredients container */}
        <View style={recipeDetailStyles.ingredientsContainer}>
          {/* 👇 title */}
          <MyText fontWeight="bold" style={recipeDetailStyles.ingredientsTitle}>
            Ingredients
          </MyText>

          {/* 👇 ingredients */}
          <View style={recipeDetailStyles.ingredientItems}>
            <MyText style={recipeDetailStyles.ingredientText}>
              2 cups pecans, divided
            </MyText>
            <MyText style={recipeDetailStyles.ingredientText}>
              1 tablespoon unsalted butter, melted
            </MyText>
            <MyText style={recipeDetailStyles.ingredientText}>
              1 1/2 tablespoons grated Parmesan cheese (Optional)
            </MyText>
            <MyText style={recipeDetailStyles.ingredientText}>
              1 teaspoon sea salt
            </MyText>
            <MyText style={recipeDetailStyles.ingredientText}>
              1/2 teaspoon ground black pepper
            </MyText>
            <MyText style={recipeDetailStyles.ingredientText}>
              1 tablespoon lemon juice (Optional)
            </MyText>
          </View>
        </View>

        {/* 👇 preparation container */}
        <View style={recipeDetailStyles.preparationContainer}>
          {/* 👇 title */}
          <MyText fontWeight="bold" style={recipeDetailStyles.preparationTitle}>
            Preparation
          </MyText>

          {/* 👇 preparation text */}
          <MyText
            fontWeight="medium"
            style={recipeDetailStyles.preparationText}
          >
            Place the asparagus into a mixing bowl, and drizzle with the olive
            oil. Toss to coat the spears, then sprinkle with Parmesan cheese,
            garlic, salt and pepper. Arrange the asparagus onto a baking sheet
            in a single layer.
          </MyText>

          <MyText
            fontWeight="medium"
            style={recipeDetailStyles.preparationText}
          >
            Bake in the preheated oven until just tender, 12 to 15 minutes
            depending on thickness. Sprinkle with lemon juice just before
            serving.
          </MyText>
        </View>
      </ScrollView>
    </>
  );
}
