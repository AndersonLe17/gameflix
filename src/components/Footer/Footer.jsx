const Footer = ({img}) => {
  return (
    <footer className="bg-dark pt-3">
      <div className="text-center">
        <img src={img} alt="logo" />
      </div>
      <div className="copy text-center text-white mt-3">
        Copyright © GameFlix 2022
      </div>
    </footer>
  );
};

export default Footer;