import FormExample from "@/components/FormExample";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      clean slate
      <div>
        <Link href="/pets">Pets Page</Link>
      </div>
    </main>
  );
}
