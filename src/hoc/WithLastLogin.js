// this is hoc
// hoc - just going to return the children of the props it gets.
// this is a wrapping comp that doesn't render any actual JSX 
// naming convention is to have 'With' prefix in its filename.

const WithLastLogin = ( props ) => props.children;

export default WithLastLogin;