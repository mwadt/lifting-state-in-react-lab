// `src/components/BurgerStack.jsx`
// const BurgerStack = (props) => {
//     return <ul>// map through props.ingredients</ul>;
//   };
  
//   export default BurgerStack;
  

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;