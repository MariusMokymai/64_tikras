import LoginPage from './pages/LoginPage';
import NewItemPage from './pages/NewItemPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

export default function App() {
  return (
    <div className='container '>
      <h1 className='text-3xl font-bold underline'>Hello, world!</h1>

      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <ShopPage />
    </div>
  );
}
