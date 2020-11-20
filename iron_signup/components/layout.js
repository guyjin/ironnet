import Banner from "./banner";

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
