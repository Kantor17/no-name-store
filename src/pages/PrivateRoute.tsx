import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/reduxHooks";
import Loader from "../ui/Loader";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { user, isLoading } = useTypedSelector((state) => state.auth);
  if (isLoading) return <Loader />;
  return user ? children : <Navigate to={"/login"} replace />;
}
