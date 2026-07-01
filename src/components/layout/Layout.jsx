import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgressBar from '../common/ScrollProgressBar';
import BackToTop from '../common/BackToTop';

/** Main layout wrapper with navigation, footer, and global UI elements */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-950">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-24" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
