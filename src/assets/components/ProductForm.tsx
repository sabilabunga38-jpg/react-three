import { useState } from "react";
import type { FormEvent } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
};

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !price.trim() || !category.trim()) {
      setError("Semua field wajib diisi.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      price: price.trim(),
      category: category.trim()
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setCategory("");
    setError("");
  };

  return (
    <div className="container">
      <h3>React Lanjutan - Form & Validasi</h3>
      <p>Form Tambah Produk</p>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Harga Produk"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Pilih Kategori</option>
          <option value="Lip Product">Lip Product</option>
          <option value="Face Makeup">Face Makeup</option>
          <option value="Eye Makeup">Eye Makeup</option>
          <option value="Skincare">Skincare</option>
        </select>

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Tambah Produk</button>
      </form>

      {products.length > 0 && (
        <div className="submitted-products">
          <h3>Produk Ditambahkan</h3>

          {products.map((product) => (
            <div className="submitted-product" key={product.id}>
              <strong>{product.name}</strong>
              <span>Rp {Number(product.price).toLocaleString("id-ID")}</span>
              <small>{product.category}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductForm;