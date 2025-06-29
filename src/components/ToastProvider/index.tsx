import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      richColors
      position="top-right"
      toastOptions={{ style: { padding: "16px" } }}
    />
  );
}
