import React, { useContext } from 'react';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import StyledLink from '../common/StyledLink';
import WrapperCabecalho from './styles/WrapperCabecalho';
import { Moon, Sun } from '../Icons/SwichIcons';

const links = [
  {
    text: 'Sobre mim',
    url: '/about',
  },

  {
    text: 'Contato',
    url: '/contato',
  },
];

export default function Cabecalho({ toggleTheme }) {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <WrapperCabecalho>
      <WrapperCabecalho.LeftSide>
        <StyledLink
          href="/"
          style={{ color: '#fff' }}
        >
          {'<Me />'}
        </StyledLink>
      </WrapperCabecalho.LeftSide>

      <WrapperCabecalho.RightSide>
        <Switch
          onChange={toggleTheme}
          checked={colorTheme.title === 'dark'}
          checkedIcon={<Sun />}
          uncheckedIcon={<Moon />}
          onColor={colorTheme.secondary.color}
          offColor={colorTheme.secondary.color}
        />
        {links.map((link) => (
          <li key={link.text}>
            <StyledLink
              href={link.url}
              style={{ marginLeft: '38px' }}
            >
              {link.text}
            </StyledLink>
          </li>
        ))}
      </WrapperCabecalho.RightSide>
    </WrapperCabecalho>
  );
}

Cabecalho.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
