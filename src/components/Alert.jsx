import { useAltContext } from "../context/AlertContext";
export default function Alert() {
    const { altData, setAltData } = useAltContext();
    const handleAlertClose = () => {
    setAltData({ type: "", message: "" })}
    const colorAlert = {
    danger: "p-4 bg-red-200",
    };
    if (!altData.message) return null;

    return (
      <div className={classes[altData.type]}>
        {altData.message}
        <i
          className="fa-solid fa-xmark absolute right-4 top-2"
          onClick={handleAlertClose}
        ></i>
      </div>
    );

}
