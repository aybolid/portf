const GoBackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <button onClick={handleClick} class="text-orange-500">
      {"< go back"}
    </button>
  );
};

export { GoBackButton };
