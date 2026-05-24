import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import { AuthProvider } from "./context/AuthContext";
import { AdminLayout } from "./layouts/AdminLayout";
import { RequireAuth } from "./components/admin/RequireAuth";

// Lazy load public pages
const Index = lazy(() => import("./pages/Index"));
const EditorialBoard = lazy(() => import("./pages/EditorialBoard"));
const Guidelines = lazy(() => import("./pages/Guidelines"));
const CurrentIssue = lazy(() => import("./pages/CurrentIssue"));
const Archives = lazy(() => import("./pages/Archives"));
const Membership = lazy(() => import("./pages/Membership"));
const PublishWithUs = lazy(() => import("./pages/PublishWithUs"));
const Shop = lazy(() => import("./pages/Shop"));
const IssueView = lazy(() => import("./pages/IssueView"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load admin pages
const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const IssueList = lazy(() => import("./pages/admin/IssueList"));
const IssueEditor = lazy(() => import("./pages/admin/IssueEditor"));
const EditorialBoardList = lazy(() => import("./pages/admin/EditorialBoardList"));
const EditorialMemberEditor = lazy(() => import("./pages/admin/EditorialMemberEditor"));
const ProductList = lazy(() => import("./pages/admin/ProductList"));
const ProductEditor = lazy(() => import("./pages/admin/ProductEditor"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-sm font-semibold text-slate-500">Loading Agri Archives...</p>
              </div>
            </div>
          }>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/editorial-board" element={<EditorialBoard />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/current-issue" element={<CurrentIssue />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/publish-with-us" element={<PublishWithUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/issues/:id" element={<IssueView />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/contact" element={<Contact />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={
                <RequireAuth>
                  <AdminLayout />
                </RequireAuth>
              }>
                <Route index element={<Dashboard />} />
                <Route path="issues" element={<IssueList />} />
                <Route path="issues/new" element={<IssueEditor />} />
                <Route path="issues/:id" element={<IssueEditor />} />
                <Route path="editorial-board" element={<EditorialBoardList />} />
                <Route path="editorial-board/new" element={<EditorialMemberEditor />} />
                <Route path="editorial-board/:id" element={<EditorialMemberEditor />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/new" element={<ProductEditor />} />
                <Route path="products/:id" element={<ProductEditor />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
