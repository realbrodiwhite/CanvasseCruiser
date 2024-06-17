// src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./services/AuthService";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import Loader from "./components/common/Loader";

import CanvasserDashboard from "./components/canvasser/CanvasserDashboard";
import CanvassingRoutes from "./components/canvasser/CanvassingRoutes";
import LeadForm from "./components/canvasser/LeadForm";
import VisitedAddresses from "./components/canvasser/VisitedAddresses";
import PerformanceMetrics from "./components/canvasser/PerformanceMetrics";

import CloserDashboard from "./components/closer/CloserDashboard";
import SalesLeads from "./components/closer/SalesLeads";
import CustomerDetails from "./components/closer/CustomerDetails";
import SalesForm from "./components/closer/SalesForm";
import CommissionTracker from "./components/closer/CommissionTracker";

import CrewManagement from "./components/crewLeader/CrewManagement";
import RouteAssignment from "./components/crewLeader/RouteAssignment";
import CanvasserPerformance from "./components/crewLeader/CanvasserPerformance";
import SupportTickets from "./components/crewLeader/SupportTickets";

import CustomerTickets from "./components/customerService/CustomerTickets";
import CustomerDetails from "./components/customerService/CustomerDetails";
import KnowledgeBase from "./components/customerService/KnowledgeBase";
import SatisfactionSurvey from "./components/customerService/SatisfactionSurvey";

import ManagerDashboard from "./components/managers/ManagerDashboard";
import TeamPerformance from "./components/managers/TeamPerformance";
import TargetSettings from "./components/managers/TargetSettings";
import CoachingTools from "./components/managers/CoachingTools";

import AdminDashboard from "./components/admin/AdminDashboard";
import UserManagement from "./components/admin/UserManagement";
import RolePermissions from "./components/admin/RolePermissions";
import SystemSettings from "./components/admin/SystemSettings";
import AuditLogs from "./components/admin/AuditLogs";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(delay);
  }, []);

  return (
    <AuthProvider>
      <Router>
        {isLoading ? (
          <Loader />
        ) : (
          <AuthContext.Consumer>
            {({ isAuthenticated, user }) => (
              <div className="app">
                <Header />
                <Sidebar />
                <main className="main">
                  <Routes>
                    {/* Canvasser Routes */}
                    <Route
                      path="/canvasser/dashboard"
                      element={<CanvasserDashboard />}
                    />
                    <Route
                      path="/canvasser/routes"
                      element={<CanvassingRoutes />}
                    />
                    <Route
                      path="/canvasser/lead-form"
                      element={<LeadForm />}
                    />
                    <Route
                      path="/canvasser/visited-addresses"
                      element={<VisitedAddresses />}
                    />
                    <Route
                      path="/canvasser/performance"
                      element={<PerformanceMetrics />}