import React from "react";
import { useState } from "react";
import styles from "./message-alert.module.scss";

export default function MessageAlert(props) {
  const { type = "success", message, className } = props;
  const [isVisible, setIsVisible] = useState(true);

  let messageClassName;

  if (type === "success") {
    messageClassName = `${styles.alert} ${styles.alert__success}`;
  }
  if (type === "error") {
    messageClassName = `${styles.alert} ${styles.alert__error}`;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`${
        className ? `${messageClassName} ${className}` : messageClassName
      } ${isVisible ? null : styles.none}`}
    >
      <span>{message}</span>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}
