import Nav from "./components/nav";

export default function Layout(props) {
  return (
    <>
      <Nav />
      <main class="pt-16">{props.children}</main>
    </>
  );
}
