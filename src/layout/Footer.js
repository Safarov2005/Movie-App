export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Muzaffar
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Safarov2005"
            about="_blank"
          >
            Git Hub
          </a>
        </div>
      </div>
    </footer>
  );
}
