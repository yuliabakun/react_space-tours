import { useEffect, useState } from "react";
import { MockPage } from "../../templates/MockPage";
import { Navigate } from "react-router-dom";

export const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  if (countdown === 0) {
    return <Navigate to="/" />;
  }

  return (
    <MockPage
      pageTitle="page not found, you will be redirected to home page in 5 seconds"
    />
  );
};
