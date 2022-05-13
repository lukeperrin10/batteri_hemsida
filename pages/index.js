import Link from "next/link";


export default function Home() {
  return (
    <nav>
      <div>
        <Link href="/kurser" passRef>
          <a>Kurser</a>
        </Link>
      </div>
      <div>
        <Link href="/kontakt">
          <a>Kontakt</a>
        </Link>
      </div>
      <div>
        <Link href="/event">
          <a>Event</a>
        </Link>
      </div>
      <div>
        <Link href="/hitta-hit">
          <a>Hitta hit</a>
        </Link>
      </div>
    </nav>
  );
}
