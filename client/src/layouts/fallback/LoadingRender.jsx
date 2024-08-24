import "./LoadingRender.css";

/** @param {{message: ?string}} */
export default function LoadingRender({ message }) {
  return (
    <div className="flex justify-center h-full mt-[-86px]">
      <span className="loader"></span>
    </div>
  );
}
