import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">© {new Date().getFullYear()} 나인 블로그</p>
    </footer>
  );
}

export default PageFooter;
