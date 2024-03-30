import BackgroundImage from "./../../static/images/background.png";

// Export default styles
export const DefaultStyles = `

* {  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {  
  display: flex;
  position:relative;
  align-items: center;
  flex-direction: column;

  width:100vw;
  overflow-x:hidden;
  min-height:100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--color-black);
  background-color: var(--whiteSmoke);
  background-image: url(${BackgroundImage});
  font-family: "BPG Arial Caps", sans-serif !important;
  
}
`;
