import SellerNavbar from "../components/SellerNavbar";

function SellerConfig() {
  return (
    <div className="seller-config">
       <header>
        <SellerNavbar />
      </header>
      <h1>Seller Configuration</h1>
      <p>Configure your seller settings here.</p>
      {/* Add configuration options here */}
    </div>
  );
}
export default SellerConfig;