// src/components/CreateNetworkForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Web3 from 'web3';


const CreateNetworkForm = ({ onNetworkCreated }) => {
  const [networkId, setNetworkId] = useState('');

  const createEthereumNetwork = async () => {
    try {
      // Connect to a local Ethereum node (Ganache)
      const web3 = new Web3('http://localhost:8545');

      // Get the network ID
      const id = await web3.eth.net.getId();
      setNetworkId(id);

      console.log(`Connected to Ethereum network with ID: ${id}`);

      // Pass the created network ID to the parent component
      onNetworkCreated(id);
    } catch (error) {
      console.error('Error connecting to Ethereum network:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Form>
        <Form.Group controlId="formNetworkId">
          <Form.Label>Enter Ethereum Network ID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ethereum Network ID"
            value={networkId}
            onChange={(e) => setNetworkId(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Button variant="primary" onClick={createEthereumNetwork}>
        Create Ethereum Network
      </Button>
    </div>
  );
};

export default CreateNetworkForm;
