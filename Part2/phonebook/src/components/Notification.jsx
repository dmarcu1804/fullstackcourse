const Notification = ({ message }) => {
  // if (message === "") {
  //   return "";
  // }

  return message === "" || message === null ? null : <div className="error">{message}</div>;
};

export default Notification;
