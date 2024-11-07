import { createSignal, onCleanup } from "solid-js";

const CurrentDateTime = () => {
  const [date, setDate] = createSignal(new Date());

  const timer = setInterval(() => {
    setDate(new Date());
  }, 1000);

  onCleanup(() => clearInterval(timer));

  const formattedDate = () => {
    const currentDate = date();

    const dateFormatted = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const timeFormatted = currentDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    return `${dateFormatted} ${timeFormatted}`;
  };

  return (
    <time dateTime={date().toISOString()} class="text-orange-500">
      {formattedDate()}
    </time>
  );
};

export { CurrentDateTime };
