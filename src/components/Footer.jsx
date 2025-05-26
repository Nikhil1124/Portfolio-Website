import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nikhil Medamdravu. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Nikhil1124" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mjsdnikhil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:nikhiljai2003@gmail.com">Email</a>
      </div>
    </footer>
  );
}
