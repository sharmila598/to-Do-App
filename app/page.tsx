import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto  mt-5">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-poppins">To-Do-List</h1>
        <AddTask />
      </div>
    </main>
  );
}
