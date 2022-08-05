import { useRouter } from "next/router";
import Landing from "../components/Landing";

export default function Home() {
  const route = useRouter();
  return (
    <div>
      <Landing />
    </div>
  );
}
