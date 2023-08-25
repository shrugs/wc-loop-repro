import Link from "next/link";

export default function AnotherPage() {
  return (
    <div>
      this is another page{" "}
      <Link className="underline" href="/">
        go back home
      </Link>
    </div>
  );
}
