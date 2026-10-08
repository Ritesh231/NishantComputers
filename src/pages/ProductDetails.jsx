import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, reviewsData } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice } from '../utils/storage';
import Rating from '../components/Rating';
import ProductCard from '../components/ProductCard';
import { 
  Heart, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Monitor, 
  Battery, 
  Wifi, 
  Keyboard, 
  Zap, 
  Star,
  UserCheck,
  ChevronRight
} from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const isWishlisted = isInWishlist(product.id);

  // States
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedRam, setSelectedRam] = useState(product.ram);
  const [selectedStorage, setSelectedStorage] = useState(product.storage);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  const relatedProducts = products
    .filter(p => (p.category === product.category || p.brand === product.brand) && p.id !== product.id)
    .slice(0, 4);

  const ramOptions = ["16GB", "32GB", "64GB"];
  const storageOptions = ["512GB SSD", "1TB SSD", "2TB SSD"];

  return (
    <div className="min-h-screen bg-bgMain py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-textSec mb-8">
          <Link to="/" className="hover:text-cyanPrimary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/laptops" className="hover:text-cyanPrimary">Laptops</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/laptops?category=${encodeURIComponent(product.category)}`} className="hover:text-cyanPrimary">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-textMain font-semibold truncate">{product.name}</span>
        </nav>

        {/* Product Details Main Section */}
        <div className="bg-white border border-borderColor rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - Image Gallery */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              {/* Main Image Box */}
              <div className="relative bg-slate-50 rounded-2xl border border-borderColor p-8 flex items-center justify-center h-96 sm:h-[450px] mb-4 group overflow-hidden">
                {product.discount > 0 && (
                  <span className="absolute top-4 left-4 bg-coralSoft text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                    {product.discount}% OFF
                  </span>
                )}
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {(product.images && product.images.length > 0 ? product.images : [product.image]).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl border-2 p-1 bg-slate-50 shrink-0 transition-all ${
                      selectedImage === img ? 'border-cyanPrimary ring-2 ring-cyanSoft' : 'border-borderColor opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain rounded-lg" />
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column - Specs & Purchasing Options */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyanPrimary uppercase tracking-wider">{product.brand}</span>
                  <span className="bg-cyanSoft text-cyanPrimary text-xs font-bold px-3 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-textMain mb-3">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <Rating rating={product.rating} reviews={product.reviews} />
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> In Stock ({product.stock} units)
                  </span>
                </div>

                {/* Price Display */}
                <div className="bg-bgSec rounded-2xl p-4 border border-borderColor mb-6 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-textMain">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-base text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-xs font-bold text-coralDark bg-red-50 px-2.5 py-1 rounded-md ml-auto">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                {/* Configurations Selectors */}
                <div className="space-y-4 mb-6">
                  {/* RAM Selector */}
                  <div>
                    <label className="text-xs font-bold text-textMain block mb-2">RAM Memory:</label>
                    <div className="flex gap-3">
                      {ramOptions.map(ram => (
                        <button
                          key={ram}
                          onClick={() => setSelectedRam(ram)}
                          className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                            selectedRam === ram 
                              ? 'bg-cyanPrimary text-white border-cyanPrimary shadow-sm'
                              : 'bg-white border-borderColor text-textMain hover:border-cyanPrimary/40'
                          }`}
                        >
                          {ram}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Storage Selector */}
                  <div>
                    <label className="text-xs font-bold text-textMain block mb-2">SSD Storage:</label>
                    <div className="flex gap-3">
                      {storageOptions.map(st => (
                        <button
                          key={st}
                          onClick={() => setSelectedStorage(st)}
                          className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                            selectedStorage === st 
                              ? 'bg-cyanPrimary text-white border-cyanPrimary shadow-sm'
                              : 'bg-white border-borderColor text-textMain hover:border-cyanPrimary/40'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Specs Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-textMain">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyanPrimary shrink-0" />
                    <span><strong>Processor:</strong> {product.processor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-cyanPrimary shrink-0" />
                    <span><strong>Display:</strong> {product.display}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyanPrimary shrink-0" />
                    <span><strong>Graphics:</strong> {product.graphics}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-cyanPrimary shrink-0" />
                    <span><strong>Battery:</strong> {product.battery}</span>
                  </div>
                </div>

                {/* Quantity & CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {/* Quantity */}
                  <div className="flex items-center border border-borderColor rounded-xl bg-slate-50 w-32 justify-between p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 font-bold text-slate-600 hover:text-black"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-textMain">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 font-bold text-slate-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product, quantity, { ram: selectedRam, storage: selectedStorage })}
                    className="flex-1 bg-cyanPrimary hover:bg-cyan-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>

                  {/* Buy Now */}
                  <button
                    onClick={() => {
                      addToCart(product, quantity, { ram: selectedRam, storage: selectedStorage });
                      navigate('/checkout');
                    }}
                    className="flex-1 bg-yellowLight text-amber-900 border border-amber-300 font-bold py-3.5 px-6 rounded-xl transition-all hover:bg-amber-200"
                  >
                    Buy Now
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3.5 rounded-xl border border-borderColor transition-all ${
                      isWishlisted ? 'bg-red-50 text-coralDark border-coralSoft' : 'bg-slate-50 text-textSec hover:text-coralSoft'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-coralDark' : ''}`} />
                  </button>
                </div>

                {/* Guarantees */}
                <div className="pt-4 border-t border-borderColor grid grid-cols-3 gap-2 text-[11px] text-textSec">
                  <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-cyanPrimary" /> Free Delivery</div>
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyanPrimary" /> 1 yr Warranty</div>
                  <div className="flex items-center gap-1.5"><RotateCcw className="w-4 h-4 text-cyanPrimary" /> 14 Days Return</div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Specifications & Reviews Tabs */}
        <div className="bg-white border border-borderColor rounded-3xl p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex border-b border-borderColor gap-8 mb-8">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-bold transition-all border-b-2 ${
                activeTab === 'specs' ? 'border-cyanPrimary text-cyanPrimary' : 'border-transparent text-textSec hover:text-textMain'
              }`}
            >
              Full Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-bold transition-all border-b-2 ${
                activeTab === 'reviews' ? 'border-cyanPrimary text-cyanPrimary' : 'border-transparent text-textSec hover:text-textMain'
              }`}
            >
              Customer Reviews ({reviewsData.length})
            </button>
          </div>

          {activeTab === 'specs' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Processor</span><span className="font-semibold text-textMain">{product.processor}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Installed RAM</span><span className="font-semibold text-textMain">{selectedRam}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Storage Capacity</span><span className="font-semibold text-textMain">{selectedStorage}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Display</span><span className="font-semibold text-textMain">{product.display}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Graphics Engine</span><span className="font-semibold text-textMain">{product.graphics}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Operating System</span><span className="font-semibold text-textMain">{product.operatingSystem}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Battery Life</span><span className="font-semibold text-textMain">{product.battery}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Weight</span><span className="font-semibold text-textMain">{product.weight}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Ports</span><span className="font-semibold text-textMain">{product.ports}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Wireless Connectivity</span><span className="font-semibold text-textMain">{product.wireless}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Keyboard</span><span className="font-semibold text-textMain">{product.keyboard}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-textSec">Warranty</span><span className="font-semibold text-textMain">{product.warranty}</span></div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-center">
                  <span className="text-4xl font-extrabold text-textMain">{product.rating}</span>
                  <div className="flex justify-center text-amber-400 mt-1">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="text-[11px] text-textSec mt-1 block">Based on {product.reviews} ratings</span>
                </div>
                <div className="flex-1 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2"><span className="w-8">5 star</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[85%]" /></div><span>85%</span></div>
                  <div className="flex items-center gap-2"><span className="w-8">4 star</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[10%]" /></div><span>10%</span></div>
                  <div className="flex items-center gap-2"><span className="w-8">3 star</span><div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[3%]" /></div><span>3%</span></div>
                </div>
              </div>

              {/* Review Cards */}
              <div className="divide-y divide-borderColor">
                {reviewsData.map(rev => (
                  <div key={rev.id} className="py-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img src={rev.avatar} alt={rev.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <h4 className="text-xs font-bold text-textMain">{rev.name}</h4>
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                            <UserCheck className="w-3 h-3" /> Verified Purchase
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-textSec">{rev.date}</span>
                    </div>
                    <Rating rating={rev.rating} showCount={false} />
                    <p className="text-xs text-textMain mt-2 leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-extrabold text-textMain mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
