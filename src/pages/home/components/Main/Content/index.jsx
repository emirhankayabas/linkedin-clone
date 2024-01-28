import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

export default function Content() {
  return (
    <main className="flex-1 w-full">
      <NewPost />
      <Posts />
    </main>
  );
}
