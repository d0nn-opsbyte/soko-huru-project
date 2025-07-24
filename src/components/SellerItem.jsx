function SellerItem({ product, sellerProducts, setSellerProducts, sellerId }) {
  const baseURL = 'http://localhost:3000/Sellers';
  const selectedId = product.productId;
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function openEditWindow() {
    setClicked(!clicked);
  }

  function handleSubmit(event) {
    const editedProduct = {
      productId: product.productId,
      name: formData.name || product.name,
      price: parseInt(formData.price) || product.price,
      image: formData.image || product.image,
      description: formData.description || product.description
    };
    const filteredProducts = sellerProducts.filter(product => product.productId !== selectedId);
    const updatedProducts = [...filteredProducts, editedProduct];
    fetch(`${baseURL}/${sellerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Products: updatedProducts })
    }).then(() => setSellerProducts(updatedProducts))
      .catch((error) => console.error("Error editing product", error));
  }

  function handleDelete(event) {
    const confirmMessage = confirm("Are you sure you want to delete this product?");
    if (!confirmMessage) return;

    const productId = event.target.id;
    const updatedProducts = sellerProducts.filter(product => product.productId !== parseInt(productId));
    fetch(`${baseURL}/${sellerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Products: updatedProducts })
    })
      .then(response => {
        if (!response.ok) throw new Error('Error deleting product');
        setSellerProducts(updatedProducts);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <div style={{
      border: "1px solid #007bff",
      padding: "20px",
      borderRadius: "15px",
      textAlign: "center",
      width: "280px",
      backgroundColor: "#f5faff",
      boxShadow: "0 4px 12px rgba(0, 123, 255, 0.1)",
      transition: "transform 0.3s ease",
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          height: "180px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          border: "2px solid #007bff",
          marginBottom: "15px"
        }}
      />
      <h4 style={{ color: "#007bff", margin: "5px 0" }}>{product.name}</h4>
      <p style={{ fontWeight: "bold", color: "#333" }}>Price: Ksh {product.price}</p>
      <p style={{ color: "#555", fontSize: "14px", minHeight: "40px" }}>{product.description}</p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
        <button
          onClick={openEditWindow}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          Edit
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-pencil">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
        </button>

        <button
          onClick={handleDelete}
          id={product.productId}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          Delete
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-trash-2">
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: clicked ? "block" : "none", marginTop: "15px" }}>
        {["name", "price", "image", "description"].map((field, idx) => (
          <div key={field} style={{ marginBottom: "10px" }}>
            <label htmlFor={field} style={{ display: "block", color: "#007bff", fontWeight: "bold" }}>
              {`New ${field.charAt(0).toUpperCase() + field.slice(1)}:`}
            </label>
            {field === "description" ? (
              <textarea
                onChange={handleChange}
                id={field}
                name={field}
                value={formData[field]}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #007bff",
                  borderRadius: "8px",
                  fontSize: "14px",
                  textAlign: "left"
                }}
              />
            ) : (
              <input
                onChange={handleChange}
                type={field === "price" ? "number" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #007bff",
                  borderRadius: "8px",
                  fontSize: "14px"
                }}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Make Edit
        </button>
      </form>
    </div>
  );
}

export default SellerItem