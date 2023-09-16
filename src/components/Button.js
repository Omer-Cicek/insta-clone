export default function Button({ type = "button", children, ...props }) {
  return (
    <button
      type="submit"
      {...props}
      className="h-[30px] mt-1 rounded w-full flex  items-center justify-center gap-x-2 bg-brand font-medium px-2.5 text-white text-sm disabled:opacity-50"
    >
      {children}
    </button>
  );
}
