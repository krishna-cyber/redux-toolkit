import "./App.css";
import PostList from "./features/posts/PostList";
import AddForm from "./features/AddForm";
function App() {
  return (
    <>
      <main>
        <h1>React App</h1>
        <PostList />
        <AddForm />
      </main>
    </>
  );
}

export default App;
