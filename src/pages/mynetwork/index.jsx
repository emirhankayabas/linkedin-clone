import { Helmet } from "react-helmet";

export default function MyNetwork() {
  const TITLE = "LinkedIn";
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div>
        <h1>My Network</h1>
      </div>
    </>
  );
}
