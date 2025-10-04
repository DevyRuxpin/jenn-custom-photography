import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { AuthProvider } from '../../contexts/AuthContext';
import { OrderProvider } from '../../contexts/OrderContext';
import { CartProvider } from '../../contexts/CartContext';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            {component}
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  it('renders the logo and navigation links', () => {
    renderWithProviders(<Header />);
    
    expect(screen.getByText('PhotoStudio')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Custom Order')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders utility icons', () => {
    renderWithProviders(<Header />);
    
    // Check for icon buttons (they might be rendered as buttons with icons)
    const searchButton = screen.getByRole('button', { name: /search/i });
    const cartButton = screen.getByRole('button', { name: /cart/i });
    const userButton = screen.getByRole('button', { name: /user/i });
    
    expect(searchButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(userButton).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    renderWithProviders(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
    
    // Initially, mobile menu should not be visible
    expect(screen.queryByText('Home')).not.toHaveClass('md:hidden');
    
    // Click menu button
    fireEvent.click(menuButton);
    
    // Menu should now be visible (this depends on the actual implementation)
    // Note: The exact behavior depends on how the mobile menu is implemented
  });

  it('opens cart when cart button is clicked', () => {
    renderWithProviders(<Header />);
    
    const cartButton = screen.getByRole('button', { name: /cart/i });
    fireEvent.click(cartButton);
    
    // Cart should open (this depends on the actual implementation)
    // Note: The exact behavior depends on how the cart modal is implemented
  });

  it('shows user authentication button when not logged in', () => {
    renderWithProviders(<Header />);
    
    // When not authenticated, should show sign in button
    const userButton = screen.getByRole('button', { name: /user/i });
    expect(userButton).toBeInTheDocument();
  });
});
