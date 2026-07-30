type Product = {
  id: number;
  name: string;
  price: number;
};

function ListRendering() {
  const products: Product[] = [
    { id: 1, name: "Lip Tint", price: 35000 },
    { id: 2, name: "Cushion", price: 85000 },
    { id: 3, name: "Blush On", price: 45000 },
    { id: 4, name: "Mascara", price: 55000 },
    { id: 5, name: "Eyeliner", price: 30000 },
    { id: 6, name: "Eyeshadow", price: 95000 },
    { id: 7, name: "Loose Powder", price: 60000 },
    { id: 8, name: "Concealer", price: 50000 },
    { id: 9, name: "Highlighter", price: 70000 },
    { id: 10, name: "Setting Spray", price: 65000 }
  ];

  return (
    <div className="container">
      <h1>React Lanjutan - List Rendering</h1>
      <p>Daftar Produk Makeup</p>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>Rp {product.price.toLocaleString("id-ID")}</p>
            </div>

            <div className="product-actions">
              <button>Edit</button>
              <button>Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListRendering;