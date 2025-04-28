import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import ClientBootstrap from '../components/ClientBootstrap';

export const metadata = {
  title: 'Core Verify',
  description: 'Secure document verification platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBootstrap />
        {children}
      </body>
    </html>
  );
} 