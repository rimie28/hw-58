import React from "react";

interface AlertProps {
  type: "primary" | "success" | "warning" | "danger";
  onDismiss: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <>
      <div className={`alert alert-${type} d-flex justify-content-between`}>
        {children}
        {onDismiss && (
          <button
            type="button"
            className="btn-close"
            onClick={onDismiss}
          ></button>
        )}
      </div>
    </>
  );
};

export default Alert;
