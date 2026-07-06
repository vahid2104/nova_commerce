import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import ProductList from "../pages/products/ProductList";
import ProductDetail from "../pages/products/ProductDetail";
import SearchResults from "../pages/products/SearchResults";
import BrandStore from "../pages/products/BrandStore";
import FlashSale from "../pages/products/FlashSale";

import ShoppingCart from "../pages/cart/ShoppingCart";

import Shipping from "../pages/checkout/Shipping";
import Payment from "../pages/checkout/Payment";
import ReviewConfirmation from "../pages/checkout/ReviewConfirmation";
import OrderConfirmation from "../pages/checkout/OrderConfirmation";

import LoginRegister from "../pages/account/LoginRegister";
import Dashboard from "../pages/account/Dashboard";
import OrderHistory from "../pages/account/OrderHistory";
import OrderDetailTracking from "../pages/account/OrderDetailTracking";
import AddressesPaymentMethods from "../pages/account/AddressesPaymentMethods";
import Wishlist from "../pages/account/Wishlist";
import ProfileSettings from "../pages/account/ProfileSettings";

import HelpCenter from "../pages/support/HelpCenter";
import ReturnExchangeWizard from "../pages/support/ReturnExchangeWizard";

import EmptyStateShowcase from "../pages/showcase/EmptyStateShowcase";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="brand/:brandSlug" element={<BrandStore />} />
        <Route path="flash-sale" element={<FlashSale />} />

        <Route path="cart" element={<ShoppingCart />} />

        <Route path="checkout/shipping" element={<Shipping />} />
        <Route path="checkout/payment" element={<Payment />} />
        <Route path="checkout/review" element={<ReviewConfirmation />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />

        <Route path="auth" element={<LoginRegister />} />
        <Route path="account" element={<Dashboard />} />
        <Route path="account/orders" element={<OrderHistory />} />
        <Route path="account/orders/:id" element={<OrderDetailTracking />} />
        <Route path="account/addresses" element={<AddressesPaymentMethods />} />
        <Route path="account/wishlist" element={<Wishlist />} />
        <Route path="account/profile" element={<ProfileSettings />} />

        <Route path="support" element={<HelpCenter />} />
        <Route path="support/return-exchange" element={<ReturnExchangeWizard />} />

        <Route path="empty-state" element={<EmptyStateShowcase />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}