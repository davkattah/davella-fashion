import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { QuickViewModal } from './components/ui/QuickViewModal';
import { Rotator360Modal } from './components/ui/Rotator360Modal';
import { CartDrawer } from './components/ui/CartDrawer';
import { ChatbotWidget } from './components/ui/ChatbotWidget';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { LookbookPage } from './pages/LookbookPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { EventsPage } from './pages/EventsPage';
import { AccountPage } from './pages/AccountPage';
import { WholesalePage } from './pages/WholesalePage';
import { AffiliatePage } from './pages/AffiliatePage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

import { Product } from './types';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-2 max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="p-4 rounded-2xl bg-onyx-950 text-white border border-gold-500/40 shadow-2xl flex items-start space-x-3 animate-slide-up"
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />}
          {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-crimson-900 shrink-0 mt-0.5" />}

          <div className="flex-1 text-xs">
            <h4 className="font-serif font-bold text-gold-400">{toast.title}</h4>
            <p className="text-onyx-300 font-light mt-0.5">{toast.message}</p>
          </div>

          <button onClick={() => removeToast(toast.id)} className="text-onyx-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-onyx-50 dark:bg-onyx-950 text-onyx-900 dark:text-onyx-50 transition-colors duration-300">
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'product-detail') setSelectedProduct(null);
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage onSelectProduct={handleSelectProduct} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {activeTab === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBackToShop={() => setActiveTab('shop')}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {activeTab === 'lookbook' && (
          <LookbookPage onSelectProduct={handleSelectProduct} />
        )}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'blog' && <BlogPage />}
        {activeTab === 'events' && <EventsPage />}
        {activeTab === 'account' && (
          <AccountPage onSelectProduct={handleSelectProduct} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'wholesale' && <WholesalePage />}
        {activeTab === 'affiliate' && <AffiliatePage />}
        {activeTab === 'careers' && <CareersPage />}
        {activeTab === 'contact' && <ContactPage />}
        {activeTab === 'checkout' && (
          <CheckoutPage
            onOrderComplete={() => setActiveTab('account')}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'admin' && <AdminDashboardPage />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Global Modals & Drawers */}
      <QuickViewModal />
      <Rotator360Modal />
      <CartDrawer onCheckout={() => setActiveTab('checkout')} />
      <ChatbotWidget />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  );
};
export default App;
