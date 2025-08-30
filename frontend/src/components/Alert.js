import React from "react";

const Alert = ({ message, type, onClose }) => (
  <div
    className={`p-4 mb-6 rounded-lg flex justify-between items-center ${
      type === "error" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
    }`}
  >
    <span className="text-sm font-medium">{message}</span>
    <button
      onClick={onClose}
      className="text-lg font-bold hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Close alert"
    >
      &times;
    </button>
  </div>
);

export default Alert;