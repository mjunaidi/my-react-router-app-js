import products from '../product/products.json';
import React from 'react';

export default function ProductList() {
  const [input, setInput] = React.useState('');

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Product List</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type name or ID…"
          style={{
            width: "100%",
            padding: "0.6rem 0.8rem",
            marginTop: "0.4rem",
            borderRadius: 8,
            border: "1px solid #ddd",
            outline: "none",
          }}
        />
        <p>Search by "{ input }"</p>
        <ul>
          {products.filter(({name})=>name.toLowerCase().includes(input.toLowerCase())).map(({id,name}) => (
            <li key={id}><a href={`/product/${id}`}>{ name }</a></li>
          ))}
          </ul>
      </div>
    </div>
  );
}