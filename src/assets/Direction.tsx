
interface Props{
    direction: string
}

function Direction(props: Props) {
  return (
    <button>
        {props.direction === "forward" && " > "}
        {props.direction === "back" && " < "}
    </button>
  )
}

export default Direction