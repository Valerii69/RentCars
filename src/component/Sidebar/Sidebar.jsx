import React, { useEffect, useRef, memo } from 'react';
import * as s from './Sidebar.styled';

const Sidebar = ({ toggleModal }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const currentRef = sidebarRef.current;

      if (currentRef && !currentRef.contains) {
        toggleModal(); // Закрити модальне вікно при кліку поза Sidebar
    };

  }, [toggleModal]);

  const handleItemClick = () => {
    toggleModal(); // Закрити модальне вікно при кліку на елемент `li`
  };

  return (
    <s.Sidebar ref={sidebarRef}> {/* Додаємо ref */}
      <s.List>
        <li onClick={handleItemClick}>
          <s.StyledLink to="/">Home</s.StyledLink>
        </li>
        <li onClick={handleItemClick}>
          <s.StyledLink to="/catalog">Catalog</s.StyledLink>
        </li>
        <li onClick={handleItemClick}>
          <s.StyledLink to="/favorites">Favorites</s.StyledLink>
        </li>
      </s.List>
    </s.Sidebar>
  );
};

export default memo(Sidebar);
