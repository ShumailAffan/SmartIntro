import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

/** Custom 404 page */
export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />

      <div className="section-container min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
          <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/">
              <Home size={16} /> Go Home
            </Button>
            <Button onClick={() => window.history.back()} variant="outline">
              <ArrowLeft size={16} /> Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
