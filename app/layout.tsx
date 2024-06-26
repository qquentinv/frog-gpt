import './globals.css';
import { AppProviders } from './providers';

export const metadata = {
  title: 'FrogGPT',
  description: 'Chatbot powered by ChatGPT',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <AppProviders>
        <body className="dark:bg-gray-900 dark:text-white bg-gray-50 text-black h-full">
          {children}
        </body>
      </AppProviders>
    </html>
  );
}