// import styles from './Button.module.css';

function Button() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times!`);
    //     }
    //     else {
    //         console.log(`${name} stop it!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "Clicked! 😁"; // console.log(`${name} you clicked me!`

    // const handleClick2 = (name) => console.log(`${name} stop it!`);

  return (<button onDoubleClick={(e) => handleClick(e)}>Click me 👍</button>);
}


export default Button;