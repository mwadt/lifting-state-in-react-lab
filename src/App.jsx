// // src/App.jsx

// import './App.css';

// export const availableIngredients = [
//   { name: 'Kaiser Bun', color: 'saddlebrown' },
//   { name: 'Sesame Bun', color: 'sandybrown' },
//   { name: 'Gluten Free Bun', color: 'peru' },
//   { name: 'Lettuce Wrap', color: 'olivedrab' },
//   { name: 'Beef Patty', color: '#3F250B' },
//   { name: 'Soy Patty', color: '#3F250B' },
//   { name: 'Black Bean Patty', color: '#3F250B' },
//   { name: 'Chicken Patty', color: 'burlywood' },
//   { name: 'Lettuce', color: 'lawngreen' },
//   { name: 'Tomato', color: 'tomato' },
//   { name: 'Bacon', color: 'maroon' },
//   { name: 'Onion', color: 'lightyellow' },
//   { name: 'Cheddar Cheese', color: '#FDE18B' },
//   { name: 'Swiss Cheese', color: '#F1E1A8' },
// ];

// const App = () => {
//   return (
//     <main>
//       <h1>Burger Stacker</h1>
//       <section>
//       {/* List & Stack components */}
//       </section>
//     </main>
//   );
// };

// export default App;

// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>Ingredients</h2>
          <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        </div>
        <div>
          <h2>Your Burger</h2>
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </div>
      </section>
    </main>
  );
};

export default App;

