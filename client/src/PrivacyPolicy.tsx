import "./styles/privacy.scss";

const PrivacyPolicy = () => {
  return (
    <object
      className="privacy"
      data={`assets/privacy-policy.pdf`}
      type="application/pdf"
    ></object>
  );
};

export default PrivacyPolicy;
