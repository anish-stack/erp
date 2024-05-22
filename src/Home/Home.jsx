import React from 'react';
import Header from '../components/Headers/Header';
import './home.css'
import { Routes, Route } from 'react-router-dom';
import Dashboardhome from '../components/Dashboard-home/Dashboard-home';
import Addclient from '../pages/Add-Client/Addclient';
import AddVendor from '../pages/Add-vendor/AddVendor';
import CreateSalesOrder from '../pages/Sales/CreateSalesOrder';
import AllSales from '../pages/Sales/AllSales';
import Quations from '../pages/Invoices/Quations/Quations';
import Performa from '../pages/Invoices/Performa/Performa';
import Raw from '../pages/Stocks/Raw/Raw';
import AddRaw from '../pages/Stocks/Raw/AddRaw';
import OrderRaw from '../pages/Stocks/Raw/OrderRaw';
import OrderForm from '../pages/Stocks/Raw/OrderForm';
import PurchaseOrder from '../pages/Invoices/Purchase order/PurchaseOrder';
import ManufactureOrder from '../pages/Invoices/Manufacture/ManufactureOrder';
import CreateBills from '../pages/Invoices/Bills/CreateBills';
import AllBills from '../pages/Invoices/Bills/AllBills';
import Login from '../pages/auth/Login';
import CreateChallan from '../pages/Invoices/Challan/CreateChallan';
import DailyReport from '../pages/Reports/DailyReport';
import AllPurchaseOrder from '../pages/Invoices/Purchase order/AllPurchaseOrder';
import AllManufactOrder from '../pages/Invoices/Manufacture/AllManufactOrder';
import BillPreview from '../pages/Invoices/Bills/BillPreview';
const Home = () => {
  return (
    <div className="conatiner"> 
      <div className="row">

        <div className="col-4 sideNavHead   border-black col-md-2">
          <Header />
        </div>

        <div className="col-8 relative sideContentNav  col-md-10">
          <Routes>
            <Route path='/' element={<Dashboardhome />} />
            <Route path='/Add-Clients' element={<Addclient />} />
            <Route path='/Add-Vendors' element={<AddVendor />} />
            <Route path='/sales-order/create-order' element={<CreateSalesOrder />} />
            <Route path='/sales-order/All-order' element={<AllSales />} />
            <Route path='/sales-order/Quatation' element={<Quations />} />
            <Route path='/sales-order/Performa' element={<Performa />} />
            <Route path='/sales-order/Purchase-Order' element={<PurchaseOrder />} />


            <Route path='/bills/bill-preview' element={<BillPreview />} />

            <Route path='/order/all-purchase-order' element={<AllPurchaseOrder />} />
            <Route path='/order/create-purchase-order' element={<PurchaseOrder />} />
            <Route path='/order/all-manufacturing-order' element={<AllManufactOrder />} />
            <Route path='/order/create-manufacturing-order' element={<ManufactureOrder />} />


            {/* <Route path='/sales-order/Manufacturing-Order' element={<ManufactureOrder />} /> */}
            <Route path='/Stock-Manage/Raw' element={<Raw />} />
            <Route path='/Stock-Manage/AddRaw' element={<AddRaw />} />
            <Route path='/Stock-Manage/Order-Raw' element={<OrderRaw />} />
            <Route path='/Stock-Manage/Make-Raw-Order' element={<OrderForm />} />

            {/* ---------------------Bills And Challan ---------------------- */}
            <Route path='/Bills/Create-Bills' element={<CreateBills />} />
            <Route path='/Bills/All-Bills' element={<AllBills />} />
            <Route path='/challan/create-challan' element={<CreateChallan />} />
            {/* <Route path='/challan/All-Challan' element={<AllBills />} /> */}


            {/* ---------------------Authentication ---------------------- */}
            <Route path='/Login' element={<Login/>} />
            
            {/* -------------------- Reports ---------------------- */}
            <Route path='/reports/daily-reports' element={<DailyReport/>} />







          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
