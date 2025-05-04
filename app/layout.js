import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '../styles/coreverify-theme.css';
import ClientBootstrap from '../components/ClientBootstrap';
import { LoadingProvider } from '../context/LoadingContext';

export const metadata = {
  title: 'Core Verify',
  description: 'Secure document verification platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBootstrap />
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
} 