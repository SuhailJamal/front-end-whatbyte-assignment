import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <div className="bg-slate-100 flex flex-row">
      <Sidebar />
      <div>Hello World</div>
    </div>
  );
}
