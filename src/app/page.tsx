import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {
  const arizonaTime = dayjs().tz("America/Phoenix");
  const formattedDateTime = arizonaTime.format("MMMM D, YYYY h:mm A");

  const is27th = arizonaTime.date() === 27;
  return (
    <div>
      <h1>{formattedDateTime}</h1>

      <h2>
        {is27th
          ? "Lesssgoo it's birthday for Anuj too!"
          : "It is not yet bday for Anuj :("}
      </h2>
    </div>
  );
}
