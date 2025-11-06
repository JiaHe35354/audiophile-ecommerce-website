import { Link, useLocation, useRouteError } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import PageContent from "../components/shared/PageContent";

function ErrorPage() {
  const error = useRouteError();
  const location = useLocation();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error) {
    if (error.status === 404) {
      title = "Page not found";
      try {
        const data = JSON.parse(error.data);
        message = data.message || "The page you're looking for doesn’t exist.";
      } catch {
        message = "The page you're looking for doesn’t exist.";
      }
    } else if (error.status === 500) {
      title = "Server error";
      try {
        const data = JSON.parse(error.data);
        message =
          data.message || "Internal server error. Please try again later.";
      } catch {
        message = "Internal server error. Please try again later.";
      }
    } else {
      title = "Unexpected error";
      message = "Something went wrong while loading this page.";
    }
  }

  if (!error & (location.pathname !== "/")) {
    title = "Page not found";
    message = "The page you're looking for doesn’t exist.";
  }

  return (
    <>
      <Navbar />
      <main>
        <PageContent title={title}>
          <p className="text-4xl text-red-700">{message}</p>
          <Link
            to="/"
            className="btn text-white bg-red-600 inline-block hover:bg-red-400"
          >
            Back to Home
          </Link>
        </PageContent>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
