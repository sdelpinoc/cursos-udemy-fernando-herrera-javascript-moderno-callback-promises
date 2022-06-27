import './../css/components.css';
// import webpacklogo from './../assets/img/webpack-logo.png';

export const hello = name => {
    console.log(`Creating h1 tag`);

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hello ${name}!`;

    document.querySelector('body').append(h1);
    
    // img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.querySelector('body').append(img);
};