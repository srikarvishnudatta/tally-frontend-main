import { useEffect, useRef, type ReactNode } from "react";

type DialogProps = {
  open: boolean;
  setOpen: () => void;
  children?: ReactNode;
};

function Dialog({ open, setOpen, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);
  return (
    <dialog onCancel={setOpen}
    onClick={(e) => {
        if(e.target === e.currentTarget){
            setOpen();
        }
    }}
    ref={ref} 
    className={`absolute top-1/2 left-1/2 w-md -translate-x-1/2 -translate-y-1/2 p-6 rounded-2xl border border-gray-200
     transition-opacity duration-200 ease-out
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    `}>
        <h3 className="font-bold text-xl">This is the title</h3>
        <h5 className="text-gray-500 mb-5 mt-1">This is description</h5>
      {children}
    </dialog>
  );
}

export default Dialog;
