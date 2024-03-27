// import PropTypes from 'prop-types';

// function List(props) {
//     const category = props.category;
    // const itemsList = props.items;
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2,name: "banana", calories: 105}, 
    //                 {id: 3,name: "cherry", calories: 77}, 
    //                 {id: 4,name: "date", calories: 23}, 
    //                 {id: 5,name: "fig", calories: 74}, 
    //                 {id: 6,name: "grape", calories: 62}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ascending order alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // descending order alphabetical

    // fruits.sort((a, b) => a.calories - b.calories);  // ascending order numbers
    // fruits.sort((a, b) => b.calories - a.calories);  // descending order numbers
    
    // const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
    // const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);

//     const listItems = itemsList.map(item => <li key={item.id}>
//                                             {item.name}: &nbsp; 
//                                             <b>{item.calories}</b></li>);
//     return (
//         <>
//         <h3 className="list-category">{category}</h3>
//         <ol className="list-items">{listItems}</ol>
//         </>
//     );
// }

// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
// };

// List.defaultProps = {
//     category: "Category",
//     items: []
// };

// export default List;





// app code
// const fruits = [{id: 1, name: "apple", calories: 95}, 
//                     {id: 2,name: "banana", calories: 105}, 
//                     {id: 3,name: "cherry", calories: 77}, 
//                     {id: 4,name: "date", calories: 23}, 
//                     {id: 5,name: "fig", calories: 74}, 
//                     {id: 6,name: "grape", calories: 62}];

//     const vegetables = [{id: 7, name: "potato", calories: 110}, 
//                     {id: 8,name: "celery", calories: 15}, 
//                     {id: 9,name: "carrots", calories: 25}, 
//                     {id: 10,name: "corn", calories: 63}, 
//                     {id: 11,name: "broccoli", calories: 50}, 
//                     {id: 12,name: "radish", calories: 16}];


//     return (
//       <>
//         {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//         {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
//       </>
//     );