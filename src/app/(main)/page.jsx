import { redirect } from "next/navigation";


const default_value = "01"

export default async function Home() {
  return (redirect(`/category/${default_value}`) );
}
