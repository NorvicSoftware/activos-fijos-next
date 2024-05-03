import Image from "next/image";
import LinkButton from "@/app/components/linkButton";

export default function Home() {
  return (
    <div className="header flex items-center">
      <h2 className="mr-4">Activos fijos</h2>
      <LinkButton name="Inventarios" route="/inventories" />
      <LinkButton name="Assets" route="/assets" />

    </div>
  );
}