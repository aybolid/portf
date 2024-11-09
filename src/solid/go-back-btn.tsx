const GoBackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button onClick={handleClick} class="text-accent">
      {"< go back"}
    </button>
  );
};

export { GoBackButton };
