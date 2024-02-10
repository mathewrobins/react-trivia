

function Direction({ direction, onClick }: { direction: string; onClick: React.EventHandler<any> }) {
    return (
      <button 
        className = "nav-button" 
        onClick={onClick}
      >
        {direction === "forward" ? "next >" :  "< previous"}
      </button>
    );
  }

export default Direction