import React, { useEffect, useState } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const SellerBillingPage = () => {
  const [billingInfo, setBillingInfo] = useState(null);

  useEffect(() => {
    // Fetch user's billing information from the backend
    // Replace with actual API call
    const fetchedBillingInfo = {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      // Add more billing information fields
    };

    setBillingInfo(fetchedBillingInfo);
  }, []);

  return (
    // <Container>
<>
      <div> <h1>Billing Information</h1></div>
     <div>
      <Card>
        <Card.Header>Billing Details</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Name:</strong> {billingInfo?.firstName} {billingInfo?.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Address:</strong> {billingInfo?.address}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>City:</strong> {billingInfo?.city}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>State:</strong> {billingInfo?.state}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ZIP:</strong> {billingInfo?.zip}
          </ListGroup.Item>
          {/* Add more billing information fields */}
        </ListGroup>
      </Card>
      </div>
    {/* </Container> */}
    </>
  );
};

export default SellerBillingPage;