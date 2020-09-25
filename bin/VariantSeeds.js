require('dotenv').config();

const mongoose = require('mongoose');

const Variant = require('../models/Variant.model');

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const variants = [
  {
    title: 'Spinach Lasagne',
    ingredients: `
    70 g unsalted butter
    50 g plain flour
    800 ml milk
    1 fresh bay leaf
    800 g spinach
    200 g ricotta cheese
    1 whole nutmeg , for grating
    300 g fresh lasagne sheets
    100 g Parmesan cheese`,
    instructions: `
    1. Preheat the oven to 190°C/375°F/gas 5.

    2. Melt 50g of the butter in a pan and whisk in the flour. Cook for 1 to 2 minutes, then whisk in the milk till smooth. Season with sea salt and freshly ground black pepper, add the bay leaf and simmer for 5 minutes. Turn off the heat.

    3. Remove the stalks from the spinach, then wilt with the remaining 20g butter in a covered pan. When wilted, drain, then, when cool enough to handle, squeeze out the liquid.

    4. Chop the spinach and mix with the ricotta, a ladleful of the white sauce and a good grating of nutmeg. Season.

    5. In a baking dish, layer the lasagne sheets, white sauce, spinach mixture and a grating of Parmesan. Finish with a layer of pasta topped with sauce and more Parmesan.

    6. Bake for 30 minutes, or till golden.`,
    image:
      'https://img.jamieoliver.com/jamieoliver/recipe-database/2ipm2HQHql2Azq2dLfiA4k.jpg?tr=w-600',
    duration: 50,
    serves: 6,
    likes: 2,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f80',
    createdBy: '5f6d271cb1af8e969fa1e04f',
  },
  {
    title: 'Sweet & sour chicken noodles',
    ingredients: `
    2 x 200 g free-range chicken thighs
    150 g fine rice noodles
    200 g sugar snap peas
    2 tablespoons Worcestershire sauce
    2 teaspoons chilli jam`,
    instructions: `
    1. Pull the skin off the chicken. Place the skin in a large non-stick frying pan on a medium heat to render and get golden, turning occasionally.

    2. Cut the bones out of the thighs and chuck into the pan for bonus flavour, then chop the meat into 2cm pieces.

    3. Move the skin and bones to one side of the pan, then add the meat alongside and cook for 5 minutes, or until golden, stirring occasionally.

    4. Once crispy, remove, chop and reserve the skin, discarding the bones.

    5. Meanwhile, cook the noodles in boiling salted water according to the packet instructions. Halve the sugar snaps lengthways.

    6. Once soft, drain the noodles, reserving a mugful of cooking water, then refresh under cold water.

    7. Use scissors to snip the noodles into roughly 8cm lengths.

    8. Stir the Worcestershire sauce and chilli jam into the chicken pan and let the jam melt, then add the sugar snaps and noodles.

    9. Toss over the heat for 2 minutes, adding a splash of reserved noodle water to loosen, if needed.

    10. Taste and season to perfection with sea salt and black pepper, then dish up and sprinkle over the reserved crispy chicken skin.`,
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89081008.jpg?tr=w-600',
    duration: 20,
    serves: 2,
    likes: 5,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f81',
    createdBy: '5f6d271cb1af8e969fa1e04f',
  },
  {
    title: 'Sweet potato & blue cheese frittata',
    ingredients: `
    1 large sweet potato
    3 tablespoons olive oil
    2 medium red onions
    6 large free-range eggs
    100 g blue cheese
    1 whole nutmeg, for grating`,
    instructions: `
    1. Preheat the oven to 190ºC/gas 5.

    2. Rub the sweet potato with 1 tablespoon of oil and season with sea salt and black pepper. Bake for 40 minutes, or until cooked through. Remove and leave to cool.

    3. Peel and finely slice the onions. Heat 1 tablespoon of oil in a 26cm ovenproof frying pan over a medium heat, add the onion, pop on the lid and cook for 20 minutes, or until soft. Leave to cool.

    4. Whisk the eggs in a bowl. Crumble in the cheese, then add the onion, and scoops of sweet potato flesh, discarding the skin. Add a good grating of nutmeg, then season.

    5. Wipe out the pan and coat with 1 tablespoon of oil, then add the egg mixture and fry over a medium heat until the eggs start to settle and cook.

    6. Reduce the heat to low and cook for 3 more minutes, then transfer to the oven for 10 minutes, or until cooked through.

    7. Delicious served with a seasonal salad.`,
    image:
      'https://img.jamieoliver.com/jamieoliver/recipe-database/CRD7mBVCaJxBQuY170RSIo.jpg?tr=w-600',
    duration: 60,
    serves: 4,
    likes: 10,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f82',
    createdBy: '5f6d28102d247396ffa72f9e',
  },
  {
    title: 'Thai green curry',
    ingredients: `
    1 butternut squash (1.2kg)
    groundnut oil
    2x 400 g tins of light coconut milk
    400 g leftover cooked greens, such as Brussels sprouts, Brussels tops, kale, cabbage, broccoli
    350 g firm silken tofu
    75 g unsalted peanuts
    sesame oil
    1 fresh red chilli
    2 limes`,
    instructions: `
    1. Preheat the oven to 180ºC/350ºF/gas 4.

    2.Wash the squash, carefully cut it in half lengthways and remove the seeds, then cut into wedges. In a roasting tray, toss with 1 tablespoon of groundnut oil and a pinch of sea salt and black pepper, then roast for around 1 hour, or until tender and golden.

    3. For the paste, toast the cumin seeds in a dry frying pan for 2 minutes, then tip into a food processor.

    4. Peel, roughly chop and add the garlic, shallots and ginger, along with the kaffir lime leaves, 2 tablespoons of groundnut oil, the fish sauce, chillies (pull off the stalks), coconut and most of the coriander (stalks and all).

    5. Bash the lemongrass, remove and discard the outer layer, then snap into the processor, squeeze in the lime juice and blitz into a paste, scraping down the sides halfway.

    6. Put 1 tablespoon of groundnut oil into a large casserole pan on a medium heat with the curry paste and fry for 5 minutes to get the flavours going, stirring regularly.
    
    7. Tip in the coconut milk and half a tin’s worth of water, then simmer and thicken on a low heat for 5 minutes.
    
    8. Stir in the roasted squash, roughly chop and add the leftover greens and leave to tick away on the lowest heat, then taste and season to perfection.

    9. Meanwhile, cube the tofu and fry in a pan on a medium- high heat with 1 tablespoon of groundnut oil for 2 minutes, or until golden.

    10. Crush the peanuts in a pestle and mortar and toast in the tofu pan until lightly golden.

    11. Serve the curry topped with the golden tofu and peanuts, drizzled with a little sesame oil. Slice the chilli and sprinkle over with the reserved coriander leaves. Serve with lime wedges, for squeezing over. Great with sticky rice.`,
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/51137628.jpg?tr=w-600',
    duration: 80,
    serves: 8,
    likes: 5,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f83',
    createdBy: '5f6d28102d247396ffa72f9e',
  },
  {
    title: 'Butter chicken',
    ingredients: `
    2–3 fresh mixed-colour chillies
    350 g ripe mixed-colour cherry tomatoes
    4 cloves of garlic
    6cm piece of ginger
    1 tablespoon garam masala
    4 heaped tablespoons natural yoghurt
    2 x 150 g free-range skinless chicken breasts
    olive oil
    2 tablespoons smooth cashew butter`,
    instructions: `
    Halve and deseed the chillies. Place in a large non-stick frying pan on a high heat with the tomatoes and blacken all over, turning occasionally. Meanwhile, peel the garlic and ginger, and finely grate into a large bowl. Add most of the garam masala, a pinch of sea salt and black pepper and 1 tablespoon of yoghurt. Deeply score the chicken breasts at 1cm intervals, then massage with the marinade.

    Once charred, remove the tomatoes and chillies to a board, returning the pan to a medium heat with ½ a tablespoon of olive oil and the chicken. Cook and char for 10 minutes, turning halfway, while you pinch off and discard the tomato skins and roughly chop 1–2 of the chillies, to taste. Remove the gnarly chicken from the pan and go in with the tomatoes, chopped chillies and cashew butter. Pour in 250ml of boiling kettle water and stir to pick up the sticky bits. Let it bubble vigorously for 2 minutes and once it starts to thicken, return the chicken to the pan, turning in the sauce for a final 2 minutes, or until cooked through, then remove to a board. Off the heat, season the sauce to perfection, then ripple through the remaining yoghurt. Slice the chicken and serve with the remaining chilli and garam masala.`,
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/109469658.jpg?tr=w-600',
    duration: 40,
    serves: 2,
    likes: 9,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f84',
    createdBy: '5f6d271cb1af8e969fa1e04f',
  },
  {
    title: 'Blanket pie',
    ingredients: `
    2–3 fresh mixed-colour chillies
    350 g ripe mixed-colour cherry tomatoes
    4 cloves of garlic
    6cm piece of ginger
    1 tablespoon garam masala
    4 heaped tablespoons natural yoghurt
    2 x 150 g free-range skinless chicken breasts
    olive oil
    2 tablespoons smooth cashew butter`,
    instructions: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, et. Quaerat beatae maiores, rem laborum dolorem incidunt quas nemo. Eum culpa quas ea, doloremque tempore repellat animi fuga consequuntur mollitia quis ullam voluptatem quam autem delectus tenetur exercitationem consequatur itaque incidunt ipsa? Quod debitis, repudiandae qui at natus animi? Aut cupiditate, porro numquam rem dolores voluptatibus magnam nobis ipsum earum!

    Minus numquam ducimus totam omnis voluptates perferendis in mollitia explicabo amet debitis, tenetur beatae sunt dolores! Ex, aliquid! Quos temporibus ut, nobis dolorem numquam distinctio dolores deleniti ea eligendi veritatis at illo hic eius magni rem! Fuga esse explicabo reiciendis sit quo magni aperiam optio?
`,
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/92507771.jpg?tr=w-600',
    duration: 80,
    serves: 4,
    likes: 1,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f85',
    createdBy: '5f6d28102d247396ffa72f9e',
  },
  {
    title: 'Spinach & feta blanket pie',
    ingredients: `
    2–3 fresh mixed-colour chillies
    350 g ripe mixed-colour cherry tomatoes
    4 cloves of garlic
    6cm piece of ginger
    1 tablespoon garam masala
    4 heaped tablespoons natural yoghurt
    2 x 150 g free-range skinless chicken breasts
    olive oil
    2 tablespoons smooth cashew butter`,
    instructions: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, et. Quaerat beatae maiores, rem laborum dolorem incidunt quas nemo. Eum culpa quas ea, doloremque tempore repellat animi fuga consequuntur mollitia quis ullam voluptatem quam autem delectus tenetur exercitationem consequatur itaque incidunt ipsa? Quod debitis, repudiandae qui at natus animi? Aut cupiditate, porro numquam rem dolores voluptatibus magnam nobis ipsum earum!

    Minus numquam ducimus totam omnis voluptates perferendis in mollitia explicabo amet debitis, tenetur beatae sunt dolores! Ex, aliquid! Quos temporibus ut, nobis dolorem numquam distinctio dolores deleniti ea eligendi veritatis at illo hic eius magni rem! Fuga esse explicabo reiciendis sit quo magni aperiam optio?
    `,
    image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/76718257.jpg?tr=w-600',
    duration: 80,
    serves: 4,
    likes: 0,
    difficulty: 'Not too tricky',
    variantOf: '5f6da98e4506ebbbdebd4f85',
    createdBy: '5f6d28102d247396ffa72f9e',
  },
];

Variant.create(variants)
  .then((variants) => {
    console.log(`Created ${variants.length} variants`);
    mongoose.disconnect();
  })
  .catch((err) => console.error(`An error occurred while getting variants from the DB: ${err}`));
