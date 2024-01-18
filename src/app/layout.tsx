import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import Navbar from './navbar';


type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s - b7web',
    default: 'b7web'
  }

}



const Layout = ({ children }: Props) => {
  return (
    <html>
      <body style={{ background: 'linear-gradient(to right, #ff8c00, #ff0000)', 
      minHeight: '100vh', margin: '0', padding: '0' }} className='bg-black text-white'>
        <Navbar />
        <h1>My First Project</h1>
        <hr />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;