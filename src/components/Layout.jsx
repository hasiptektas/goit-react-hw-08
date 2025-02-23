/* eslint-disable react/prop-types */
import AppBar from './AppBar/AppBar';

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}