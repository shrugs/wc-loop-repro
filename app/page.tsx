import Link from "next/link";
import { BaseActionComponent } from "./_components/base-action-component";
import { MainnetActionComponent } from "./_components/mainnet-action-component";

export default function Home() {
  return (
    <div>
      this is the home page{" "}
      <Link className="underline" href="/another-page">
        go to another page
      </Link>
      <BaseActionComponent />
      <MainnetActionComponent />
    </div>
  );
}
