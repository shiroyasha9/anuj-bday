import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

dayjs.extend(utc);
dayjs.extend(timezone);

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  const arizonaTime = dayjs().tz("America/Phoenix");
  const formattedDateTime = arizonaTime.format("MMM D, YYYY h:mm A");

  const is27th = arizonaTime.date() === 27 && arizonaTime.month() === 10;
  return (
    <div className="h-screen flex items-center justify-center flex-col relative px-4">
      <div className="prose text-center max-w-none">
        <Image
          src={is27th ? "/happy.jpg" : "/sad.jpeg"}
          width={250}
          height={200}
          className="mx-auto"
          alt="Anuj Photo"
        />
        <h1>
          {is27th
            ? "Lesssgoo it's birthday for Anuj too! 🥳🎉"
            : "It is not yet birthday for Anuj ☹️😞"}
        </h1>
        <h3>Happy Birthday Bhai! 🎉🎉🎉</h3>
        <small>
          (from <b>Mubin</b> from Navi Mumbai, MH, India, Asia, Earth, Solar
          System, Milky Way, Universe)
        </small>
        <blockquote>
          {is27th
            ? "Humko kaam karna hai bhai - tere jaise thodi US mai rizz game khelre. We are building the next OpenAI - also Niru (IBM)."
            : "Humko sona hai bhai - tere jaise thodi US mai rizz game khelre. We are building the next OpenAI - Niru (IBM)."}
        </blockquote>
      </div>
      <div className="flex flex-col items-center prose space-y-2 mt-32">
        <span>Time in Arizona:</span>
        <Badge variant="outline">{formattedDateTime}</Badge>
        <cite>
          Sponsored by{" "}
          <Link
            href="https://teensy.tech"
            className="text-purple-800 no-underline hover:underline not-italic font-semibold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            teensy
          </Link>
        </cite>
      </div>
    </div>
  );
}
