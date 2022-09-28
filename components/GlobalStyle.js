import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/noto-sans-v27-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/noto-sans-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('/fonts/noto-sans-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/noto-sans-v27-latin-regular.svg#NotoSans') format('svg'); /* Legacy iOS */
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
    }
`;

export default GlobalStyle;
