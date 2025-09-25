import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Urbanist:wght@700;900&display=swap');


*,*::before,*::after{box-sizing:border-box}
html,body,#root{height:100%}
body{
margin:0;
font-family: ${({theme}) => theme.fonts.body};
background: radial-gradient(circle at 10% 10%, rgba(255,59,59,0.04), transparent 20%),
linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9)),
${({theme}) => theme.colors.bg};
color: ${({theme}) => theme.colors.text};
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
line-height:1.5;
}


a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
button{font-family:inherit}


/* subtle grain texture overlay */
body::after{
content:'';
pointer-events:none;
position:fixed;inset:0;
background-image: url('/assets/grain.png'); /* place a small grain PNG in public/assets */
opacity:0.06;
mix-blend-mode:overlay;
}
`;


export default GlobalStyle;