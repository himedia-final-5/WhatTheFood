export default function fallbackRender({ error, resetErrorBoundary }) {
  console.error(error);
  console.log(resetErrorBoundary);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
