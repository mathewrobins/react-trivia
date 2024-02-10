

function Direction({ direction, onClick }: { direction: string; onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
      <button 
        className = "nav-button" 
        onClick={onClick}
      >
        {direction === "forward" ? ">" :  "<"}
      </button>
    );
  }

export default Direction