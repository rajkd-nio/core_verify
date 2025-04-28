import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import '../../styles/nurseio-theme.css';
import ClientBootstrap from '../../components/ClientBootstrap';

export const metadata = {
  title: 'Document Verification',
  description: 'NurseIO Secure document verification',
};

export default function IframeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="embedded-iframe">
        <ClientBootstrap />
        <div className="nurseio-theme">
          {children}
        </div>
      </body>
    </html>
  );
} 