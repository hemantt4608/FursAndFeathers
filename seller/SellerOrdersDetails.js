import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const SellerOrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch seller-related order details from the backend
    // Replace with actual API call
    const fetchedOrders = [
      {
        id: 1,
        productName: 'Product A',
        customerName: 'John Doe',
        quantity: 2,
        total: 100,
      },
      // Add more orders
    ];

    setOrders(fetchedOrders);
  }, []);

  return (
    <Container>
      <h1>Seller Order Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Customer Name</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.customerName}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SellerOrderDetails;