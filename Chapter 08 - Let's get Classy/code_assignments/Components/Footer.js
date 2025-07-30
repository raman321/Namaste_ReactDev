// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/raman-kumar-6584b0107/" target="_blank">
        Raman Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Fire<span>Flavours</span> India
      </strong>
    </div>
  );
};

export default Footer;