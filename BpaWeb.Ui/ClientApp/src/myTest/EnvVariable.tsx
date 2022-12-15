import React from 'react'

type Props = {}

const EnvVariable: React.FC<Props> = (props) => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const api_key = process.env.REACT_APP_APP_ID;
  const env = process.env.REACT_APP_ENV;

  return (
    <div className="App">
      <b>ENV</b>::: {process.env.NODE_ENV}
      <br />
      <p>Client ID: {client_id}</p>
      <p>API Key: {api_key}</p>
      <p>Env Variable: {env}</p>
      <span>test</span>
    </div>
  );
}

export default EnvVariable