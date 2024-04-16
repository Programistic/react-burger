import { checkResponse } from "./constants";
import { passwordURL } from "./constants";

export const recoverPassword = async({state, setState}) => {
  await fetch(passwordURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": state.value,
    })
  })
  .then(checkResponse)
  .then(res => setState({...state, isSuccess: res.success}))
  .catch(res => setState({...state, error: res.status, isError: !res.ok}));
};
