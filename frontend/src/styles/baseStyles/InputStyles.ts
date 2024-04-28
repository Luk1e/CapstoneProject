// Export input styles
export const InputStyles = `

input,textarea {    
  border: none;
  outline: none;
  border-radius: 100px;

  font-size: var(--small-l);
  padding-left: 30px;


  [id*="placeholder"] {
    text-transform: capitalize;
  }

  &::placeholder {
    text-transform: capitalize;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    text-transform: capitalize;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    text-transform: capitalize;
  }
}

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

`;
