export type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Dessert";
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Avocado Garden Toast",
    description: "Creamy avocado, crisp greens and a squeeze of lemon on golden sourdough.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&q=85",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "Easy",
    rating: 4.9,
    ingredients: ["2 slices sourdough", "1 ripe avocado", "1 tsp lemon juice", "Cherry tomatoes", "Salt and pepper"],
    steps: ["Toast the sourdough until golden.", "Mash avocado with lemon, salt and pepper.", "Spread over toast and finish with sliced tomatoes."]
  },
  {
    id: 2,
    title: "Rainbow Nourish Bowl",
    description: "A colourful bowl of grains, crunchy vegetables and a bright tahini dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=85",
    category: "Lunch",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    difficulty: "Easy",
    rating: 4.8,
    ingredients: ["1 cup cooked quinoa", "1 cucumber", "1 carrot", "1 cup chickpeas", "2 tbsp tahini"],
    steps: ["Cook quinoa according to the packet.", "Chop the vegetables and rinse chickpeas.", "Arrange everything in bowls and drizzle with tahini."]
  },
  {
    id: 3,
    title: "Creamy Tomato Pasta",
    description: "A comforting weeknight pasta tossed in a silky tomato and basil sauce.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85",
    category: "Dinner",
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "Easy",
    rating: 4.9,
    ingredients: ["250 g pasta", "1 cup tomato passata", "2 garlic cloves", "1/3 cup cream", "Fresh basil"],
    steps: ["Boil pasta in salted water until al dente.", "Sauté garlic, add passata and simmer for 8 minutes.", "Stir in cream and basil, then toss with drained pasta."]
  },
  {
    id: 4,
    title: "Berry Breakfast Pancakes",
    description: "Fluffy golden pancakes topped with fresh berries and a little maple syrup.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&q=85",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    ingredients: ["1 cup flour", "1 tbsp sugar", "1 tsp baking powder", "1 egg", "3/4 cup milk", "Mixed berries"],
    steps: ["Whisk flour, sugar and baking powder.", "Add egg and milk and mix until just combined.", "Cook small portions on a warm pan and serve with berries."]
  },
  {
    id: 5,
    title: "Crispy Chickpea Wrap",
    description: "Spiced chickpeas, crunchy lettuce and cooling yoghurt tucked into a soft wrap.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=85",
    category: "Lunch",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: "Easy",
    rating: 4.6,
    ingredients: ["1 can chickpeas", "2 tortillas", "1 tsp paprika", "Lettuce", "4 tbsp yoghurt"],
    steps: ["Drain chickpeas and toss with paprika.", "Pan-fry until crisp, about 10–12 minutes.", "Fill tortillas with lettuce, chickpeas and yoghurt."]
  },
  {
    id: 6,
    title: "Dark Chocolate Mousse",
    description: "An airy, rich chocolate dessert made for slow evenings and small celebrations.",
    image: "https://images.unsplash.com/photo-1511715112108-9acc2b8c2c7a?w=900&q=85",
    category: "Dessert",
    prepTime: 15,
    cookTime: 5,
    servings: 4,
    difficulty: "Medium",
    rating: 4.9,
    ingredients: ["150 g dark chocolate", "2 eggs, separated", "1 tbsp sugar", "1/2 cup whipping cream"],
    steps: ["Melt chocolate gently and let it cool slightly.", "Whip cream to soft peaks and whisk egg whites with sugar.", "Fold chocolate, cream and egg whites together; chill for 2 hours."]
  }
];
