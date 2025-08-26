
type ErrorMessageProps = {
    message?:string
}

function ErrorMessage({message}: ErrorMessageProps) {
  return (
    <p className="text-sm px-2 py-1 bg-red-100 text-red-500 rounded-md">
        {message}
    </p>
  )
}

export default ErrorMessage