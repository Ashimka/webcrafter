const URL = import.meta.env.VITE_API_URL;

import "./styles/privacy.scss";

const PrivacyPolicy = () => {
  return (
    <object
      className="privacy"
      data={`${URL}/privacy-policy.pdf`}
      type="application/pdf"
    ></object>
  );
};

export default PrivacyPolicy;
