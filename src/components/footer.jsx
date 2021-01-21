import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Actualitat Covid-19</strong> és un projecte d'
          <a
            href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
            target="_blank"
            rel="noreferrer"
          >
            Arnau Gómez
          </a>{' '}
          amb llicència{' '}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <hr />
        <p>
          
          Podeu consultar el codi obert a{' '}
          <a href="https://github.com/ArnoldGee/covid-19-tracker">GitHub</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
