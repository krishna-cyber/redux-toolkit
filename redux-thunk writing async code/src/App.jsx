import PostList from "./features/posts/PostList";
import AddForm from "./features/AddForm";

function App() {
  return (
    <>
      <main className=' flex bg-blue-300 w-screen h-screen justify-around'>
        <div className=' flex flex-col gap-4 w-1/2'>
          <h1 className=' font-bold text-3xl'>React App</h1>
          <PostList />
        </div>

        <AddForm />
      </main>
    </>
  );
}

export default App;
