import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Notifications } from "./pages/Notifications";
import { MyProfile } from "./pages/MyProfile";
import { BookList } from "./pages/BookList";
import { BookDetails } from "./pages/BookDetails";
import { WaitList } from "./pages/WaitList";
import { Reservations } from "./pages/Reservations";
import { MyRentals } from "./pages/MyRentals";
import { Dashboard } from "./pages/Dashboard";
import { BookRegister } from "./pages/BookRegister";
import { Inventory } from "./pages/Inventory";
import { RentalManagement } from "./pages/RentalManagement";
import { UserManagement } from "./pages/UserManagement";
import { AdminRegister } from "./pages/AdminRegister";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-50 text-slate-950 font-poppins overflow-y-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin_register" element={<AdminRegister />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/myProfile" element={<MyProfile />} />

          {/* User Routes */}
          <Route path="/bookList" element={<BookList />} />
          <Route path="/bookDetails" element={<BookDetails />} />
          <Route path="/waitList" element={<WaitList />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/myRentals" element={<MyRentals />} />

          {/* Admin Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookRegister" element={<BookRegister />} />
          {/* Book Management */}
          <Route path="/inventory" element={<Inventory />} />
          {/* Rental Management */}
          <Route path="/rentalManagement" element={<RentalManagement />} />
          {/* User Management */}
          <Route path="/userManagement" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
