import "/src/css/alert.css";
function Alert({ message, alertType, icon }) {
  return (
    <section className={`alert ${alertType}`}>
      <i className={`fas ${icon}`}></i>
      <small>{message}</small>
    </section>
  );
}
export default Alert;
