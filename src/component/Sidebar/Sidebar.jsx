import React, { useEffect, useRef } from 'react';
import * as s from './Sidebar.styled';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const currentRef = sidebarRef.current;

    const handleSidebarClick = e => {
      e.stopPropagation();
    };

    const handleDocumentClick = e => {
      if (isOpen && currentRef && !currentRef.contains(e.target)) {
        toggleSidebar(false);
      }
    };

    if (currentRef) {
      currentRef.addEventListener('click', handleSidebarClick);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('click', handleSidebarClick);
        document.removeEventListener('click', handleDocumentClick);
      }
    };
  }, [isOpen, toggleSidebar, sidebarRef]);

  return (
    <s.DivSidebar ref={sidebarRef}>
      <s.Sidebar>
        <s.List>
          <li>
            <s.StyledLink to="/">Home</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/catalog">Catalog</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/favorites">Favorites</s.StyledLink>
          </li>
        </s.List>
      </s.Sidebar>
    </s.DivSidebar>
  );
};

export default Sidebar;
{
  /* Благодаря этим изменениям предупреждение должно исчезнуть, и функция очистки должна работать правильно. */
}
