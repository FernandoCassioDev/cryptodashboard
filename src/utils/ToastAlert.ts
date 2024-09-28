import { toast } from "react-toastify";

export function ToastAlert(mensagem: string, tipo: string) {
  switch (tipo) {
    case "sucesso":
      toast.success(mensagem, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      break;
    case "erro":
      toast.error(mensagem, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      break;
    case "info":
      toast.info(mensagem, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      break;
  }
}
