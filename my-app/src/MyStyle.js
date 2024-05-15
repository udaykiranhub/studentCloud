import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

export { Nav, NavLink };
